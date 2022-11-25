import 'bootstrap/dist/css/bootstrap.min.css';
import '../../stylesheets/main.css';

const homePage = `
<div class="d-flex justify-content-between">
        <div>
          <div class="shadow p-3 mb-5 bg-body rounded">
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
        </div>
        <div>
          <div>
            <p>Tâche n°1</p>
          </div>
          <div>
            <p>contenu</p>
          </div>
        </div>
        <div class="shadow p-3 mb-5 bg-body rounded">
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
      </div>

     `;

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = homePage;
};
      

export default HomePage;
