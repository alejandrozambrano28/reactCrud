var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var MenusDispatcher = assign(
  new Dispatcher(),
  {
    handleViewAction : function(action){
      this.dispatch({
        source : 'VIEW_ACTION',
        action : action
      });
    },
  }
);

module.exports = MenusDispatcher;
