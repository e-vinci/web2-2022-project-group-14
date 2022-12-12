import 'bootstrap/dist/css/bootstrap.min.css';
import '../../stylesheets/main.css';
// import {setAuthenticatedUser} from '../../utils/auths'
// import Navigate from '../Router/Navigate'
import userPicture from '../../img/profile.png';


const homePage = `

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Login modal
</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
  Register modal
</button>

<!-- login modal -->

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <label for="username"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="usename" id="username" required>
      <br>
      <label for="password"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="password" id="password" required>
    <label>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Login</button>
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
       FATHER SUCKERS ! 
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> register modal</button>

        <label for="username"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="usename" id="username" required>
        <br>
        <label for="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" id="password" required>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Register</button>
      </div>
    </div>
  </div>
</div>

<!-- Left part of website, 2 columns-->

<div class="d-flex justify-content-between">
  <div class="col-2 colonneLeft">
    <div class="shadow mb-5 bg-body rounded" id="innerColLeft">
    <p >Liste des taches </p>
    <table>
    </table>    
    </div>
    <div class="shadow mb-5 bg-body rounded" id="innerColLeft2">
      <div>
        <h3>Créer tâche :</h3>
        <form id="taskForm">
      </div>
    </div>
  </div>
  
  <div class="col-7 colonne">
    <div class="shadow p-3 mb-5 bg-body rounded">
    <p>Tâche Selectionée </p>
    <p id="displayTache" ></p>
    </div>
    <div class="shadow p-3 mb-5 bg-body rounded">
      <p>Contenu de la tache </p>
      <p id="displayContenu" ></p>
    </div>
    <div class="shadow p-3 mb-5 bg-body rounded">
      <button type="button" id="valideTaskButtonID"></button>
  </div>
  </div>
  <div class="col-2 colonneRight">
    <div class="shadow mb-5 bg-body rounded" id="innerColRight">
    <input 
       type="button"
       value="fight-btn"
       id="fight-btn">
    <table id="table-ennemis" >
    </table>  
    </div>
    <div class="d-flex justify-content-between shadow mb-5 bg-body rounded" id="innerColRight2">
      <div id="userPicture">
       <img src="../../img/profile.png">
      </div>
      <div id="progressesBar">
        <div class="progress">
          <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Success example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Warning example" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
        </div>
      </div>
    </div>
  </div>
</div>

     `;

const HomePage = () => {
  const main = document.querySelector('main');
  
  main.innerHTML = homePage;
  
  
  getJSONTasksAndDisplay();
  getJSONEnnemiesAndDisplay();
  fight();
  renderTaskForm();

// ---------------------------------------------------------------------------
 // Création de la partie qui contiendra le header
const header = document.querySelector('header');
const partieGauche = document.querySelector('div');
const partieDroite = document.querySelector('div');
header.appendChild(partieGauche);
header.appendChild(partieDroite);

// ajout des bouttons modals dans la partie de gauche du header
const buttonRegister = document.createElement('button');
buttonRegister.className = 'btn btn-primary';
buttonRegister.setAttribute('data-bs-toggle', 'modal');
buttonRegister.setAttribute('data-bs-target', '#staticBackdrop');
buttonRegister.innerHTML = 'Login modal';
partieGauche.appendChild(buttonRegister);
const buttonLogin = document.createElement('button');
buttonLogin.className = 'btn btn-primary';
buttonLogin.setAttribute('data-bs-toggle', 'modal');
buttonLogin.setAttribute('data-bs-target', '#staticBackdrop2');
buttonLogin.innerHTML = 'Register modal';
partieGauche.appendChild(buttonLogin);

// ajout du titre dans la partie de droite du header
const buttonEnnemy = document.createElement('button');
buttonEnnemy.className = 'btn btn-primary';
buttonEnnemy.type = 'button';
buttonEnnemy.setAttribute('data-bs-toggle', 'offcanvas');
buttonEnnemy.setAttribute('data-bs-target', '#offcanvasRight');
buttonEnnemy.setAttribute('aria-controls', 'offcanvasRight');
buttonEnnemy.innerHTML = 'Ennemis'
partieDroite.appendChild(buttonEnnemy);



// ---------------------------------------------------------------------------

 // Création de la partie qui contiendra les 3 sections

  const mainWrapper = document.querySelector('div'); 
  mainWrapper.className ='d-flex justify-content-between';
  main.appendChild(mainWrapper);

// ---------------------------------------------------------------------------

  // Création de la Colonne de gauche 

  const mainLeftRow = document.querySelector('div');
  mainLeftRow.className ='col-2 colonneLeft';
  const firstInnerLeftRow = document.querySelector('div'); // Création de la première partie de la colonne de gauche
  firstInnerLeftRow.className ='shadow mb-5 bg-body rounded';
  firstInnerLeftRow.id ='innerColLeft'
  mainLeftRow.appendChild(firstInnerLeftRow); // Rattachement de la première section dans la colonne
  
  const secondInnerLeftRow = document.querySelector('div'); // Création de la seconde partie de la colonne de gauche
  secondInnerLeftRow.className ='shadow mb-5 bg-body rounded';
  secondInnerLeftRow.id = 'innerColLeft2';
  mainLeftRow.appendChild(secondInnerLeftRow); // Rattachement de la seconde section dans la colonne de gauche

 // ---------------------------------------------------------------------------



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
      document.getElementById("valideTaskButtonID").innerHTML = "Valider la tache !" ;
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
    const content = document.createElement('input');
    content.type = 'text';
    content.id = 'content';
    content.required = true;
    content.placeholder = 'Content of your task';
    content.className = 'form-control mb-3';
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
    difficulte1.className = 'form-control mb-3';
    form.appendChild(title);
    form.appendChild(content);
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
    
    valueCel.datavalue = data[key];
    valueCel.textContent = JSON.stringify(data[key].name);
    row.appendChild(valueCel);
    table.appendChild(row);
  }
}


// fight button 
async function fight() {
  const fights = document.getElementById('fight-btn');
  fights.innerHTML = 'fight';
  fights.addEventListener('click', () => {
    fetch('/api/auths/fight', {
      method: 'POST'
    })
    .then(response => response.json());
    window.location.reload();
  });
}



// ---------------------------------------------------------------------------


  // Création du formulaire de création de tâche dans la seconde partie de la colonne de gauche

  const divTitreFormulaire = document.querySelector('div'); // div du titre et de la création du titre de la tâche
  secondInnerLeftRow.appendChild(divTitreFormulaire);
  const titleForm = document.querySelector('h3'); // Insertion du titre
  titleForm.innerText = 'Créer une tâche :';
  divTitreFormulaire.appendChild(titleForm);
  const inputTitleTask = document.querySelector('input'); // Création du champs pour créer le titre de la tâche
  inputTitleTask.className = "form-control form-control-sm";
  inputTitleTask.type = "radio";
  inputTitleTask.name = "flexRadioDefault";
  inputTitleTask.id = "flexRadioDefault1";
  divTitreFormulaire.appendChild(inputTitleTask);

  const divBouttonRadio1= document.querySelector('div'); // Création de la div du premier boutton radio
  divBouttonRadio1.className = 'form-check';
  secondInnerLeftRow.appendChild(divBouttonRadio1);

  const inputRadioCheck1 = document.querySelector('input'); // Création du input du bouton radio 1 ! 
  inputRadioCheck1.className = 'form-check-input';
  inputRadioCheck1.type = 'radio';
  inputRadioCheck1.name = 'flexRadioDefault';
  inputRadioCheck1.id = 'flexRadioDefault1';
 /* inputRadioCheck.checked;  Il faut trouver comment passer le input en check ! */
  // divBouttonRadio1.appendChild(inputRadioCheck1);
  
  const labelRadioCheck1 = document.querySelector('label'); // Création du label du bouton radio 1 !
  labelRadioCheck1.className = 'form-check-label';
  /* labelRadioCheck1.for || Comment fait on le for ? */
  labelRadioCheck1.innerText = 'Default radio';
  // divBouttonRadio1.appendChild(labelRadioCheck1);

  const divBouttonRadio2= document.querySelector('div'); // Création de la div du second boutton radio
  divBouttonRadio2.className = 'form-check';
  secondInnerLeftRow.appendChild(divBouttonRadio2);

  const inputRadioCheck2 = document.querySelector('input'); // Création du input du bouton radio 2 ! 
  inputRadioCheck2.className = 'form-check-input';
  inputRadioCheck2.type = 'radio';
  inputRadioCheck2.name = 'flexRadioDefault';
  inputRadioCheck2.id = 'flexRadioDefault2';
  /* inputRadioCheck.checked; Il faut trouver comment passer le input en check ! */
  divBouttonRadio2.appendChild(inputRadioCheck2);

  const labelRadioCheck2 = document.querySelector('label'); // Création du label du bouton radio 2 !
  labelRadioCheck1.className = 'form-check-label';
  /* labelRadioCheck1.for || Comment fait on le for ? */
  labelRadioCheck2.innerText = 'Default radio';
  divBouttonRadio2.appendChild(labelRadioCheck2);





 // ---------------------------------------------------------------------------

  // Création de la colonne centrale

  const mainCentralRow = document.querySelector('div');
  mainCentralRow.className = 'col-7 colonne';
  mainWrapper.appendChild(mainCentralRow);

  // Création de la div qui contiendra le titre de la tâche que l'on édite

  const firstInnerCentralRow = document.querySelector('div');
  firstInnerCentralRow.className = 'shadow p-3 mb-5 bg-body rounded';
  mainCentralRow.appendChild(firstInnerCentralRow);

  // Ajout du titre dans cette première div

  const firstCentralTitleTask = document.querySelector('h2');
  firstCentralTitleTask.innerText = 'Tâche n°1'; // Provisoire mais on doit récupérer la tâche qu'on veut éditer !
  firstInnerCentralRow.appendChild(firstCentralTitleTask);
  
  // Création de la seconde div

  const secondInnerCentralRow = document.querySelector('div');
  secondInnerCentralRow.innerText = 'shadow p-3 mb-5 bg-body rounded';
  mainCentralRow.appendChild(secondInnerCentralRow);

  // Ajout d'un titre dans la seconde div

  const secondCentralTitleTask = document.querySelector('h2');
  secondCentralTitleTask.innerText = 'Contenu';
  mainCentralRow.appendChild(secondCentralTitleTask);


 // ---------------------------------------------------------------------------

  // Création de l'offCanvas
  const offCanvas = document.querySelector('div');
  offCanvas.className = 'offcanvas offcanvas-end';
  offCanvas.tabIndex = '-1';
  offCanvas.id = 'offcanvasRight';
  offCanvas.ariaLabelledby = 'offcanvasRightLabel';
  mainWrapper.appendChild(offCanvas);

  // Création interne de l'offCanvas
  const offCanvasHeader = document.querySelector('div');
  offCanvasHeader.className = 'offcanvas-header';
  offCanvas.appendChild(offCanvasHeader);
  const offCanvasTitle = document.querySelector('h5');
  offCanvasTitle.id = 'offcanvasRightLabel';
  offCanvasTitle.innerText = 'partie jeu !';
  offCanvasHeader.appendChild(offCanvasTitle);
  const offCanvasButton = document.querySelector('button');
  offCanvasButton.className = 'btn-close text-reset';
  offCanvasButton.type = 'button';
  offCanvasButton.dataBsDismiss = 'offcanvas';
  offCanvasButton.ariaLabel = 'Close';
  offCanvasHeader.appendChild(offCanvasButton);
  const offCanvasBody = document.querySelector('div');
  offCanvasBody.className = 'offcanvas-body';
  offCanvas.appendChild(offCanvasBody);

 
 // Création de la première section 

 const firstInnerRightRow = document.querySelector('div');
 firstInnerRightRow.className = 'shadow mb-5 bg-body rounded';
 firstInnerRightRow.id = 'innerColRight';

 // Il faut encore ajouter les ennemis !
 offCanvasBody.appendChild(firstInnerRightRow);

 // Création de la seconde section

 const secondInnerRightRow = document.querySelector('div');
 secondInnerRightRow.className = 'd-flex justify-content-between shadow mb-5 bg-body rounded';
 secondInnerRightRow.id = 'innerColRight2';
 offCanvasBody.appendChild(secondInnerRightRow);

 // Rajout de la div pour l'image
 const divUser = document.querySelector('div');
 divUser.id = 'userPicture';
 // Rajout de l'image
 const image = new Image();
 image.src = userPicture;
 divUser.appendChild(image);
 secondInnerRightRow.appendChild(divUser);

 // Rajout de la div pour les progressbar
 const divProgressBares = document.querySelector('div');
 divProgressBares.id = 'progressesBar';
secondInnerRightRow.appendChild(divProgressBares);

// Ajout de la première barre de progression

const divFirstProgressBar = document.querySelector('div');
divFirstProgressBar.className = 'progress';
const firstProgressBar = document.querySelector('div');
firstProgressBar.className ='progress-bar bg-success progress-bar-striped progress-bar-animated'; // Comment faire le reste des éléments ?
firstProgressBar.innerText = '25%';
divProgressBares.appendChild(divFirstProgressBar);
divFirstProgressBar.appendChild(firstProgressBar);

// Ajout de la première barre de progression

const divSecondProgressBar = document.querySelector('div');
divSecondProgressBar.className = 'progress';
const secondProgressBar = document.querySelector('div');
secondProgressBar.className ='progress-bar bg-success progress-bar-striped progress-bar-animated'; // Comment faire le reste des éléments ?
secondProgressBar.innerText = '75%';
divProgressBares.appendChild(divSecondProgressBar);
divSecondProgressBar.appendChild(secondProgressBar);


// FIN  
};
    
/*
async function onLogin(e) {
  e.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  const options = {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
*/



async function login(e) {
  e.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  const jsonOptions = {
    method: 'GET',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch('/api/auths', jsonOptions);

  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  const loggedUser = await response.json();
  
  // eslint-disable-next-line no-console
  console.log('task add : ',loggedUser);
}


async function register(e) {
  e.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  const jsonOptions = {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch('/api/auths', jsonOptions);

  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  const authenticatedUser = await response.json();
  
  // eslint-disable-next-line no-console
  console.log('User add : ', authenticatedUser);
}

login();
register();


export default HomePage;
