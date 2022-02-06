import { connect } from "react-redux"
import Component from './view'
import * as charHouseNameActions from '../../redux/houses/actions'

const mapStateToProps = state => {
    

    return {
        house: state.houseName.house,
        userName: state.userName.userName

    }
}

const mapDispatchToProps = dispatch => {
    return {

        setName: house => dispatch(charHouseNameActions.setName(house))

    }
}

// const connectedConfigured = connect(mapStateToProps, mapDispatchToProps)
// const connectedComponent = connectedConfigured(Component)


//Es lo mismo
export default connect(mapStateToProps, mapDispatchToProps)(Component)
