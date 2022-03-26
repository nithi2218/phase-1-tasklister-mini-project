 document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.querySelector('input[type=submit]');
    const formCreate = document.getElementById('new-task-description')
    const createList = document.getElementById("tasks");
   const fromList = document.getElementById('create-task-form') 

    const addListItem = (elementValue) => `<li class="sublisting">${elementValue}</li>`;
 

    let formSubmitHandler = (event) => {
        event.preventDefault();
        let elementValue = formCreate.value;
        createList.innerHTML += addListItem(elementValue)
           
    }    

    fromList.addEventListener('submit', formSubmitHandler);
    
    
    let dlBtn = document.createElement("button");
    dlBtn.innerHTML = "x";
function deleteList() {
    dlBtn.addEventListener(click, e => {
        childNode.remove();
    })
    
});