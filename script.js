// script.js
function mostrarCadastro() {
    document.getElementById('tattoo').style.display = 'block';
}

document.getElementById('cadastroForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        cpf: document.getElementById('cpf').value,
        endereco: document.getElementById('endereco').value,
        portfolio: document.getElementById('portfolio').value
    };

    try {
        const response = await fetch('/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Cadastro realizado com sucesso!');
        } else {
            alert('Erro ao realizar cadastro.');
        }
    } catch (error) {
        alert('Erro ao realizar cadastro: ' + error.message);
    }
});
