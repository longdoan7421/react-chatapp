import React, { Component, PropTypes } from 'react';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

class Chat extends Component {
	constructor(props) {
		super(props);
		console.log('Chat', props);
	}

	render() {
		return (
			<div className="col-md-8 col-xl-6 chat">
				<div className="card">
					<ChatHeader currentRoom={this.props.currentRoom} deleteRoom={this.props.deleteRoom}/>
					<ChatBody currentRoom={this.props.currentRoom} selfId={this.props.selfId}/>
					<ChatFooter sendMessage={this.props.sendMessage} selfId={this.props.selfId}/>
				</div>
			</div>
		)
	}
}

export default Chat;