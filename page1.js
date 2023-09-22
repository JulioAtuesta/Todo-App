const btn = document.querySelector('[data-form-btn]');

const createTask = () => {
evento.preventDefault();

  const input = document.querySelector('[data-form-input]');
  console.log(input.value);
};

console.log(btn);

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);

function addTask(){
  const newTask = document.querySelector('[data-form-input]');
  console.log("buttono");
  console.log(newTask.value);
};
/*
function main(){
const add_button = document.querySelector('[data-form-btn]');
add_button.addEventListener("click",addTask());
}*/

//window.addEventListener("load",main());