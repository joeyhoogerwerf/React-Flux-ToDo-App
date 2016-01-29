var AppDispatcher = require('../dispatcher/AppDispatcher');
var Api = require('../utils/Api.js')
var StatusMessageActions = require('../actions/StatusMessageActions.js');
var ToDoStoreConstants = require('../constants/ToDoStoreConstants.js');


var ToDoActions = {
	loadInitialTodos: function(){
		StatusMessageActions.showMessage('loading todo\'s,...', true);
		Api
			.get('/todos')
			.then(function(todos){
				StatusMessageActions.showMessage('todo\'s are loaded' , false);
				AppDispatcher.dispatch({
					eventName: ToDoStoreConstants.INIT_TODOS,
					todos: todos
				});
			});		
	},
	add: function(todo){
		StatusMessageActions.showMessage('adding todo...', true);
		Api
			.post('/todos', todo)
			.then(function(){
				StatusMessageActions.showMessage('todo added', false);
				AppDispatcher.dispatch({
					eventName: 'new-item',
					todo: todo
				});
			});	
	},
	delete: function(index){
		StatusMessageActions.showMessage('deleting todo...', true);
		Api
			.delete('/todos', index)
			.then(function(){
				StatusMessageActions.showMessage('todo deleted', false);
				AppDispatcher.dispatch({
					eventName: 'delete-todo',
					index: index
				});	
			});
	},
	edit: function(index, text){
		AppDispatcher.dispatch({
			eventName: 'edit-todo',
			index: index,
			text: text
		});
	},
	save: function(todo){
		StatusMessageActions.showMessage('saving todo...', true);
		Api
			.put('/todos', todo)
			.then(function(){
				StatusMessageActions.showMessage('todo saved', false);
				/*AppDispatcher.dispatch({
					eventName: 'delete-todo',
					index: index
				});*/
			});
	}
};

module.exports = ToDoActions;