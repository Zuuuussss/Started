function togglemode() {
  const html = document.documentElement
    html.classList.toggle("light")

  // pegar tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
if(html.classList.contains("light")) {
  //se tiver ligth mode, adiciodar a imagem ligth
  img.setAttribute("src", "./assets/avatar ligth mode.png")
  
} else {
  //se tiver sem ligth mode, manter a imagem normal
  img.setAttribute("src", "./assets/avatar meu.png")

}


}
