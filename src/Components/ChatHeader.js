import React, { Component, PropTypes } from 'react';
import UserInfo from './UserInfo';
import ActionMenu from './ActionMenu';

class ChatHeader extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="card-header msg-head">
				<UserInfo roomInfo={this.props.currentRoom}/>
				<ActionMenu roomId={this.props.currentRoom.room_id} deleteRoom={this.props.deleteRoom}/>
			</div>
		)
	}
}

export default ChatHeader;