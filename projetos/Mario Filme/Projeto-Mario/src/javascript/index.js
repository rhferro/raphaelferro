const botaoTrailer = document.querySelector('.botao-trailer')

const modal = document.querySelector(".modal");

const fecharModal = document.querySelector('.fechar-modal')

const video = document.getElementById('video')
const linkVideo = video.src
console.log(linkVideo)
//identifica a partir de um evento específico

// CONCEITO DRY:
// Don't Repeat Yourself
function alternarModal () {
    modal.classList.toggle("aberto")
}


botaoTrailer.addEventListener("click", () => {
    alternarModal()
    video.setAttribute('src', linkVideo)
})





//usar o x para fechar o video


fecharModal.addEventListener('click', () => {
    alternarModal()
    video.setAttribute('src', '')
})

