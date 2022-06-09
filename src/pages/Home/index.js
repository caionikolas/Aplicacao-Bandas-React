import React, { Component } from "react";

import Header from "../../components/home/header"
import Lista from "../../components/home/lista"
import Video from "../../components/home/video"

import { Container } from "./style";
import './styles.css'

class Home extends Component {
    render(){
        return(
            <>
                <Header/>
                <Container>
                    <Lista/>
                    <Video/>
                </Container>
            </>
        )
    }
}

export default Home;