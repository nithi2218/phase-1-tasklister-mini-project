document.addEventListener('DOMContentLoaded', () => {
    class Task {
      constructor(desc) {
        this.description = desc;
      }
  
      render() {
        return this.description
      }
  
    }
  
    class TaskList {
      // this class should have all the tasks
      constructor(){
        this.tasks = []
      }  
  
      // create tasks
      createTask(description) {
        const tempTask = new Task(description)
        this.tasks.push(tempTask)
      }
  
      // delete
      function removeToDoItem() {
        newLi.toDoList.removeChild(newLi);
        renderTheUI(toDos);
      }

      // render/createHTML to be shown on screen/user
  
      renderTasks() {
        // loop through the tasks array and prepare HTML
        let htmlString = ''
        for(let task of this.tasks){
          htmlString += `<li>${task.render()}</li>`
        }
  
        return htmlString
      }
  
    }
  
    let tl = new TaskList()
  
  
    
  
    taskForm = document.getElementById('create-task-form')
    descInput = document.getElementById('new-task-description')
    taskUl = document.getElementById('tasks')
  
    taskForm.addEventListener('submit',(event) => {
      event.preventDefault();
      // call create new task
      tl.createTask(descInput.value)
      taskForm.reset()
      taskUl.innerHTML = tl.renderTasks()
    })
  });
  
  
  