
/* eslint-disable spaced-comment */
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../stylesheets/main.css';



const AddTaskPage = () => {
    renderTaskForm();
  };

function renderTaskForm() {
    const main = document.querySelector('main');
    const form = document.createElement('form');
    form.className = 'p-5';
    const title = document.createElement('input');
    title.type = 'text';
    title.id = 'title';
    title.placeholder = 'title of your task';
    title.required = true;
    title.className = 'form-control mb-3';
    const content = document.createElement('input');
    content.type = 'text';
    content.id = 'content';
    content.required = true;
    content.placeholder = 'Content of your task';
    content.className = 'form-control mb-3';
    const submit = document.createElement('input');
    submit.value = 'add a new task to your list';
    submit.type = 'submit';
    submit.className = 'btn btn-danger';
    const difficulte1 = document.createElement('select');
    difficulte1.id = 'select';
    const option1 = document.createElement('option');
    option1.value = '1';
    option1.text = 'difficulte 1';
    const option2 = document.createElement('option');
    option2.value = '2';
    option2.text = 'difficulte 2';
    const option3 = document.createElement('option');
    option3.value = '3';
    option3.text = 'difficulte 3';
    difficulte1.appendChild(option1);
    difficulte1.appendChild(option2);
    difficulte1.appendChild(option3);
    difficulte1.className = 'form-control mb-3';
    form.appendChild(title);
    form.appendChild(content);
    form.appendChild(difficulte1);
    form.appendChild(submit);
    main.appendChild(form);
    form.addEventListener('submit', addTask);
  }

  // Add task 
  async function addTask(e) {
    e.preventDefault();
  
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    const difficulte = document.querySelector('#select').value;
  
    const jsonOptions = {
      method: 'POST',
      body: JSON.stringify({
        title,
        content,
        difficulte
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    const response = await fetch('/api/taches', jsonOptions);
  
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
  
    const newTask = await response.json();
  
    
    // eslint-disable-next-line no-console
    console.log('task add : ',newTask);

  }


export default AddTaskPage;