const express = require("express");
const ong = require("./controllers/OngController");
const profile = require("./controllers/ProfileController");
const incident = require("./controllers/IncidentController");
const session = require("./controllers/sessionControle");

const routes = express.Router();

routes.post("/ongs", ong.create);
routes.get("/ongs", ong.index);

routes.post("/session", session.create);

routes.post("/incident", incident.create);
routes.get("/incident", incident.index);
routes.delete("/incident/:id", incident.delete);

routes.get("/ong/incident", profile.index);

module.exports = routes;
