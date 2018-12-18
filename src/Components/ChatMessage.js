import React, { Component, PropTypes } from 'react';

class ChatMessage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let time = new Date(+this.props.time).toLocaleString();
		if (this.props.selfId === this.props.user_id) {
			return (
				<div className="d-flex justify-content-end mb-4">
					<div className="msg_cotainer_send">
						{this.props.message}
						<span className="msg_time_send">{time}</span>
					</div>
					<div className="img_cont_msg">
						<img src="https://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" className="rounded-circle user_img_msg" />
					</div>
				</div>
			)
		} else {
			return (
				<div className="d-flex justify-content-start mb-4">
					<div className="img_cont_msg">
						<img src={this.props.avatar} className="rounded-circle user_img_msg"/>
					</div>
					<div className="msg_cotainer">
						{this.props.message}
						<span className="msg_time">{time}</span>
					</div>
				</div>
			)
		}
	}
}

export default ChatMessage;