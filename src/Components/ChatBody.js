import React, { Component, PropTypes } from 'react';
import ChatMessage from './ChatMessage';

class ChatBody extends Component {
	constructor(props) {
		super(props);
		this.cardBody = React.createRef();
	}

	componentDidUpdate() {
		const cardBody = this.cardBody.current;
		cardBody.scrollTop = cardBody.scrollHeight;
	}

	render() {
		return (
			<div className="card-body msg_card_body" ref={this.cardBody}>
				{this.props.currentRoom.messages.map((message, index) => (
					<ChatMessage key={index} {...message} 
						avatar={this.props.currentRoom.avatar}
						selfId={this.props.selfId}
					/>
				))}
			</div>
		)
	}
}

export default ChatBody;