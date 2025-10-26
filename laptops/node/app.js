const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const puerto = 3001;

app.use(bodyParser.json());

app.use("/laptops", (request, response, next) => {
  console.log("heders", request.headers);
  console.log("body", request.body);
  next();
});

app.get("/laptops", (request, response) => {
  const laptops = [
    { id: 1, marca: "Hp", modelo: "h15", procesador: "i7" },
    { id: 2, marca: "Lenovo", modelo: "f10", procesador: "i9" },
    { id: 3, marca: "Dell", modelo: "m35", procesador: "i5" }
  ];

  response.send(laptops);
});

app.post("/laptops", (request, response) => {
  request.body.id = 4;
  response.send(request.body);
});

app.put("/laptops/:idParam", (request, response) => {
  const id = request.params.idParam;
  console.log("id: ", id);
  response.send(request.body);
});

app.delete("/laptops/:idParam", (request, response) => {
  const id = request.params.idParam;
  console.log("id: ", id);
  response.send({id:id});
});

app.listen(puerto, () => {
  console.log("levantado mi servidor en puerto " + puerto);
});

