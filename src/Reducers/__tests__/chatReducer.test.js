import chatReducer from '../chatReducer';
import { SEND_MESSAGE, CHANGE_ROOM, DELETE_ROOM } from '../../Actions/chatAction';

describe('chat reducer', () => {
  const initialState = {
    myUserId: 333,
    currentRoomId: 222333,
    chatList: [
      {
        room_id: 222333,
        friend_name: 'Tran Van A',
        is_online: false,
        left_time: 1545112092147,
        avatar:
          'https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg',
        messages: [
          {
            user_id: 222,
            message: 'hello',
            time: '1545100200000',
          },
          {
            user_id: 333,
            message: 'hello',
            time: '1545100341231',
          },
          {
            user_id: 222,
            message: 'how r u',
            time: '1545100401234',
          },
          {
            user_id: 333,
            message: 'fine, thanks',
            time: '1545100435023',
          },
        ],
      },
    ]
  }

  it('handle action SEND_MESSAGE: update new message to current room', () => {
    const action = {
      type: SEND_MESSAGE,
      text: 'some thing new',
      time: '1545100445055',
      senderId: 222,
    }

    const expectedNewState = {
      ...initialState,
      chatList: [
        {
          ...initialState.chatList[0],
          messages: [
            ...initialState.chatList[0].messages,
            {
              user_id: action.senderId,
              message: action.text,
              time: action.time,
            }
          ]
        }
      ]
    }

    expect(chatReducer(initialState, action)).toEqual(expectedNewState)
  })

  it('handle action CHANGE_ROOM', () => {
    const action = {
      type: CHANGE_ROOM,
      roomId: 222333,
    }

    const expectedNewState = {
      ...initialState,
      currentRoomId: 222333,
    }

    expect(chatReducer(initialState, action)).toEqual(expectedNewState)
  })

  it('handle action DELETE_ROOM', () => {
    const action = {
      type: DELETE_ROOM,
      roomId: 222333,
    }

    const expectedNewState = {
      ...initialState,
      currentRoomId: 0,
      chatList: [],
    }

    expect(chatReducer(initialState, action)).toEqual(expectedNewState)
  })
})