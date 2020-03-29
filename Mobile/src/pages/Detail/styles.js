import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: 48,
    marginBottom: 16
  },
  incidentProprty: {
    fontSize: 14,
    color: "#414141",
    fontWeight: "bold",
    marginTop: 24
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#737373"
  },
  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 16
  },
  contactText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#13131a",
    lineHeight: 30
  },
  contactTextDesc: {
    fontSize: 15,
    color: "#737380",
    marginTop: 16
  },
  actions: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  action: {
    backgroundColor: "#e02041",
    borderRadius: 19,
    height: "48%",
    width: "48%",
    justifyContent: "center",
    alignItems: "center"
  },
  actionText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold"
  }
});
