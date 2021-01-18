import * as chatAction from '../chatAction';

describe('chat actions', () => {
  it('sendMessage creator', () => {
    const text = 'some text';
    const time = 123456789;
    const senderId = 234;

    const expectedAction = {
      type: chatAction.SEND_MESSAGE,
      text,
      time,
      senderId,
    }

    expect(chatAction.sendMessage(text, time, senderId)).toEqual(expectedAction);
  })

  it('deleteRoom creator', () => {
    const roomId = 131;

    const expectedAction = {
      type: chatAction.DELETE_ROOM,
      roomId,
    }

    expect(chatAction.deleteRoom(roomId)).toEqual(expectedAction);
  })

  it('changeRoom creator', () => {
    const roomId = 131;

    const expectedAction = {
      type: chatAction.CHANGE_ROOM,
      roomId,
    }

    expect(chatAction.changeRoom(roomId)).toEqual(expectedAction);
  })
})