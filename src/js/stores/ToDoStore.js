var Dispatcher = require('../dispatcher/AppDispatcher.js')
var MicroEvent = require('microevent');
var ToDoStoreConstants = require('../constants/ToDoStoreConstants.js');

var ToDoStore = Object.assign({}, MicroEvent.prototype, {

	items: [],
	isLoadingToDos: false,

	getAll: function(){
		return this.items;
	},

	getStateMessage: function(){
		return this.stateMessage;
	},

	getIsLoadingToDos: function(){
		return this.isLoadingToDos;
	}
});

Dispatcher.register(function(payload){
	switch(payload.eventName){
		case ToDoStoreConstants.INIT_TODOS:
			ToDoStore.items = payload.todos;
			ToDoStore.trigger('change');
			break;
		case 'new-item':
			ToDoStore.items.push(payload.todo);
			ToDoStore.trigger('change');
			break;
		case 'delete-todo':
			ToDoStore.items.splice(payload.index, 1);
			ToDoStore.trigger('change');
			break;
		case 'edit-todo':
			ToDoStore.items[payload.index].text = payload.text;
			ToDoStore.trigger('change');
			break;
		case 'blur-todo':
			console.log('blur -> save todo');
			//ListStore.items[payload.todo.props.index].text = payload.text;
			//ListStore.trigger('change');
			break;
	}

	return true;
});

module.exports = ToDoStore;