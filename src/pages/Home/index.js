import React, { Component } from "react";
import { Provider } from 'react-redux'
import store from '../../store'

import Header from "../../components/home/header"
import Lista from "../../components/home/lista"
import Video from "../../components/home/video"

import { Container } from "./style";
import './styles.css'

class Home extends Component {
    render(){
        return(
            <>
                <Provider store={store}>
                    <Header/>
                    <Container>
                        <Lista/>
                        <Video/>
                    </Container>
                </Provider>
            </>
        )
    }
}

export default Home;