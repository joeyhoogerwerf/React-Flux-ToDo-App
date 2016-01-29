var _ = require('lodash');

var Api = {
	get: function(url){
		if(url == '/todos'){
			return new Promise(function(resolve, reject){
				setTimeout(function(){
					resolve(JSON.parse(localStorage.getItem('todos')));
				}, 1000);
			});
		}
	},
	post: function(url, todo){
		if(url == '/todos'){
			return new Promise(function(resolve, reject){
				setTimeout(function(){
					var todos = JSON.parse(localStorage.getItem('todos'));
					todos.push(todo);
					localStorage.setItem('todos', JSON.stringify(todos));
					resolve();
				}, 1000);
			});
		}
	},
	put: function(url, todo){
		if(url == '/todos'){
			return new Promise(function(resolve, reject){
				setTimeout(function(){
					var todos = JSON.parse(localStorage.getItem('todos'));
					_.find(todos, function(t){
						if(t.id == todo.props.id){
							t.text = todo.props.text;
						}
					});
					localStorage.setItem('todos', JSON.stringify(todos));
					resolve();
				}, 1000);
			});
		}
	},
	delete: function(url, index){
		if(url == '/todos'){
			return new Promise(function(resolve, reject){
				setTimeout(function(){
					var todos = JSON.parse(localStorage.getItem('todos'));
					todos.splice(index, 1);
					localStorage.setItem('todos', JSON.stringify(todos));
					resolve();
				}, 1000);
			});
		}
	}
}

module.exports = Api;