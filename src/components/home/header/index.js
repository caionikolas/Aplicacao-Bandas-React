import React, { Component } from 'react'

import logo from "../../../assets/img/logo3.png"

import { HeaderContainer } from './styles'
import { LogoContainer } from './styles'
import { Busca } from './styles'

class Header extends Component {

    buscaInput = e => {
        if(e.keyCode === 13){
            const valor = e.target.value
            console.log(valor)
        }
        
    }
    render(){
        return(
            <>
            <HeaderContainer>
                <LogoContainer>
                    <img src={logo} />
                </LogoContainer>
                <Busca>
                    <input type="text" placeholder="Buscar" onKeyDown={(e) => this.buscaInput(e)}
                    />
                </Busca>
            </HeaderContainer>
            </>
        )
    }
}

export default Header;