const { createClient } = require("redis");

const client = createClient({
  url: "redis://localhost:6379",
});

client.on("error", (err) => {
  console.error("Redis Client Error:", err);
});

client.on("connect", () => {
  console.log("Connected to Redis");
});

(async () => {
  await client.connect();

  await client.set("name", "Arun");
  const value = await client.get("name");

  console.log(value); // Arun
})();