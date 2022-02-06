import { connect } from "react-redux"
import Component from './view'
import * as charActions from '../../redux/characters/actions'

const mapStateToProps = state => {
    return {
        item: state.charHouse.item

    }
}

const mapDispatchToProps = dispatch => {
    return {
        setItem: item => dispatch(charActions.setItem(item))
    }
}

// const connectedConfigured = connect(mapStateToProps, mapDispatchToProps)
// const connectedComponent = connectedConfigured(Component)


//Es lo mismo
export default connect(mapStateToProps, mapDispatchToProps)(Component)