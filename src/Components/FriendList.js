import React, { Component, PropTypes } from 'react';
import Friend from './Friend';

class FriendList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="card-body contacts_body">
				<ul className="contacts">
					{this.props.contactList.map((roomInfo, index) => (
						<Friend key={index} roomInfo={roomInfo} currentRoomId={this.props.currentRoomId} changeRoom={this.props.changeRoom} />
					))}
				</ul>
			</div>
		)
	}
}

export default FriendList;