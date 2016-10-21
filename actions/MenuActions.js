var MenuDispatcher = require('../dispatchers/Menudispatcher');
var MenusConstants = require('../constants/MenuConstats');

var MenusActions = {
  listarMenu : function(){
    MenusDispatcher.handleServerAction({
      actionType :MenusConstants.LISTAR_MenuS
    });
  },
  agregarMenu : function(Menu){
    MenusDispatcher.handleViewAction({
      actionType :MenusConstants.AGREGAR_Menu,
      Menu : Menu
    });
  },
  modificarMenu : function(Menu){
    MenusDispatcher.handleViewAction({
      actionType :MenusConstants.MODIFICAR_Menu,
      Menu : Menu
    });
  },
  eliminarMenu : function(id){
    MenusDispatcher.handleViewAction({
      actionType :MenusConstants.ELIMINAR_Menu,
      id : id
    });
  }
};

module.exports = MenusActions;
