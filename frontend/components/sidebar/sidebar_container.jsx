import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
    return ({
        currUser: state.entities.users[state.session.id].username
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        logout: () => dispatch(logout())
    })
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);