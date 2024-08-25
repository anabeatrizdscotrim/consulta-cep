const express = require('express');
const rotas = require('./routes');

const app = express();

app.use(express.json());
app.use('/api', rotas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

/*
app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/novarota', (req,res) => {
    res.send('Nova rota criada');
})


app.get('/consulta-cep/:cep' ,  async (req,res) => {
    const cep = req.params.cep; //obtendo o CEP da URL
    const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;

    try {
        if(!cepRegex.test(cep)) {
            return res.status(400).send('CEP inválido. Formato: xxxxx-xxx');
        }else{
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            res.json(response.data);
        }
        
    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        res.status(500).send('Erro ao consultar o cep');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

*/