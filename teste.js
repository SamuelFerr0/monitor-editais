const buscarAtualizacaoPF = require('./scraper');
const { lerEstadoAnterior, salvarEstado, houveMudanca } = require('./compare');

async function testar() {
  const atualizacaoNova = await buscarAtualizacaoPF();
  const atualizacaoAntiga = lerEstadoAnterior();

  console.log('Nova:', atualizacaoNova);
  console.log('Antiga:', atualizacaoAntiga);
  console.log('Mudou?', houveMudanca(atualizacaoNova, atualizacaoAntiga));

  salvarEstado(atualizacaoNova);
}

testar();