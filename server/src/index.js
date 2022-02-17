import express from "express";
import cors from "cors";

import petsRoute from "./routes/pets.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3800",
    credentials: true,
  })
);

const routes = [...petsRoute];
routes.forEach(({ method, route, handler }) => {
  app[method](route, handler);
});

app.listen(3850, () => {
  console.log("server listening on 3850");
});
