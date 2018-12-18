import { SEND_MESSAGE, DELETE_ROOM, CHANGE_ROOM } from '../Actions';

const chatReducer = (state, action, fullState) => {
	switch (action.type) {
		case SEND_MESSAGE:
			return Object.assign({}, state, 
				state.messages.push({
					user_id: action.user_id,
					message: action.text,
					time: action.time,
				})
			);
		case CHANGE_ROOM:
			return action.room;
		case DELETE_ROOM:
			return fullState.contactReducer[0];
		default:
			return state;
	}
}

export default chatReducer;