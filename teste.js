const axios = require('axios');
const cheerio = require('cheerio');

async function testar() {
  const resposta = await axios.get('https://www.estrategiaconcursos.com.br/blog/concurso-pf-ultimas-noticias/');
  const $ = cheerio.load(resposta.data);
  const atualizacao = $('h2:contains("situação do Concurso PF")').next('p').text().trim().replace(/\s+/g, ' ');
  console.log(atualizacao);
}

testar();