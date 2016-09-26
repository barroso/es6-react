import "bootstrap/dist/css/bootstrap.css"
import "css/main.css"

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppButton from './AppButton';
import AppButtonCount from './AppButtonCount';
import ListExampleMessages from './ListExampleMessages';

const licenciados = ['Empresa 01', 'Empresa 02', 'Empresa 03', 'Empresa 04', 'Empresa 05', 'Empresa 06'];

ReactDOM.render(<ListExampleMessages title="Selecione o Licenciado" items={licenciados}/>, document.getElementById('app'))