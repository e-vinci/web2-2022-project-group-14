import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line import/no-relative-packages
import { register, login } from '../../../../api/models/users';
// import { use } from '../../../../api/routes/auths';
import '../../stylesheets/main.css';
import {setAuthenticatedUser} from '../../utils/auths'
// import Navigate from '../Router/Navigate'
// import userPicture from '../../img/profile.png';

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



<div class="d-flex justify-content-between">
  <div class="col-2 colonneLeft">
    <div class="shadow mb-5 bg-body rounded" id="innerColLeft">
      <p>Tâche n°1</p>
      <p>Tâche n°2</p>
      <p>Tâche n°3</p>
      <p>Tâche n°4</p>
      <p>Tâche n°5</p>
      <p>Tâche n°6</p>
      <p>Tâche n°7</p>
      <p>Tâche n°8</p>
      <p>Tâche n°9</p>
      <p>Tâche n°10</p>
      <p>Tâche n°11</p>
      <p>Tâche n°12</p>
      <p>Tâche n°13</p>
      <p>Tâche n°14</p>
      <p>Tâche n°15</p>
    </div>
    <div class="shadow mb-5 bg-body rounded" id="innerColLeft2">
      <div>
        <h3>Créer tâche :</h3>
        <input class="form-control form-control-sm" type="text" placeholder="Créer une tâche" aria-label=".form-control-sm example">
      </div>
      <div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
          <label class="form-check-label" for="flexRadioDefault1">
            Default radio
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
          <label class="form-check-label" for="flexRadioDefault2">
            Default checked radio
          </label>
        </div>
      </div>
    </div>
  </div>
  <div class="col-7 colonne">
    <div class="shadow p-3 mb-5 bg-body rounded">
      <p>Tâche n°1</p>
    </div>
    <div class="shadow p-3 mb-5 bg-body rounded">
      <p>contenu</p>
    </div>
  </div>
  <div class="col-2 colonneRight">
    <div class="shadow mb-5 bg-body rounded" id="innerColRight">
      <p>Ennemi n°1</p>
      <p>Ennemi n°2</p>
      <p>Ennemi n°3</p>  
      <p>Ennemi n°4</p>  
      <p>Ennemi n°5</p>  
      <p>Ennemi n°6</p>  
      <p>Ennemi n°7</p>
      <p>Ennemi n°8</p>  
      <p>Ennemi n°9</p>  
      <p>Ennemi n°10</p>    
      <p>Ennemi n°11</p>  
      <p>Ennemi n°12</p>  
      <p>Ennemi n°13</p>  
      <p>Ennemi n°14</p>
      <p>Ennemi n°15</p>  
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
  /*
  main.innerHTML = homePage;

  */

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
  /* inputRadioCheck.checked; Il faut trouver comment passer le input en check ! */
  divBouttonRadio1.appendChild(inputRadioCheck1);
  
  const labelRadioCheck1 = document.querySelector('label'); // Création du label du bouton radio 1 !
  labelRadioCheck1.className = 'form-check-label';
  /* labelRadioCheck1.for || Comment fait on le for ? */
  labelRadioCheck1.innerText = 'Default radio';
  divBouttonRadio1.appendChild(labelRadioCheck1);

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

const Login = () => {
  const main = document.querySelector('main');
  main.innerHTML = homePage;

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  
  main.addEventListener('submit', async (e) => {
  e.preventDefault();

    await login(username, password)
  });
};

const Register = () => {
  const main = document.querySelector('main');
  main.innerHTML = homePage;

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  
  main.addEventListener('submit', async (e) => {
  e.preventDefault();

    await register(username, password)
  });
};

  const response = await fetch('/api/auths/login');

  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  const authenticatedUser = await response.json();

  console.log('Authenticated user : ', authenticatedUser);

  setAuthenticatedUser(authenticatedUser);

Login();
Register();

export default HomePage;
