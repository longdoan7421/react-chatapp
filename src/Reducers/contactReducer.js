import { FILTER, DELETE_ROOM } from '../Actions';

const contactReducer = (state = [], action, fullState) => {
	switch (action.type) {
		case FILTER:
			return state;
		case DELETE_ROOM:
			return state.filter(room => room.room_id !== action.room);
		default:
			return state;
	}
}

export default contactReducer;