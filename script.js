const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Imagine que você encontrou um novo tipo de tecnologia que pode responder a qualquer pergunta e criar imagens e áudios incrivelmente realistas. O que você pensa inicialmente?",
        alternativas: [
            {
                texto: "Isso é bem perturbador!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é incrível!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Depois de conhecer essa nova tecnologia chamada Inteligência Artificial, sua professora decide dar uma série de aulas sobre o tema. Ao final de uma delas, ela pede que você escreva um relatório sobre como a IA pode ser usada em sala de aula. O que você faz?",
        alternativas: [
            {
                texto: "Usa uma ferramenta de busca online com IA para encontrar informações e apresentá-las de forma clara.",
                afirmacao: "afirmação"
            },
            {
                texto: "Prepara o relatório baseado em conversas com colegas, pesquisas na internet e o que você já sabe sobre o assunto.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Depois de escrever o relatório, a professora organiza um debate para discutir como a IA pode influenciar o futuro do trabalho. Qual é a sua posição nesse debate?",
        alternativas: [
            {
                texto: "Acredito que a IA pode criar novas oportunidades de trabalho e aprimorar habilidades humanas.",
                afirmacao: "afirmação"
            },
            {
                texto: "Estou preocupado com a possibilidade de a IA substituir empregos e acho importante proteger os trabalhadores.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após o debate, você precisa criar uma imagem que represente sua visão sobre a IA. O que você faz?",
        alternativas: [
            {
                texto: "Cria a imagem usando um programa de design como o Paint.",
                afirmacao: "afirmação"
            },
            {
                texto: "Gera a imagem com uma ferramenta de IA que cria imagens.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um projeto em grupo de biologia para entregar em breve, mas um colega decidiu usar IA para criar o trabalho. O resultado ficou igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Considera que usar o texto do chat é aceitável, pois é uma maneira válida de contribuir.",
                afirmacao: "afirmação"
            },
            {
                texto: "Embora a IA seja avançada, é importante revisar o trabalho e adicionar suas próprias ideias para garantir qualidade.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
