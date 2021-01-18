import { createSelector } from 'reselect';
import { SEND_MESSAGE, DELETE_ROOM, CHANGE_ROOM } from '../Actions/chatAction';
import dummyState from '../DummyState';

export const initialState = {
  myUserId: 333,
  currentRoomId: dummyState[0].room_id,
  chatList: dummyState,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const chatList = state.chatList.map((chatRoom) => {
        if (chatRoom.room_id !== state.currentRoomId) return chatRoom;

        return {
          ...chatRoom,
          messages: chatRoom.messages.concat([
            {
              user_id: action.senderId,
              message: action.text,
              time: action.time,
            },
          ]),
        };
      });

      return {
        ...state,
        chatList,
      };
    case CHANGE_ROOM:
      return {
        ...state,
        currentRoomId: action.roomId,
      };
    case DELETE_ROOM: {
      const chatList = state.chatList.filter((chatRoom) => chatRoom.room_id !== action.roomId);

      return {
        ...state,
        chatList,
        currentRoomId: (chatList[0] && chatList[0].room_id) || 0,
      };
    }
    default:
      return state;
  }
};

export default chatReducer;

export const selectCurrentRoom = createSelector(
  [(state) => state.chatReducer.chatList, (state) => state.chatReducer.currentRoomId],
  (chatList, currentRoomId) => {
    return chatList.find((chatRoom) => chatRoom.room_id === currentRoomId) || chatList[0];
  }
);
