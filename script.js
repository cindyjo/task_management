var myAppModule = angular.module('myApp',[]);

myAppModule.factory('taskFactory', function() {

	var tasks = [];
	var factory = {};
	factory.getTasks = function(callback) {
		callback(tasks);
	}
	factory.addTasks = function(data){
		tasks.push(data);
		console.log(tasks);
	}
	factory.removeTask = function(data){
		tasks.splice(data,1);
	}
	return factory;
});

myAppModule.controller('tasksController', function(taskFactory){
	this.tasks= [];

	that=this;
	taskFactory.getTasks(function(data){
		that.tasks = data;
	});

	this.addTasks = function(data){
		this.newTask.created_date = new Date();
		taskFactory.addTasks(this.newTask);
		this.newTask = null;
	}
	this.removeTask = function(task){
		taskFactory.removeTask(this.tasks.indexOf(task));
	}
})