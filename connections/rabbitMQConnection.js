const amqp = require("amqplib");

async function connectRabbitMQ() {
  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    console.log("Connected to RabbitMQ");

    return { connection, channel };
  } catch (error) {
    console.error("RabbitMQ Connection Error:", error);
  }
}

connectRabbitMQ();