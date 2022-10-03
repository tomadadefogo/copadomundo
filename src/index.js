import cronometro from './cronometro.js'

cronometro()

 
  const selecionarTabela = document.querySelectorAll('a[href^="esquerdo"]')
  
 function callbackTabela(event) {
  event.preventDefault()
  
  event.currentTarget.classList.toggle('ativo')
 }

  selecionarTabela.forEach((li)=> {
    li.addEventListener('click', callbackTabela)
  })