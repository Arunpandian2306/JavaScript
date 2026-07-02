const { Client } = require("@elastic/elasticsearch");

const client = new Client({
  node: "http://localhost:9200", // Elasticsearch URL
  auth: {
    username: "elastic",         // Optional
    password: "your_password",   // Optional
  },
  tls: {
    rejectUnauthorized: false,   // Use only for self-signed certificates
  },
});

module.exports = client;