const axios = require('axios');

async function testar() {
  const resposta = await axios.get('https://cebraspe.org.br');
  console.log(resposta.data);
}

testar();