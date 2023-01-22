/*
  OBJ2 - quando clicar no botão 'veja o trailer' abrir a modal com o video do trailer

  OBJ1 - quando clicar no 'X' fechar a modal
*/


const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFechar = document.querySelector(".fechar-modal")
const modal = document.querySelector(".modal")
const video = document.getElementById("video");

const linkVideo = video.scr;
console.log(video.src);

function alternarModal(){
  modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", video.src);
  console.log(video.src);
})

botaoFechar.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", "");
})


