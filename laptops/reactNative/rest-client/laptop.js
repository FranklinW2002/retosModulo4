const ip = "192.168.100.7";
const port = "3001";
const url = "http://" + ip + ":" + port + "/";

//http://192.168.100.7:3001/laptops
export const getAllLaptops = (fn) => {
  console.log("Prueva")
  fetch(url + "laptops")
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      console.log(body);
      fn(body);
    });
}

export const saveLaptopRest = (laptop,fnShowMesage) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"

    },
    body: JSON.stringify({
      marca: laptop.marca,
      modelo: laptop.modelo,
      procesador: laptop.procesador
    })
  }

  fetch(url + "laptops",config)
    .then(response => response.json())
    .then(body => {
      fnShowMesage("Se ah guargado la laptop");
      console.log(body);
    })
}

export const updateLaptopRest = (laptop,fnShowMesage) => {
  const config = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"

    },
    body: JSON.stringify({
      marca: laptop.marca,
      modelo: laptop.modelo,
      procesador: laptop.procesador
    })
  }

  fetch(url + "laptops/"+laptop.id,config)
    .then(response => response.json())
    .then(body => {
      fnShowMesage("Se ha actualizado la laptop");
      console.log(body);
    })
}

export const deleteLaptopRest = (laptop,fnShowMesage) => {
  const config = {
    method: "DELETE",
  }

  fetch(url + "laptops/"+laptop.id,config)
    .then(response => response.json())
    .then(body => {
      fnShowMesage("Se ha eliminado la laptop");
      console.log(body);
    })
}