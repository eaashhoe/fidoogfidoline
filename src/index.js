import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



//Denne kode importerer nogle moduler fra React biblioteket og 
//nogle andre filer ('./index.css', './App', og './reportWebVitals').

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Derefter opretter koden en "root" node ved hjælp af 
//ReactDOM.createRoot-metoden, som vil fungere som det øverste niveau 
//af vores React-komponenttræ og definere, hvor vores React-app 
//vil blive monteret i HTML DOM'en.

//Derefter renderes vores App-komponent ved hjælp af ReactDOM's .render() metode,
// som tager et React element (i dette tilfælde vores App-komponent) 
//og en mål-node (i dette tilfælde 'root' node).


//Til sidst kaldes reportWebVitals-metoden, som vil starte måling af 
//ydeevne i vores app, hvis vi ønsker at måle ydeevnen og logge resultaterne.


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
