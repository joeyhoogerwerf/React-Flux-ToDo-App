var React = require('react');

var StateMessage = React.createClass({

	render: function(){
		var spinner = null;
		if(this.props.showSpinner){
			var spinner = <img src="img/spinner.gif" alt="waiting.." className="spinner" />;
		}
		else{
			spinner = null;
		}
		return(
			<div className="status-message">
				<p>{this.props.message}</p>
				{spinner}
			</div>
		);
	}
});

StateMessage.propTypes = {
	showSpinner: React.PropTypes.bool,
	message: React.PropTypes.string
};

module.exports = StateMessage;