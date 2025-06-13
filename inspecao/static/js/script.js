const cpfValue = "045.892.730-98";
const situacaoValue = "Pendente"; // Pode mudar para "Pendente" ou "Irregular" para testar

window.onload = function() {
    document.getElementById("cpf").textContent = cpfValue;
    const situacaoEl = document.getElementById("situacao");
    situacaoEl.textContent = situacaoValue;

    const indicador = document.getElementById("status-indicator");
    indicador.classList.remove("status-regular", "status-pendente", "status-irregular");

    switch (situacaoValue.toLowerCase()) {
        case "regular":
            indicador.classList.add("status-regular");
            break;
        case "pendente":
            indicador.classList.add("status-pendente");
            break;
        case "irregular":
            indicador.classList.add("status-irregular");
            break;
        default:
            // sem cor se não bater com nenhum
            break;
    }

    initStars();
};

function initStars() {
    const stars = document.querySelectorAll(".star");
    stars.forEach(star => {
        star.addEventListener("click", () => {
            selectStars(star.dataset.value);
        });
    });
}

function selectStars(rating) {
    const stars = document.querySelectorAll(".star");
    stars.forEach(star => {
        star.classList.remove("selected");
        if (star.dataset.value <= rating) {
            star.classList.add("selected");
        }
    });
    document.querySelector(".stars").dataset.rating = rating;
}

function registrar() {
    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const nascimento = document.getElementById("nascimento").value;
    const cpf = cpfValue;
    const situacao = situacaoValue;
    const estrelas = document.querySelector(".stars").dataset.rating || "0";

    if(!nome || !telefone || !nascimento) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const dados = {
        cpf: cpf,
        situacao: situacao,
        nome: nome,
        telefone: telefone,
        nascimento: nascimento,
        avaliacao: estrelas
    };

    localStorage.setItem("dadosFormulario", JSON.stringify(dados, null, 2));

    // Redireciona para página de agradecimento
    window.location.href = "/obrigado";
}

function irParaContatos() {
    window.location.href = "/contatos";
}
