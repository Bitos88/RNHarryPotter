import { connect } from "react-redux"
import Component from './view'
import * as CharHouseActions from '../../redux/houseCharacters/actions'

const mapStateToProps = state => {
    

    return {
        loading: state.charHouse.loading,
        list: state.charHouse.list,

    }
}

const mapDispatchToProps = dispatch => {
    return {

        getList: () => dispatch(CharHouseActions.getList()),
        setItem: item => dispatch(CharHouseActions.setItem(item))

    }
}

// const connectedConfigured = connect(mapStateToProps, mapDispatchToProps)
// const connectedComponent = connectedConfigured(Component)


//Es lo mismo
export default connect(mapStateToProps, mapDispatchToProps)(Component)

