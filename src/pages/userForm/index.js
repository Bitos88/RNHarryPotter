import { connect } from "react-redux"
import Component from './view'
import * as userActions from '../../redux/userName/actions'

const mapStateToProps = state => {
    

    return {
        userName: state.userName.userName

    }
}

const mapDispatchToProps = dispatch => {
    return {

        setUserName: userName => dispatch(userActions.setUserName(userName))

    }
}

// const connectedConfigured = connect(mapStateToProps, mapDispatchToProps)
// const connectedComponent = connectedConfigured(Component)


//Es lo mismo
export default connect(mapStateToProps, mapDispatchToProps)(Component)
