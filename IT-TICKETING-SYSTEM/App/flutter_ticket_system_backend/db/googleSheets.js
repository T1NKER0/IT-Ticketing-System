/* const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

// Ruta del archivo de credenciales
//const credentialsPath = path.join(__dirname, "../credentials.json");
const credentials = JSON.parse(fs.readFileSync(credentialsPath, "utf8"));

const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

module.exports = sheets; */
