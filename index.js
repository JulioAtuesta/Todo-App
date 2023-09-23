(() =>{
function addTask(evento){
    evento.preventDefault();
    const inputText = document.getElementById("todo__front-input");
    if(inputText.value == ''){return(1)};
    const tasksUl = document.getElementById("todo__front-list");
    const newTask = createTask(inputText); 
    console.log(newTask);
    inputText.value = "";
    tasksUl.appendChild(newTask); 
    _isChecked();
};

function createTask(contenido){
    let lisElement = document.createElement("li");
        lisElement.setAttribute("id","todo__front-list-li"); //newTask.classList.add("clase")
    let check = document.createElement("input");
        check.setAttribute("type","checkbox");
        check.classList.add("checkTask")
    let content = document.createElement("span");
        content.innerText = contenido.value; 
//para el span funciono inner text, pero para el input fue value, ambos ahcen referencia al texto entre la etiqueta <>éste</>
    let remove = document.createElement("button")
        remove.classList.add("removeTask")
//para el boton value es un atributo que esta dentro de la etiqueta <button value="aquí"></>
        remove.innerText = '🗑️';

    lisElement.appendChild(check); //usar el metodo append con multiples parametros no funcionó
    lisElement.appendChild(content);
    lisElement.appendChild(remove);

    return(lisElement);
};

function _isChecked(){
    const checked = document.getElementsByClassName("checkTask");
    for (const i of checked){
        console.log(checked);
        console.log(i);
        i.addEventListener("click", taskDone =()=>{
            if(i.checked){
                console.log(i.parentNode);
                i.parentNode.style.cssText="text-decoration:line-through;";
            }else{
                i.parentNode.style.cssText="text-decoration:none;";
            }
        });  
        /*
//esto no funciona no ejecuta en "tiempo real" el llamado al taskdone el listener si lo hace
            taskDone;}*/ 
    }
};

/*
function taskDone(){
    console.log('llamado');
    if(i.checked){
        console.log('done');
    }
//    text-decoration:line-through
if(i.checked){
    console.log(`la tarea ${i + 1} is checked`);
}else{ 
    console.log(`la tarea ${i + 1} not checked`);
}
};
*/

function main(){
    const add_button = document.getElementById("todo__front-button");
    add_button.addEventListener("click",addTask);
};

window.addEventListener("load",main);
  
})();//IIFE por seguridad, las funciones de adentro no estan al alcance del user

  /*
    !importanto: 
    ?si una funcion no tiene parametros se llama 
    !SIN parentesis 
    ?de lo contrario la funciòn tiene un comportamiento raro Aunque 
    !No genera error*/
//newTask.innerHTML = // HTML va en mayusculas, tambien exite la funcion con minúsculas, no sirve
// en el template `` se podrìa llamar a una funcion e.g $main()