var React = require('react');
var ToDoActions = require('./actions/ToDoActions.js');

var AddToDoButton = React.createClass({
	_handleClick: function(){
		ToDoActions.add({id: Date.now(), text: ''});
	},
	render: function(){
		return(
			<button onClick={this._handleClick}>Add ToDo</button>
		);
	}
});

module.exports = AddToDoButton;