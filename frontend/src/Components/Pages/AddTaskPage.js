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
    form.appendChild(title);
    form.appendChild(content);
    form.appendChild(submit);
    main.appendChild(form);
    form.addEventListener('submit', addTask);
  }


  async function addTask(e) {
    e.preventDefault();
  
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
  
    const jsonOptions = {
      method: 'POST',
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    const response = await fetch('/api/©', jsonOptions);
  
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
  
    const newTask = await response.json();
  
    
    // eslint-disable-next-line no-console
    console.log('task add : ',newTask);


  }

export default AddTaskPage;