import React, { Component, PropTypes } from 'react';
import UserInfo from './UserInfo';

class Friend extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li className={this.props.currentRoomId === this.props.roomInfo.room_id ? 'active' : ''} onClick={e => this.props.changeRoom(this.props.roomInfo)}>
				<UserInfo roomInfo={this.props.roomInfo} isList/>
			</li>
		)
	}
}

export default Friend;