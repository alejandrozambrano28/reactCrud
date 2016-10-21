import React from 'react';
import Reflux from 'reflux';
import MotelStore from '../stores/MotelStore.js';

var MoteleGrid = React.createClass({
  mixins: [Reflux.connect(MotelStore, 'motelstore')],

  render: function() {
      if (this.state.motelstore) {        
        return <div> 
          {
            this.state.motelstore.map(function (image) {
              return <div>
              hasta aca funciona
                      
              </div>
          })
        }
        </div>
      }
      else {
          return (<p>No hay imágenes</p>);
      }
  }
});

module.exports = MoteleGrid;