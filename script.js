function toggleMode() {
  // mudando a cor conforme modo light
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag da img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    // desafio alterar descrição da imagem
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos escuro e blusa preta, sem barba e com fundo azul."
    )
  } else {
    // se tiver sem light mode, manter a padrão
    img.setAttribute("src", "./assets/avatar.png")
    // desafio alterar descrição da imagem
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo."
    )
  }
}
