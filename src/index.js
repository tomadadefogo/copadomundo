import cronometro from './cronometro.js'

cronometro()

 
  const selecionarTabela = document.querySelectorAll('a[href^="esquerdo"]')
  
 function callbackTabela(event) {
  event.preventDefault()
  selecionarTabela.forEach((li) => {
  })
  event.target.classList.toggle('ativo')
  if (event.target.classList.toggle('ativo') === false) {
    document.querySelector('.score').classList.toggle('.ativo')
  } 
 }

  selecionarTabela.forEach((li)=> {
    li.addEventListener('click', callbackTabela)
  })