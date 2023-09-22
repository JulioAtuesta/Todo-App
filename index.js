function addTask(evento){
    evento.preventDefault();
    const inputText = document.getElementById("todo__front-input");
    const tasksUl = document.getElementById("todo__front-list");
    const newTask = createTask(inputText); 
            /*
        ?revisar, si el content esta vacio no se añade la task 
        */
    console.log(newTask);
    inputText.value = "";
    tasksUl.appendChild(newTask);    
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
    for (let i of checked){
        if (checked[i]==check){
            /* 
            ?ya no se lo que hago, la idea es escuchar al chechek se puede? es un imput
            ?luego de eso llamar a la funcion que revisa la cadena, es necesario revisarla toda?
            ?si el elemento esta checked cambia el style y subraya el texto de la task*/
        }
    }
}

function main(){
    const add_button = document.getElementById("todo__front-button");
    add_button.addEventListener("click",addTask);
    const checked = document.getElementsByClassName("checkTask");
    checked.addEventListener("click",_isChecked);    
};

window.addEventListener("load",main);
    /*
    !importanto: 
    ?si una funcion no tiene parametros se llama 
    !SIN parentesis 
    ?de lo contrario la funciòn tiene un comportamiento raro Aunque 
    !No genera error*/
//newTask.innerHTML = // HTML va en mayusculas, tambien exite la funcion con minúsculas, no sirve
// en el template `` se podrìa llamar a una funcion e.g $main()