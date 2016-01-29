var React = require('react');
var update = require('react-addons-update');
var StatusMessageActions = require('./actions/StatusMessageActions.js');
var ToDoActions = require('./actions/ToDoActions.js');

var ToDoItem = React.createClass({
	_handleFocus: function(){
		StatusMessageActions.showMessage('editing todo', false);
	},
	_handleBlur: function(){
		ToDoActions.save(this);
	},
	_handleUpdateToDo: function(e){
		ToDoActions.edit(this.props.index, e.target.value);
	},
	_handleDeleteToDo: function(){
		ToDoActions.delete(this.props.index);
	},
	render: function(){
		return(
			<li>
				<input 
					type="text"
					placeholder="Type something.."
					key={this.props.id}
					value={this.props.text}
					onChange={this._handleUpdateToDo}
					onFocus={this._handleFocus}
					onBlur={this._handleBlur} />					
				<button onClick={this._handleDeleteToDo}>x</button>
			</li>
		);
	}
});

ToDoItem.propTypes = {
	index: React.PropTypes.number,
	id: React.PropTypes.number,
	text: React.PropTypes.string
};

module.exports = ToDoItem;