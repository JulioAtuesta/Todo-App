function addTask(){
    const newTask = document.querySelector("[data-form-input]");
    console.log("buttono");
    console.log(newTask.value);
       
};

const add_button = document.querySelector("[data-form-btn]");


add_button.addEventListener("click",addTask());
