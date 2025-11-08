import { Server } from "http";
import { prisma } from "./app/config/db";
import app from "./app";
import config from "./app/config";

let server: Server;

async function startPrisma() {
  try {
    await prisma.$connect();
    console.log("Prisma Connected Done");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

async function startServer() {
  try {
    await startPrisma();
    server = app.listen(config.PORT, () => {
      console.log("Server Runs at PORT:-", config.PORT);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

(async () => {
  await startServer();
})();

process.on("uncaughtException", (err) => {
  console.log("UnCaught Exception", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
process.on("unhandledRejection", (err) => {
  console.log("UnHandled Rejection", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
process.on("SIGTERM", (err) => {
  console.log("Signal Termination", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
