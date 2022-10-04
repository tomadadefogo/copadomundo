export default  function tabelas() {

const selecionarTabela = document.querySelectorAll('a[href^="premier"]')
  
 function callbackTabela(event) {
  event.preventDefault()
  selecionarTabela.forEach((li) => {
  })
  event.target.classList.toggle('ativo')
  if (event.target.classList.toggle('ativo') === false) {
    document.querySelector('.score').classList.toggle('ativo')
  } 
 }

  selecionarTabela.forEach((li)=> {
    li.addEventListener('click', callbackTabela)
  })

  const selecionarTabela2 = document.querySelectorAll('a[href^="laliga"]')
  
 function callbackTabela2(event) {
  event.preventDefault()
  selecionarTabela2.forEach((li) => {
  })
  event.target.classList.toggle('ativo2')
  if (event.target.classList.toggle('ativo2') === false) {
    document.querySelector('.score2').classList.toggle('ativo2')
  } 
 }

  selecionarTabela2.forEach((li)=> {
    li.addEventListener('click', callbackTabela2)
  })

  const selecionarTabela3 = document.querySelectorAll('a[href^="brasileiro"]')
  
 function callbackTabela3(event) {
  event.preventDefault()
  selecionarTabela3.forEach((li) => {
  })
  event.target.classList.toggle('ativo3')
  if (event.target.classList.toggle('ativo3') === false) {
    document.querySelector('.score3').classList.toggle('ativo3')
  } 
 }

  selecionarTabela3.forEach((li)=> {
    li.addEventListener('click', callbackTabela3)
  })
}