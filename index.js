const buscarAtualizacaoPF = require('./scraper');
const { lerEstadoAnterior, salvarEstado, houveMudanca } = require('./compare');
const notificar = require('./notify');

async function main() {
  const atualizacaoNova = await buscarAtualizacaoPF();
  const atualizacaoAntiga = lerEstadoAnterior();

  if (houveMudanca(atualizacaoNova, atualizacaoAntiga)) {
    await notificar(atualizacaoNova);
  }

  salvarEstado(atualizacaoNova);
}

main();