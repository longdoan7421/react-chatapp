import React, { Component, PropTypes } from 'react';

class UserInfo extends Component {
	constructor(props) {
		super(props);
	}

	compareNow = (time) => {
		let now = new Date().getTime();
		return Math.floor((now - time) / 60000);
	}

	render() {
		let firstName = this.props.roomInfo.friend_name.split(" ")[0];
		let leftTime = this.compareNow(this.props.roomInfo.left_time);
		return (
			<div className="d-flex bd-highlight">
				<div className="img_cont">
					<img src={this.props.roomInfo.avatar} className="rounded-circle user_img"/>
					<span className={`online_icon ${this.props.roomInfo.is_online ? '' : 'offline'}`}></span>
				</div>
				<div className="user_info">
					{this.props.isList ? (
						<div>
							<span>{this.props.roomInfo.friend_name}</span>
							<p>{this.props.roomInfo.is_online ? `${firstName} is online.` : `${firstName} left ${leftTime} minutes ago.` }</p>
						</div>
					) : (
						<div>
							<span>Chat with {this.props.roomInfo.friend_name}</span>
							<p>{this.props.roomInfo.messages.length} Messages</p>
						</div>
					)}
				</div>
			</div>
		)
	}
}

export default UserInfo;