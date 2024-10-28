const express = require('express');
const app = express();

const createHtml = (title, content) => `
    <html>
        <head>
            <title>${title}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 20px;
                    background-color: #f4f4f4;
                }
                h1 {
                    color: #333;
                }
                p {
                    font-size: 18px;
                    line-height: 1.6;
                }
                .container {
                    max-width: 800px;
                    margin: auto;
                    padding: 20px;
                    background: white;
                    border-radius: 5px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }
                footer {
                    margin-top: 20px;
                    font-size: 14px;
                    color: #777;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>${title}</h1>
                <p>${content}</p>
                <footer>Bianca Torres do Nascimento</footer>
            </div>
        </body>
    </html>
`;

app.get('/', (req, res) => {
    res.send(createHtml('Segundo Projeto', 'Desenvolvimento de Software em Nuvem'));
});


app.get('/info', (req, res) => {
    res.send(createHtml('Informações do Projeto', 'Aqui você encontrará detalhes sobre o projeto e suas funcionalidades.'));
});


app.get('/contato/:nome', (req, res) => {
    const nome = req.params.nome; // Obtendo o parâmetro da URL
    res.send(createHtml('Contato', `Olá, ${nome}! Entre em contato conosco pelo e-mail: contato@exemplo.com.`));
});


const port = 4000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
