document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // 1. Let's start by grabbing the form and setting it to a variable
  let form = document.querySelector('#create-task-form');
  // console.log(form);
  // 2. Add an event listener to the action of the submit button...
  form.addEventListener('submit', (e) => {
    // 3. When we => console.log(e); it flash really quick, this needs to be prevented.
    // console.log(e);
    e.preventDefault();

    // 4. Let's grab what is being typed into the text field
    // console.log(e.target.new_task_description.value);
    // -> Now that we can grab the text that is typed in, we need another function to build the list on the page, so lets hand the captured text to a future function
    buildTodo(e.target.new_task_description.value);

    // 5. Reset form after clicking create new task
    form.reset();
  })
});

function buildTodo(todo) {
  // 6. this function will handle taking the text typed in and adding them to our DOM
  // -> Make a DOM element of a 'p' tag, To create DOM elements, we use createElement, and pass in the element to be created 'p'.
  let li = document.createElement('li');

  // 7. Now, add the item to the in the "p" tag that was typed in ...
  // -> we do that by assigning p.textContent the passed in "todo"
  li.textContent = `${todo} `;
  console.log(li);

  // 9. We also want to handle, deleting the items if we don't want them
  // -> create a button with an "x" in it..
  let btn = document.createElement('button');
  btn.textContent = " x ";
  li.appendChild(btn);
  // -> to handle delete we can create an event listener, as soon as we create the button...
  btn.addEventListener('click', handleDelete);

  // 8. Now, let's think about where on the DOM we want to put the this "p" tag
  // -> in the div with the id of "list", inside the "ul" tag
  // -> grab that tag...and then append our "li" tag that will have our input...
  document.querySelector('#tasks').appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}