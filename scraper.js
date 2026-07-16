const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.estrategiaconcursos.com.br/blog/concurso-pf-ultimas-noticias/'

async function buscarAtualizacaoPF() {
  const resposta = await axios.get(url, {
  headers: { 'User-Agent': 'Mozilla/5.0' },
  timeout: 10000 });
  const $ = cheerio.load(resposta.data);
  const atualizacao = $('h2:contains("situação do Concurso PF")').next('p').text().trim().replace(/\s+/g, ' ');
  return atualizacao;
}

module.exports = buscarAtualizacaoPF;