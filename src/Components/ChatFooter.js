import React, { Component, PropTypes } from 'react';

class ChatFooter extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.textArea = React.createRef();
	}

	handleSubmit(e) {
		e.preventDefault();
		let message = this.textArea.current.value;
		if (!message) {
			return;
		}
		let now = new Date().getTime();
		this.props.sendMessage(message, now, this.props.selfId);
		this.textArea.current.value = '';
	}

	render() {
		return (
			<div className="card-footer">
				<form onSubmit={this.handleSubmit}>
					<div className="input-group">
						<textarea className="form-control type_msg" placeholder="Type your message..."
							style={{ marginTop: 0, marginBottom: 0, height: 81 }} ref={this.textArea}></textarea>
						<div className="input-group-append">
							<button type="submit" className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default ChatFooter;