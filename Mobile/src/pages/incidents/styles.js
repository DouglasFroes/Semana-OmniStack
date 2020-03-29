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
  headerText: {
    fontSize: 15,
    color: "#737380"
  },
  headerBold: {
    fontWeight: "bold"
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: "#13131a",
    fontWeight: "bold"
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#737380"
  },
  incidentList: {
    paddingTop: 32
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 16
  },
  incidentProprty: {
    fontSize: 14,
    color: "#414141",
    fontWeight: "bold"
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#737373"
  },
  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  detailsText: {
    color: "#e02041",
    fontSize: 15,
    fontWeight: "bold"
  }
});
