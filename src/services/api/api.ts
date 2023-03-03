import axios from "axios";
/* 
const api = axios
  .get("http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
console.log(api);

Dessa maneira até funciona no escopo local da variável criada. Teria que ser criado um hook e tô com preguiça
 */

const api = axios.create({
  baseURL: "http://pocs.digitalpages.com.br/mock/api/",
});

export default api;
