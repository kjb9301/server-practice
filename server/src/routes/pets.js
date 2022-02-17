import { readDB, writeDB } from "../dbController.js";

const getPets = () => readDB("pets");
const setPets = (data) => writeDB("pets", data);

const petsRoute = [
  {
    method: "get",
    route: "/pets",
    handler: ({ query: { cursor = "" } }, res) => {
      const pets = getPets();
      res.send(pets);
    },
  },
];

export default petsRoute;
