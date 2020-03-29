import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { Feather } from "@expo/vector-icons";
import logo from "../../assets/logo.png";
import styles from "./styles";
import * as MailComposer from "expo-mail-composer";

export default function Detail({ route, navigation }) {
  const [incident, setInicident] = useState([]);

  useEffect(() => {
    const { caso } = route.params;
    setInicident(caso);
  });

  const message = `Ola ${
    incident.name
  }, estou entrando em contato pois gostaria de ajudar no caso "${
    incident.title
  }" com o valor de ${Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(incident.values)}`;

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Heroi do caso:${incident.title}`,
      recipients: [incident.email],
      body: message
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Feather name="arrow-left" size={20} color="#e82041" />
        </TouchableOpacity>
      </View>
      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>
          {incident.name} de {incident.city}/incident.uf}
        </Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>Valor</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(incident.values)}
        </Text>
      </View>
      <View style={styles.contactBox}>
        <Text style={styles.contactText}>Salve o dia!</Text>
        <Text style={styles.contactText}>Seja o herói desse caso.</Text>
        <Text style={styles.contactTextDesc}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
