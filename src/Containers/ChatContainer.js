import { connect } from 'react-redux';
import Chat from '../Components/Chat';
import { sendMessage, deleteRoom } from '../Actions';

const mapStateToProps = (state, ownProps) => {
    return { currentRoom: state.chatReducer , selfId: 333 }
}

const mapDispatchToProps = dispatch => {
    return { 
        sendMessage: (text, time, user_id) => dispatch(sendMessage(text, time, user_id)),
        deleteRoom: room => dispatch(deleteRoom(room))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat)