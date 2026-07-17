# Monitor de Editais — Concurso PF

Script que monitora automaticamente a página de atualizações do Concurso da Polícia Federal e envia uma notificação no Telegram sempre que a situação muda.

## Por que

Concurseiro vive de F5 em site de concurso esperando novidade. Esse projeto elimina isso: roda sozinho, de 6 em 6 horas, e só me avisa quando algo de fato mudou.

## Como funciona

1. Busca o HTML de uma página que resume a situação do Concurso PF
2. Extrai o trecho de atualização mais recente
3. Compara com o último estado salvo
4. Se mudou, envia mensagem no Telegram
5. Salva o novo estado

Roda automaticamente via GitHub Actions, sem precisar de servidor.

## Stack

- Node.js
- axios (requisição HTTP)
- cheerio (extração de dado do HTML)
- Telegram Bot API (notificação)
- GitHub Actions (agendamento, sem custo de infraestrutura)

## Rodando localmente


npm install


Cria um arquivo `.env` na raiz com:

TELEGRAM_TOKEN=seu_token
TELEGRAM_CHAT_ID=seu_chat_id



node index.js
