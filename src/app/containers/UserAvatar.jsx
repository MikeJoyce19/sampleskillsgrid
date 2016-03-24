import { connect } from 'react-redux';
import Avatar from '../components/Avatar'

const getUserAvatarInfo = (state) => {
    return {
        altText: state.user.username,
        imageUrl: state.user.imageUrl
    }
}

const mapStateToProps = (state) => getUserAvatarInfo(state);


const UserAvatar = connect(mapStateToProps)(Avatar);

export default UserAvatar;