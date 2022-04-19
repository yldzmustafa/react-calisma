import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>

function App() {
  return (
    <div className="App">
      
      <h1>Form Elementi</h1>
      <br></br><br></br>
      <label>E-mail:</label>  
      <input id="inputalanı" placeholder="Lütfen e-posta adresinizi giriniz..."></input>
      <br></br><br></br><br></br>
      <label>Şifre:</label> 
      <input id="inputalanı2" placeholder="Lütfen şifrenizi giriniz..."></input>
      <br></br><br></br><br></br>
      <input type="checkbox"></input><label>Şifremi hatırla</label>
      <br></br><br></br>
      <button id="button" type="button">Gönder</button>
      
    </div>
  );
}

export default App;
