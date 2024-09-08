document.getElementById('formEndereco').addEventListener('submit', async (event) => {
    event.preventDefault();

    const logradouro = document.getElementById('logradouro').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const cep = document.getElementById('cep').value;

    const enderecoData = {
        Logradouro: logradouro,
        Bairro: bairro,
        Cidade: cidade,
        Estado: estado,
        Cep: cep
    };

    try {
        const response = await fetch('http://localhost:3000/api/enderecos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(enderecoData)
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('message').innerText = 'Endereço enviado com sucesso!';
            document.getElementById('formEndereco').reset();
        } else {
            document.getElementById('message').innerText = `Erro: ${result.error}`;
        }
    } catch (error) {
        document.getElementById('message').innerText = 'Erro na comunicação com o servidor.';
    }
});
