var Dispatcher = require('../dispatcher/AppDispatcher.js')
var MicroEvent = require('microevent');

var StatusMessageStore = Object.assign({}, MicroEvent.prototype, {

	statusMessage: '',
	showSpinner: false,

	getStatusMessage: function(){
		return this.statusMessage;
	},
	getShowSpinner: function(){
		return this.showSpinner;
	}
});

StatusMessageStore.dispatchToken = Dispatcher.register(function(payload){
	switch(payload.eventName){
		case 'show-message':
			StatusMessageStore.statusMessage = payload.message;
			StatusMessageStore.showSpinner = payload.showSpinner;
			StatusMessageStore.trigger('change');
			break;
	}

	return true;
});

module.exports = StatusMessageStore;