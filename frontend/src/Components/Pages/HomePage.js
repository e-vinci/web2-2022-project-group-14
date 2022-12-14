import 'bootstrap/dist/css/bootstrap.min.css';
import '../../stylesheets/main.css';
// import {setAuthenticatedUser} from '../../utils/auths'
// import Navigate from '../Router/Navigate'



const homePage = `
<!-- login modal -->


<div class="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label for="username"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="usename" id="usernameL" required>
        <br>
        <label for="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" id="passwordL" required>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="buttonL" >Login</button>
      </div>
    </div>
  </div>
</div>


<!-- register modal -->

<div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label for="username"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="usename" id="usernameR" required>
        <br>
        <label for="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" id="passwordR" required>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="buttonR" >Register</button>
      </div>
    </div>
  </div>
</div>

<!-- header -->

<nav class="align-items-center" id="header">
  <div class="d-flex justify-content-around" id="header">
      <div id="leftPartHeader" class="align-items-center">
      <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#loginModal">
      <p class="btnHeaderText">Login</p>
      </button>
      <div class="vr"></div>
      <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
      <p class="btnHeaderText">Register</p>
      </button>
    </div>
    <div id="rightPartHeader">
      <div class="navbar">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </div>
</nav>

<!-- Left part of website, 2 columns-->

<div class="d-flex">
  <div class="col-4 pt-2" id="colonneLeft">
    <div class="m-auto" id="innerColLeft">
      <h3 class="pb-3 text-center">Liste de vos taches </h3>
      <table class="m-auto">
      </table>    
    </div>
    <div class="rounded pt-5" id="innerColLeft2">
      <div>
        <h3 class="text-center">Créer une tâche</h3>
        <form id="taskForm">
      </div>
    </div>
  </div>

  <!-- central part -->
  
  <div class="col-8 p-3" id="centralColonne">
   <h3 class="m-auto text-center mb-4">Tâche Selectionée </h3>
    <div class="shadow mb-5 bg-body rounded text-justify">
      <p id="displayTache" ></p>
    </div>
    <h3 class="m-auto text-center mb-4">Contenu de la tache </h3>
    <div class="shadow mb-5 bg-body" id="displayContenu" ></p>
    </div>
    <div class="mb-5 m-auto text-center">
      <button type="button" class="btn btn-primary" id="valideTaskButtonID">Validé la tâche !</button>
  </div>
  </div>

  <!-- right part -->

  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title m-auto " id="offcanvasRightLabel">Combattez vos ennemis !</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    
  <div class=" mb-5" id="innerColRight">
      <table id="table-ennemis" >
      </table>
      <p id="messageFight" > Pret a combatre ?</p>
      <input class="mt-5" type="button" value="fight-btn" id="fight-btn">
      </div>
    <div  id="innerColRight2">
      <div id="userPicture">
       <img src="../img/profile.png" class="img-fluid img-thumbnail">
      </div>
      <div id="progressesBar">
        <p class="mb-1"><u>Point de vie :</u> Point de vie ici ?</p>
        <div class=" progress mb-3">
          <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Success example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>
        <p class="mb-1"><u>Point d'XP :</u> Point d'XP ici ?</p>
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Warning example" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
        </div>
      </div>
    </div>   
  </div>
  </div>
</div>

     `;

const HomePage = () => {
  const main = document.querySelector('main');
  
  main.innerHTML = homePage;
  
  login();
  register();
  getJSONTasksAndDisplay();
  getJSONEnnemiesAndDisplay();
  fight();
  renderTaskForm();
  

 async function getJSONTasksAndDisplay() {
    
  const response = await fetch('/api/taches');
  const data = await response.json();

  
  // Create a table element
  const table = document.querySelector('table');

  // eslint-disable-next-line no-restricted-syntax
  for(const key of Object.keys(data)) {
    const button = document.getElementById("valideTaskButtonID");
    const row = document.createElement('tr');
    const valueCel = document.createElement('td');
    const valueCelDelete = document.createElement('button');
    valueCel.datavalue = data[key];
    valueCel.textContent = JSON.stringify(data[key].title);
    valueCelDelete.textContent = "Delete Task";
    valueCelDelete.id = "td2";
    valueCelDelete.datavalue = data[key].id;
    button.datavalue = data[key].id;
    let buttonId = null;
    
    // delete the task 
    // eslint-disable-next-line func-names
    valueCelDelete.addEventListener("click", function() { 
      deleteTask(this.datavalue);
    });

    // Display the task title, content
    // eslint-disable-next-line func-names
    valueCel.addEventListener("click", function() { 
      document.getElementById("displayTache").innerHTML = this.datavalue.title;
      document.getElementById("displayContenu").innerHTML = this.datavalue.content;
      document.getElementById("valideTaskButtonID").innerHTML = "Valider la tâche !" ;
      document.getElementById("valideTaskButtonID").className = "text-justify";
      buttonId = this.datavalue.id;
    });

    
    // eslint-disable-next-line func-names
    button.addEventListener("click", () => { 
      valideTask(buttonId);
      deleteTask(buttonId);
    });
    
    row.appendChild(valueCel);
    row.appendChild(valueCelDelete);
    table.appendChild(row);
  }
}
  
  function renderTaskForm() {
    const divForm = document.getElementById('innerColLeft2');
    const form = document.createElement('form');
    form.className = 'p-5';
    const title = document.createElement('input');
    title.type = 'text';
    title.id = 'title';
    title.placeholder = 'title of your task';
    title.required = true;
    title.className = 'form-control mb-3';
    /*
    const content = document.createElement('input');
    content.type = 'text';
    content.id = 'content';
    content.required = true;
    content.placeholder = 'Content of your task';
    content.className = 'form-control mb-3';
    */
    const textarea = document.createElement('textarea');
    textarea.id = 'content';
    textarea.className = 'form-control mb-3';
    textarea.placeholder = 'Description of your task';
    textarea.required = true;
    textarea.className = 'form-control';
    const submit = document.createElement('input');
    submit.value = 'ajouter tache';
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
    difficulte1.className = 'form-control mt-3 mb-3';
    form.appendChild(title);
    /*
    form.appendChild(content);
    */
    form.appendChild(textarea);
    form.appendChild(difficulte1);
    form.appendChild(submit);
    divForm.appendChild(form);
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
    
    window.location.reload()
    // eslint-disable-next-line no-console
    console.log('task add : ',newTask);
  
  }

   // Delete task 
  function deleteTask(e) {
    fetch(`/api/taches/${e}`, {
      method: 'DELETE'
    })
    .then(response => response.json());
    window.location.reload();
  }

  // Valide task 
  function valideTask(e) {
    fetch(`/api/taches/valide/${e}`, {
      method: 'POST'
    })
    .then(response => response.json());
  }

// ------------------------------------ENNEMIS TABLE ---------------------------------------


 async function getJSONEnnemiesAndDisplay() {
    
  const response = await fetch('/api/auths/readAllEnemies/');
  const data = await response.json();

  
  // Create a table element
  const table = document.getElementById('table-ennemis');

  // eslint-disable-next-line no-restricted-syntax
  for(const key of Object.keys(data)) {

    const row = document.createElement('tr');
    const valueCel = document.createElement('td');
    const valueCelHP = document.createElement('td');
    const valueCelAttack = document.createElement('td');
    
    valueCel.datavalue = data[key];
    valueCel.textContent = JSON.stringify(data[key].name);
    valueCelHP.datavalue  = data[key];
    valueCelHP.textContent = "HP : "
    valueCelHP.textContent += JSON.stringify(data[key].HP);
    valueCelAttack.datavalue  = data[key];
    valueCelAttack.textContent = "Attack : "
    valueCelAttack.textContent += JSON.stringify(data[key].attack);

    row.appendChild(valueCel);
    row.appendChild(valueCelHP);
    row.appendChild(valueCelAttack);
    table.appendChild(row);
  }
}


// fight button 
async function fight() {
  const fights = document.getElementById('fight-btn');
  const message = document.querySelector('#messageFight');
  fights.innerHTML = 'fight';
  fights.addEventListener('click', () => {
    fetch('/api/auths/fight', {
      method: 'POST'
    })
    .then(response => response.json())
    .then(result => {
      message.innerHTML = result;
      setTimeout(() => {
        message.innerHTML = 'Pret a combatre ?';
      }, 9000);
    });
    setTimeout(() => {
      window.location.reload();}, 1000);
  });
}




async function login() {

  const registerBtn = document.getElementById('buttonL');

  registerBtn.addEventListener('click', async () => {
    const username = document.querySelector('#usernameL').value;
    const password = document.querySelector('#passwordL').value;
    const response = await fetch('/api/auths/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

    window.location.reload();
  });
}

async function register() {

  const registerBtn = document.getElementById('buttonR');

  registerBtn.addEventListener('click', async () => {
    const username = document.querySelector('#usernameR').value;
    const password = document.querySelector('#passwordR').value;
    const response = await fetch('/api/auths/register', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    window.location.reload();

  });
}

// FIN  
};

export default HomePage;
