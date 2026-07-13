const fs = require('fs');
const caminhoEstado = './data/estado.json';

function lerEstadoAnterior() {
  if (!fs.existsSync(caminhoEstado)) {
    return null;
  }
  const conteudo = fs.readFileSync(caminhoEstado, 'utf-8');
  return JSON.parse(conteudo).atualizacao;
}

function salvarEstado(atualizacao) {
  if (!fs.existsSync('./data')) {
    fs.mkdirSync('./data');
  }
  fs.writeFileSync(caminhoEstado, JSON.stringify({ atualizacao }, null, 2));
}

function houveMudanca(atualizacaoNova, atualizacaoAntiga) {
  if (atualizacaoAntiga === null) {
    return false;
  }
  return atualizacaoNova !== atualizacaoAntiga;
}

module.exports = { lerEstadoAnterior, salvarEstado, houveMudanca };