import React, {Component} from "react";
import {Router, Stack, Scene} from 'react-native-router-flux'
import Home from "../../pages/home";
import Characters from "../../pages/characters";
import Houses from "../../pages/housesChars";
import House from "../../pages/houses";
import { Provider } from "react-redux";
import store from "../../config/redux";
import Form from "../../pages/userForm";


class App extends Component {
    render(){
        return(
            <Provider store={store}>
            <Router>
                <Stack key="root">
                    <Scene key="Home" component={Home} hideNavBar  />
                    <Scene key="Characters" title='personajes' component={Characters} back />
                    <Scene key="Houses" title='House' component={Houses}  back />
                    <Scene key="House" title='House' component={House} hideNavBar back/>
                    <Scene key="UserForm" title='UserForm' component={Form} hideNavBar initial/> 
                </Stack>
            </Router>
            </Provider>
        )
    }
}

export default App
