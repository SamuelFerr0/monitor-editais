const notificar = require('./notify');

notificar('Teste do bot funcionando').then(() => {
  console.log('Mensagem enviada!');
});