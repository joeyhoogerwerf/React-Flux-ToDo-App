var React = require('react');
var ReactDOM = require('react-dom');
var update = require('react-addons-update');

var ToDoActions = require('./actions/ToDoActions.js');

var ToDoStore = require('./stores/ToDoStore.js');
var StatusMessageStore = require('./stores/StatusMessageStore.js');

var ToDoList = require('./ToDoList.jsx');
var AddToDoButton = require('./AddToDoButton.jsx');
var StateMessage = require('./StateMessage.jsx');

//when localstorage is empty save an initial array to hold todos
if(!localStorage.getItem('todos')){
	localStorage.setItem('todos', '[]');
}

var App = React.createClass({
	getInitialState: function(){
		return {
			todos: [],
			stateMessage: StatusMessageStore.getStatusMessage(),
			showSpinner: StatusMessageStore.getShowSpinner()
		};
	},
	_forceUpdate: function(){
		this.forceUpdate();
	},
	componentDidMount: function(){
		StatusMessageStore.bind('change', this._forceUpdate);
		ToDoStore.bind('change', this._forceUpdate);
		ToDoActions.loadInitialTodos();
	},
	render: function(){
		console.log('render');

		this.state.todos = ToDoStore.getAll();
		this.state.stateMessage = StatusMessageStore.getStatusMessage();
		this.state.showSpinner = StatusMessageStore.getShowSpinner();

		return(
			<div className="todo-app">
				<h1>ToDo List</h1>
				<AddToDoButton />
				<StateMessage message={this.state.stateMessage} showSpinner={this.state.showSpinner} />
				<ToDoList todos={this.state.todos} />
			</div>	
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('content')
);