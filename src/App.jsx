
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CardList from './assets/CardList';
import'./assets/components/styles.css';
import '@fortawesome/fontawesome-free/css/all.css';



function App() {
  return (
    <div className="App">

      <h1>Usuarios Aleatorios</h1>
      <p>Recargue la página para cambiar usuarios </p>
      <CardList />


      <div class="container">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top colorfooter">
      <p class="col-md-4 mb-0 text-body-secondary">&copy; <b>2024</b> <br /> Desarrollado por Guillermo Perez Lapolla </p>

      <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-4 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-3" width="60" height="10"><use xlink:href="#bootstrap"/></svg>
      </a>

      <ul class="nav col-md-3 justify-content-end">
        
        <p>API consumida: <br /> <b>https://randomuser.me/api/?results=5</b></p>
       
      </ul>
    </footer>
  </div>


    </div>
  );
}



export default App;

