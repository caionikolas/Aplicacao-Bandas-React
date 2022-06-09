import React, { Component } from "react";

import { Videolist } from "./styles"
import { Item } from "./styles"

class Lista extends Component {
    render (){
        return (
            <>
                <Videolist>
                    <Item>
                        <div>
                            <h2>Videos de musica aleatorio</h2>
                        </div>
                    </Item>
                    <Item>
                        <div>
                            <h2>Videos de musica aleatorio</h2>
                        </div>
                    </Item>
                    <Item>
                        <div>
                            <h2>Videos de musica aleatorio</h2>
                        </div>
                    </Item>
                    <Item>
                        <div>
                            <h2>Videos de musica aleatorio</h2>
                        </div>
                    </Item>
                    <Item>
                        <div>
                            <h2>Videos de musica aleatorio</h2>
                        </div>
                    </Item>
                </Videolist>
            </>
        )
    }
}

export default Lista

