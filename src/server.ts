import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;

const server = express();

server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({ extended: true }));

server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({ error: "Endpoint não encontrado." });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
