export const SEND_MESSAGE = 'SEND_MESSAGE';
export const DELETE_ROOM = 'DELETE_ROOM';
export const CHANGE_ROOM = 'CHANGE_ROOM';
export const FILTER = 'FILTER';

export function sendMessage(text, time, sender_id) {
  return { type: SEND_MESSAGE, text, time, sender_id };
}

export function deleteRoom(roomId) {
  return { type: DELETE_ROOM, roomId };
}

export function changeRoom(roomId) {
  return { type: CHANGE_ROOM, roomId };
}
