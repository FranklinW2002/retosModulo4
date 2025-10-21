const ip = "192.168.100.7";
const port = "3001";
const url = "http://" + ip + ":" + port + "/";

//http://192.168.100.7:3001/laptops
export const getAllLaptops = (fn) => {
  fetch(url + "laptops")
    .then((response) => {
      return response.json();
    })
    .then((body) => {
    console.log(body);
    fn(body);
    });
};
