import React, { Component, PropTypes } from 'react';

class ActionMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showActionMenu: false
		}
	}

	handleClick = () => {
		this.setState({showActionMenu: !this.state.showActionMenu})
	}

	handleDeleteRoom = () => {
		this.handleClick();
		this.props.deleteRoom(this.props.roomId);
	}

	render() {
		return (
			<div>
				<span id="action_menu_btn" onClick={this.handleClick}>
					<i className="fas fa-ellipsis-v"></i>
				</span>
				<div className="action_menu" style={{ display: this.state.showActionMenu ? 'block' : 'none' }}>
					<ul>
						<li onClick={this.handleDeleteRoom}>
							<i className="fas fa-trash"></i> Delete chat room
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default ActionMenu;