//-----Typed.JS-----\\
var typed = new Typed('#element', {
  strings: [
    '<p>&lt;Na minha máquina funciona/&gt;</p)', 
    '<p>&lt;Reinicia que funciona./&gt;</p)', 
    '<p>&lt;Era só um ;/&gt;</p)', 
    '<p>&lt;Só vou ajustar uma coisinha, rapidinho./&gt;</p)', 
    '<p>&lt;É só um if simples./&gt;</p)', 
    '<p>&lt;Se está feio, mas funciona, não está feio./&gt;</p)'],
  typeSpeed: 60,
  backSpeed: 40,
  showCursor: false,
  loop: true
});




//----PROJETOS----\\

let projetoHTML = document.getElementsByClassName("projetos-html")
let emBreve = document.getElementsByClassName("embreve")
let todos = document.getSelection("article#embreve")
const selecionarTodos = document.getElementById("select-todos")
const selecionarHTML = document.getElementById("select-html")



function filtroTodos() {
    const maxEmBreve = Math.max(emBreve.length)
    for(let i = 0; i < maxEmBreve; i++) {
        if (i < maxEmBreve) {
            selecionarTodos.style.border = '1px solid white'
            selecionarTodos.style.background = 'var(--cor4)'
            selecionarTodos.style.color = 'white'
            selecionarHTML.style.border = 'none'
            selecionarHTML.style.background = 'white'
            selecionarHTML.style.color = 'black'
            emBreve[i].style.display = 'flex'
        }
    }
}

function filtroHTML() {
    const maxEmBreve = Math.max(emBreve.length)
    for(let i = 0; i < maxEmBreve; i++) {
        if (i < maxEmBreve){
            selecionarHTML.style.border = '1px solid white'
            selecionarHTML.style.background = 'var(--cor4)'
            selecionarHTML.style.color = 'white'
            selecionarTodos.style.border = 'none'
            selecionarTodos.style.background = 'white'
            selecionarTodos.style.color = 'black'
            emBreve[i].style.display = 'none'  

        }
}
}