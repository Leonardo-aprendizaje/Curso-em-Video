// Console interno
const consoleInterno = document.getElementById("console-messages");
function logConsole(msg) {
    const p = document.createElement("p");
    p.textContent = msg;
    consoleInterno.appendChild(p);
    consoleInterno.scrollTop = consoleInterno.scrollHeight;
}

// Variáveis
let num = document.getElementById('fnum');
let lista = document.getElementById('flista');
let res = document.getElementById('res');
let valores = [];

// Botões
const adicionarBtn = document.getElementById("adicionar-btn");
const finalizarBtn = document.getElementById("finalizar-btn");
const botaoLimpar = document.getElementById("limpar");

// Evento do botão Adicionar
adicionarBtn.addEventListener("click", () => {
    adicionar();
    logConsole("Botão adicionar pressionado!");
});

// Evento do botão Finalizar
finalizarBtn.addEventListener("click", () => {
    mostrarResultados();
    logConsole("Resultados finalizados exibidos.");
});

// Evento do botão Limpar
botaoLimpar.addEventListener("click", () => {
    lista.innerHTML = "";
    valores = [];
    res.innerHTML = "";
    num.value = "";
    logConsole("Área de testes limpa.");
});

// Função de adicionar número
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));

        let option = document.createElement('option');
        option.text = `Valor ${num.value} adicionado`;
        lista.add(option);
    } else {
        window.alert('Valor inválido ou duplicado.')
        logConsole("Valor inválido ou duplicado.");
    }
    num.value = '';
    num.focus();
}

// Validação de número
function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100;
}

// Verificar se já está na lista
function inLista(n, listaValores) {
    return listaValores.indexOf(Number(n)) != -1;
}

// Mostrar estatísticas
function mostrarResultados() {
    if (valores.length === 0) {
        res.innerHTML = '<p>Nenhum número adicionado.</p>';
        return;
    }

    let total = valores.length;
    let maior = Math.max(...valores);
    let menor = Math.min(...valores);
    let soma = valores.reduce((a, b) => a + b, 0);
    let media = soma / total;

    res.innerHTML = `
        <p>Total de números: ${total}</p>
        <p>Maior número: ${maior}</p>
        <p>Menor número: ${menor}</p>
        <p>Soma dos números: ${soma}</p>
        <p>Média dos números: ${media.toFixed(2)}</p>
    `;
}
