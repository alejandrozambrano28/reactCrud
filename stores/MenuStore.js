var MenusDispatcher = require('../dispatchers/Menudispatcher');
var MenusConstants = require('../constants/MenuConstats');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var request = require('request');

var CHANGE_EVENT = 'change';

var _Menus = [];

var MenusStore = assign({},
  EventEmitter.prototype,
  {
    getMenus : function(){
      return _Menus;
    },
    emitChange : function() {
      this.emit(CHANGE_EVENT);
    },
    addChangeListener : function(callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
  }
);

MenusDispatcher.register(function(action){
  switch(action.action.actionType){
    case MenusConstants.LISTAR_MenuS:
      MenusStore.emitChange();
      /*request.get('http://evaluando.herokuapp.com/evaluation', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          _evaluations = JSON.parse(body).evaluations;
          MenusStore.emitChange();
        }
      });*/

    break;
    case MenusConstants.AGREGAR_Menu:
      var Menu = action.action.Menu;
      _Menus.push(Menu);
      MenusStore.emitChange();
      /*request.get('http://evaluando.herokuapp.com/evaluation' + queryParams ,
        function (error, response, body) {
          if (!error && response.statusCode == 200) {
            // ...
            MenusStore.emitChange();
          }
        }
      );*/
    break;
    case MenusConstants.MODIFICAR_Menu:
      var Menu = action.action.Menu;
      //request.get('http://evaluando.herokuapp.com/term', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          //_terms = JSON.parse(body).terms;
          MenusStore.emitChange();
        };
    break;
    case MenusConstants.ELIMINAR_Menu:
      var id = action.action.id;
      //request.get('http://evaluando.herokuapp.com/term', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          /* ... */
          MenusStore.emitChange();
        };
    break;
    default:
      // no op
  }
});

module.exports = MenusStore;
