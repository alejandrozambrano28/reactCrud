import React from 'react';
import ReactDOM from 'react-dom';
import MenuActions from './actions/MenuActions';
import MenuComponent from './components/MenuComponent.jsx';

// Cada 5 segundos: recargar!
setInterval(function() {
    MenuActions.listarMenu(); 
}, 5000);

ReactDOM.render(<MenuComponent />, document.getElementById('app'));