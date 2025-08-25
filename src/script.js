function criarBotoes() {
  const container = document.getElementById("botoes");

  for (let i = 1; i <= 3; i++) {
    let botao = document.createElement("button");
    botao.textContent = "Botão " + i;
    botao.classList.add("btn" + i);

    botao.addEventListener("click", () => {
      let corOriginal = botao.style.backgroundColor;
      botao.style.backgroundColor = "orange";

      setTimeout(() => {
        botao.style.backgroundColor = corOriginal;
      }, 3000);
    });

    container.appendChild(botao);
  }
}

criarBotoes();