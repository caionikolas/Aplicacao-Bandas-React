import React, { Component } from 'react'

import logo from "../../../assets/img/logo3.png"

import { HeaderContainer } from './styles'
import { LogoContainer } from './styles'
import { Busca } from './styles'

class Header extends Component {
    render(){
        return(
            <>
            <HeaderContainer>
                <LogoContainer>
                    <img src={logo} />
                </LogoContainer>
                <Busca>
                    <input type="text" placeholder="Buscar" />
                </Busca>
            </HeaderContainer>
            </>
        )
    }
}

export default Header;