const lista = document.querySelector('#lista-tarefas');
const texto = document.querySelector("#texto-tarefa");
const btn1 = document.querySelector("#criar-tarefa");
const btn2 = document.querySelector("#apaga-tudo");
const btn3= document.querySelector("#remover-finalizados");
const btn4= document.querySelector("#remover-selecionado");
const btn5 = document.querySelector('#salvar-tarefas');
const btnUp = document.querySelector('#mover-cima');
const btnDown = document.querySelector('#mover-baixo');

btn1.addEventListener("click", createLi);

function createLi(){
   const lista = document.querySelector('#lista-tarefas');
   const texto = document.querySelector("#texto-tarefa");
   const li = document.createElement("li");
   lista.appendChild(li);
   li.textContent = texto.value;
   texto.value="";
   texto.focus();
   lista.firstChild.classList.add('changeBackground');
};

lista.addEventListener("click", backGround );

function backGround (event) {
   const selectLi = document.querySelector('.changeBackground');
   selectLi.classList.remove('changeBackground');
   selectLi.style.backgroundColor ='';
   event.target.classList.add('changeBackground');
   event.target.style.backgroundColor= "rgb(128, 128, 128)";
};


lista.addEventListener('dblclick', function(e)  {
      e.target.classList.toggle('completed');
});


btn2.addEventListener("click", clearAll);
function clearAll() {
 lista.innerHTML='';
}

btn3.addEventListener("click", clearFinalizados);
function clearFinalizados() {
let n = document.querySelectorAll('.completed'); 
  for ( i=0; i < n.length; i +=1) {
     n[i].remove();
  }
}

btn4.addEventListener("click", clearSelected);
function clearSelected() {
   let n = document.querySelector('.changeBackground');    
        n.remove();
}

btn5.addEventListener('click', saveAll);
function saveAll() {
  localStorage.setItem('listaTarefas', JSON.stringify(lista.innerHTML));
}

lista.innerHTML = JSON.parse(localStorage.getItem('listaTarefas'));

btnUp.addEventListener('click', moveUp);
function moveUp() {
  const selectLi = document.querySelector('.changeBackground');
  if(selectLi.previousElementSibling) {
    selectLi.parentNode.insertBefore(selectLi, selectLi.previousElementSibling);
  }
}

btnDown.addEventListener('click', moveDown);
function moveDown() {
  const selectLi = document.querySelector('.changeBackground');
  if(selectLi.nextElementSibling) {
    selectLi.parentNode.insertBefore(selectLi.nextElementSibling, selectLi);
  } 
}

// ref https://github.com/kruschewskyjoao. Consultei seu código para tirar dúvidas sobre a definição do 
// do backgrounColor cinza uma única vez ao ser selecionado a li.  
// encapsulei todos os elementos button, input, ol dentro de div's e consegui fazer meu código funcionar.
 
 