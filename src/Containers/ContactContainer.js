import { connect } from 'react-redux';
import Contact from '../Components/Contact';
import { changeRoom } from '../Actions';

const mapStateToProps = (state, ownProps) => {
    return { contactList: state.contactReducer, currentRoomId: state.chatReducer.room_id }
}

const mapDispatchToProps = dispatch => {
    return { changeRoom: room => dispatch(changeRoom(room)) }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact)