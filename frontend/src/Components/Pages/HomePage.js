import 'bootstrap/dist/css/bootstrap.min.css';
import '../../stylesheets/main.css';
import JSConfetti from 'js-confetti';
import profileImage from '../../img/avatar.png';
import { setAuthenticatedUser } from '../../utils/auths';

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
        <div class="d-flex flex-column text-center firstPartFormModals">
          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="usename" id="usernameL" required>
        </div>
        <br>
        <div class="d-flex flex-column text-center secondPartFormModals">
          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" id="passwordL" required>
        </div>
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
        <div class="d-flex flex-column text-center firstPartFormModals">
          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="usename" id="usernameR" required>
          <br>
        </div>
        <div class="d-flex flex-column text-center secondPartFormModals">
          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" id="passwordR" required>
        </div>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          J'accepte les conditions d'utilisation
        </label>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="buttonR" >Register</button>
      </div>
    </div>
  </div>
</div>

<!-- how to modal -->
<div class="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Comment fonctionne le site ?</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Bienvenu sur notre application ! </p>
        <p>Tu te demandes comment ToDo fonctionne ?</p>
        <p>Commence par te connecter ou t'enregistrer si ce n'est pas encore fait :).</p>
        <p>Une fois inscrit, tu pourras commencer a ajouter des taches a ta liste de taches. En fonction du niveau de difficult?? de la tache, tu lui assigneras un niveau. </p>
        <p> Maintenant, ajoute une premiere tache :), dans la liste tu verras apparaitre la tache que tu viens d ajouter.</p>
        <p>Tu pourras alors soit decider de la supprimer soit de cliquer dessus afin d'afficher son contenu.</p>
        <p>oui bon, un site de tache ... tu dois te dire que c est classique et qu'il y a rien d'original ! </p>
        <p>Dans la barre de navigation en haut a droite, clique sur le menu d??roulant ;) </p>
        <p>ahhhh, tu commences a comprendre :) Et oui, en faite a l'inscription tu as creer un personnage combatant !</p>
        <p>Ton personnage combatant poss??de des points de vie et d'attaques ainsi qu'un niveau. Au d??part, tu t'en doute surement mais tu commenceras au niveau 1.</p>
        <p>Chaque fois que tu valideras une taches, tu gagneras de l'XP et de l'HP.</p>
        <p>Tu as aussi pu remarquer en ouvrant la liste d??roulante qu'un tableau d'ennemis etait present. Au fur et a mesure que tu valideras des taches, tu auras la possibilit?? de combattre des ennemis ! </p>
        <p>Oui, ce tutoriel est d??ja finis :) , qu'est ce que tu attends pour commencer de nouvelles taches !  </p>
        <p>A toi de jouer !!! </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- header -->
<nav class="align-items-center" id="header">
  <div class="d-flex justify-content-around">
      <div id="leftPartHeader" class="align-items-center">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#loginModal">
          <p class="btnHeaderText">Login</p>
        </button>
      <div class="vr"></div>
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
        <p class="btnHeaderText">Register</p>
        </button>
      <div class="vr"></div>
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop3"<p class="btnHeaderText">Comment ??a fonctionne ? </p></button>
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
      <table>
      </table>    
    </div>
    <div class="pt-5 m-auto" id="innerColLeft2">
      <div class="m-auto">
        <h3 class="text-center">Cr??er une t??che</h3>
        <form id="taskForm">
      </div>
    </div>
  </div>
  <!-- central part -->
  
  <div class="col-8 p-3" id="centralColonne">
   <h3 class="m-auto text-center mb-4" id="tache" ></h3>
    <div class="shadow mb-5 bg-body rounded text-justify">
      <p id="displayTache" ></p>
    </div>
    <h3 class="m-auto text-center mb-4" id="contenu" ></h3>
    <div class="shadow mb-5 bg-body" id="displayContenu" ></p>
    </div>
    <div class="mb-5 m-auto text-center">
      <button type="button" class="btn btn-primary" id="valideTaskButtonID" style="display:none" ></button>
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
      <input class="mt-3 btn btn-primary" type="button" value="Combattez !" id="fight-btn" >
      </div>

    <div class="pt-3" id="innerColRight2">
      <h4 class="text-left pb-3">Votre personnage</h4>
      
      <div class="mb-3" id="userPicture">
      </div>
      <div id="niveauJoeur" > <p id="level" class="box" ></p> <p id="coeur" ></p> </div>
      <div><p id="degat"></p><p id="bombe" ></p> </div>
      <div id= "barre">
        <div id="progressesBar">
          <p class="mb-1" id="pdv" ><u>Point de vie :</u></p><p id="vie" ></p>
          <div class=" progress mb-3">
            <div id="barHP" class="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Success example" style="width: 100%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p class="mb-1" id="xp"><u>Point d'XP :</u></p><p id="progres" ></p>
          <div class="progress">
            <div id="barXP" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Warning example" style="width: 100%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="footer">
<p> Copyright ?? 2021 Groupe14. Tous droits r??serv??s. </p>
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
  updateProgressBar();

  const photoUser = document.getElementById('userPicture');
  renderProfileImage(photoUser, profileImage, 'test');

  async function getJSONTasksAndDisplay() {
    const table = document.querySelector('table');
    table.innerHTML = '';
    const response = await fetch('/api/taches');
    const data = await response.json();

    // Create a table element

    table.className = 'm-auto';
    // eslint-disable-next-line no-restricted-syntax
    for (const key of Object.keys(data)) {
      const button = document.getElementById('valideTaskButtonID');
      const row = document.createElement('tr');
      const valueCel = document.createElement('td');
      const valueCelDelete = document.createElement('button');
      valueCel.datavalue = data[key];
      valueCel.textContent = JSON.stringify(data[key].title).replace(/['"]+/g, '');
      valueCel.style.border = '1px solid transparent';
      valueCel.style.borderBottom = '1px solid black';
      valueCelDelete.innerHTML = '<span><i class="bi bi-x-circle"></i></span>';
      valueCelDelete.className = 'btn';
      valueCelDelete.id = 'td2';
      valueCelDelete.datavalue = data[key].id;
      valueCelDelete.style.border = '1px solid transparent';
      button.datavalue = data[key].id;
      let buttonId = null;

      row.appendChild(valueCel);
      row.appendChild(valueCelDelete);
      table.appendChild(row);

      // delete the task
      // eslint-disable-next-line func-names
      valueCelDelete.addEventListener('click', function() {
        deleteTask(this.datavalue);
        HomePage();
      });
      // Display the task title, content
      // eslint-disable-next-line func-names
      valueCel.addEventListener('click', function() {
        document.getElementById('tache').innerText = 'T??che Selection??e : ';
        document.getElementById('contenu').innerText = 'Contenu de la tache : ';
        document.getElementById('valideTaskButtonID').value = 'valider la tache !';
        document.getElementById('valideTaskButtonID').style.display = 'block';
        document.getElementById('displayTache').innerHTML = this.datavalue.title;
        document.getElementById('displayTache').className =
          ' p-3 text-justify shadow mb-5 bg-body rounded text-justify';
        document.getElementById('displayContenu').innerHTML = this.datavalue.content;
        document.getElementById('displayContenu').className =
          ' p-3 text-justify shadow mb-5 bg-body rounded text-justify';
        document.getElementById('valideTaskButtonID').innerHTML = 'Valider la t??che !';
        document.getElementById('valideTaskButtonID').className = 'btn btn-primary text-justify';
        buttonId = this.datavalue.id;
      });

      button.addEventListener('click', () => {
        const jsConfetti = new JSConfetti({ button });
        valideTask(buttonId);
        deleteTask(buttonId);
        jsConfetti.addConfetti();
        HomePage();
      });
    }
  }

  function renderTaskForm() {
    const divForm = document.getElementById('innerColLeft2');
    const form = document.createElement('form');
    form.className = 'm-auto text-center p-5';
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
    submit.value = 'ajouter t??che';
    submit.type = 'submit';
    submit.className = 'btn btn-primary text-align-center m-auto';
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
        difficulte,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch('/api/taches', jsonOptions);

    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

    const newTask = await response.json();

    HomePage();
    // eslint-disable-next-line no-console
    console.log('task add : ', newTask);
  }

  // Delete task
  function deleteTask(e) {
    fetch(`/api/taches/${e}`, {
      method: 'DELETE',
    }).then((response) => response.json());
  }
  // Valide task
  function valideTask(e) {
    fetch(`/api/taches/valide/${e}`, {
      method: 'POST',
    }).then((response) => response.json());
  }
  // ------------------------------------ENNEMIS TABLE ---------------------------------------
  async function getJSONEnnemiesAndDisplay() {
    const response = await fetch('/api/auths/readAllEnemies/');
    const data = await response.json();

    // Create a table element
    const table = document.getElementById('table-ennemis');
    table.innerHTML = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const key of Object.keys(data)) {
      const row = document.createElement('tr');

      const valueCel = document.createElement('td');
      const valueCelHP = document.createElement('td');
      const valueCelAttack = document.createElement('td');

      valueCel.datavalue = data[key];
      valueCel.textContent = JSON.stringify(data[key].name).replace(/['"]+/g, '');
      valueCel.style.border = '1px solid transparent';
      valueCel.style.borderBottom = '1px solid black';
      valueCel.style.margin = '10px';
      valueCelHP.datavalue = data[key];
      valueCelHP.textContent = 'HP : ';
      valueCelHP.textContent += JSON.stringify(data[key].HP);
      valueCelHP.style.border = '1px solid transparent';
      valueCelHP.style.borderBottom = '1px solid black';
      valueCelHP.style.padding = '10px';
      valueCelAttack.datavalue = data[key];
      valueCelAttack.textContent = 'Attack : ';
      valueCelAttack.textContent += JSON.stringify(data[key].attack);
      valueCelAttack.style.border = '1px solid transparent';
      valueCelAttack.style.borderBottom = '1px solid black';
      valueCelAttack.style.margin = '10px';
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
        method: 'POST',
      })
        .then((response) => response.json())
        .then((result) => {
          message.innerHTML = result;
          setTimeout(() => {
            message.innerHTML = 'Pret a combatre ?';
          }, 9000);
        });
      setTimeout(() => {
        HomePage();
      }, 2000);
    });
  }

  async function updateProgressBar() {
    const response = await fetch('/api/playerCharacters/player');
    const player = await response.json();
    const playerHP = player.currentHP;
    const playerXP = player.currentXP;
    const playerLevel = player.level;
    const maxHpPlayer = player.maxHP;
    const { XPToLvlUp } = player;
    const degats = player.attack;

    const progressBarHP = document.getElementById('barHP');
    const progressBarXP = document.getElementById('barXP');

    progressBarHP.innerText = `${playerHP}/${maxHpPlayer}`;
    progressBarHP.setAttribute('style', `width: ${(playerHP / maxHpPlayer) * 100}%`);
    progressBarHP.setAttribute('aria-valuenow', `${playerHP}`);
    progressBarHP.setAttribute('aria-valuemax', `${maxHpPlayer}`);

    const splitHp = `${XPToLvlUp}`.slice(0, 5);
    progressBarXP.innerText = `${playerXP}/${splitHp}`;
    progressBarXP.setAttribute('style', `width: ${(playerXP / XPToLvlUp) * 100}%`);
    progressBarXP.setAttribute('aria-valuenow', `${playerXP}`);
    progressBarHP.setAttribute('aria-valuemax', `${XPToLvlUp}`);

    const progressesBar = document.getElementById('barre');
    progressesBar.style.paddingTop = '50px';

    const level = document.getElementById('level');
    const degat = document.getElementById('degat');
    const coeur = document.getElementById('coeur');

    level.style.display = 'inline-block';
    coeur.style.display = 'inline-block';
    coeur.innerHTML = '&#x1F3C6;';
    level.innerText = `Vous etes niveau ${playerLevel} `;
    degat.innerText = `Vous avez ${degats} points de d??gats`;

    const userPicture = document.getElementById('userPicture');
    const niveauJouer = document.getElementById('niveauJouer');
    userPicture.style.float = 'left';
    niveauJouer.style.float = 'left';
  }

  // render the profile image (to resize it you can use the height parameter)
  function renderProfileImage(wrapper, url) {
    const image = new Image();
    image.src = url;
    image.height = 100;
    image.class = 'img-fluid img-thumbnail';
    wrapper.appendChild(image);
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
      if (!response.ok)
        throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

      const user = response.json;

      setAuthenticatedUser(user);
      const modalL = document.getElementById('loginModal');
      // eslint-disable-next-line no-undef
      const modal = bootstrap.Modal.getInstance(modalL);
      modal.hide();
      // window.location.reload();
      HomePage();
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
      if (!response.ok)
        throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

      const user = response.json;

      setAuthenticatedUser(user);
      // window.location.reload();
      const modalR = document.getElementById('staticBackdrop2');
      // eslint-disable-next-line no-undef
      const modal = bootstrap.Modal.getInstance(modalR);
      modal.hide();
      HomePage();
    });
  }
  // FIN
};
export default HomePage;
