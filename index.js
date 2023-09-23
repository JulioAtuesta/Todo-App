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
    deleteTask();
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
        //añadir un break cada que se ejecute la funciòn
        i.addEventListener("click", taskDone =()=>{
            if(i.checked){
                console.log(i.parentNode.childNodes[1]);
                i.parentNode.childNodes[1].style.cssText="text-decoration:line-through;";
                i.parentNode.style.opacity="0.7";
            }else{
                i.parentNode.childNodes[1].style.cssText="text-decoration:none;";
                i.parentNode.style.opacity="1";
            }
        });  
    }
};

function deleteTask(){
    const deleting = document.getElementsByClassName("removeTask");
    for (const i of deleting){
        i.addEventListener("click", taskDone =()=>{
            console.log('borrando');
            i.parentNode.remove();
        });
    }
};

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