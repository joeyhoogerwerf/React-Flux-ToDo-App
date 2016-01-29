var AppDispatcher = require('../dispatcher/AppDispatcher');

var StatusMessageActions = {
	showMessage: function(message, showSpinner){
		AppDispatcher.dispatch({
			eventName: 'show-message',
			message: message,
			showSpinner: showSpinner
		});
	}
};

module.exports = StatusMessageActions;