export const SEND_MESSAGE = 'SEND_MESSAGE';
export const DELETE_ROOM = 'DELETE_ROOM';
export const CHANGE_ROOM = 'CHANGE_ROOM';
export const FILTER = 'FILTER';

export function sendMessage(text, time, user_id) {
	return { type: SEND_MESSAGE, text, time, user_id }
}

export function deleteRoom(room) {
	return { type: DELETE_ROOM, room }
}

export function changeRoom(room) {
	return { type: CHANGE_ROOM, room }
}