var React = require('react');
var update = require('react-addons-update');
var ToDoItem = require('./ToDoItem.jsx');

var ToDoList = React.createClass({
	render: function(){

		var todos = this.props.todos.map(function(todo, i){
			return(
				<ToDoItem key={todo.id} index={i} id={todo.id} text={todo.text} />
			);
		});

		return(
			<ul className="todo-list">
				{todos}
			</ul>
		);
	}
});

ToDoList.propTypes = {
	todos: React.PropTypes.array
};

module.exports = ToDoList;