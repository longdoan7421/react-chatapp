import React, { Component, PropTypes } from 'react';
import SearchBar from './SearchBar';
import FriendList from './FriendList';

class Contact extends Component {
	constructor(props) {
		super(props);
		console.log('Contact', props);
	}

	render() {
		return (
			<div className="col-md-4 col-xl-3 chat">
				<div className="card mb-sm-3 mb-md-0 contacts_card">
					<div className="card">
						<SearchBar />
						<FriendList {...this.props}/>
						<div className="card-footer"></div>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact;