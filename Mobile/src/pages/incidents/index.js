import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";
import logo from "../../assets/logo.png";

import style from "./styles";

export default function Incidents({ navigation }) {
  const [casos, setCasos] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function loadIncident() {
    if (loading) {
      return;
    }

    if (total > 0 && casos.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get("incident", {
      params: { page }
    });

    setCasos([...casos, ...response.data]);
    setTotal(response.headers["x-total-conunt"]);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncident();
  }, []);

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image source={logo} />
        <Text style={style.headerText}>
          Total de <Text style={style.headerBold}>{total} casos</Text>
        </Text>
      </View>
      <Text style={style.title}>Bem-VIndo!</Text>
      <Text style={style.description}>
        Escolha um dos caso a baixo e salve o dia
      </Text>

      <FlatList
        data={casos}
        style={style.incidentList}
        keyExtractor={caso => String(caso.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncident}
        onEndReachedThreshold={0.2}
        renderItem={({ item: caso }) => (
          <View style={style.incident}>
            <Text style={style.incidentProperty}>ONG:</Text>
            <Text style={style.incidentValue}>{caso.name}</Text>

            <Text style={style.incidentProperty}>CASO:</Text>
            <Text style={style.incidentValue}>{caso.title}</Text>

            <Text style={style.incidentProperty}>Valor</Text>
            <Text style={style.incidentValue}>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(caso.values)}

              {/* {caso.values} */}
            </Text>

            <TouchableOpacity
              style={style.detailsButton}
              onPress={() => navigation.navigate("Detail", { caso })}
            >
              <Text style={style.detailsText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
