
 let container = document.createElement("div");
 container.className= "container";
 container.innerHTML = "<h1>Todo List</h1>";
 let mainBlock  = document.createElement("div");
 mainBlock.className= "mainBlock";
 let div = document.createElement('div');   
 let input = document.createElement("input");
 input.className = "textIn";
 input.placeholder = "gonna do..." ;
 input.type = "text";
 let button = document.createElement("button");
 button.id = "addBtn";
 button.textContent = "Add";
 let ul = document.createElement("ul");

 mainBlock.appendChild(div);
 div.append(input);
 div.append(button);
 mainBlock.append(ul);
container.append(mainBlock);
document.body.append(container); 


  let todosArray = localStorage.getItem('todos') === null
  ? []
 : [...JSON.parse(localStorage.getItem('todos'))];


 const addTodo = () => {

     let newTask = input.value;
    if (newTask != '') {
        todosArray.push({
            text: newTask,
              checked: false,
         });

         localStorage.setItem('todos', JSON.stringify(todosArray));
         renderTodoItem();
        input.value = '';
     }
  }

  const deleteTodo = (e) => {
     e.currentTarget.parentNode.remove(e.parentNode);
  }

  const completeTodo = (e) => {
      let isDone = e.currentTarget.parentNode.classList.contains('done');

    isDone
         ?
         e.currentTarget.parentNode.classList.remove('done') :
         e.currentTarget.parentNode.classList.add('done')
  }


  button.addEventListener('click', addTodo); 



  const renderTodoItem = () => {
     ul.innerHTML = '';
      todosArray.map((todo) => {
         let li = document.createElement('li');
          li.className = 'taskItem';

         
          let doneBtn = document.createElement('img');
         doneBtn.src = './done.png';
          doneBtn.className = 'btn';
          doneBtn.addEventListener('click', completeTodo);

         
          let deleteBtn = document.createElement('img');
         deleteBtn.src = './delete.png';
         deleteBtn.className = 'btn';
          deleteBtn.addEventListener('click', deleteTodo);

         li.append(todo.text);
          li.append(doneBtn);
          li.append(deleteBtn);

          ul.prepend(li);  
     });
  };
  renderTodoItem();