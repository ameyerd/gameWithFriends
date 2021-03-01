import React, { Component } from 'react';
import styled from 'styled-components';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <h1>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                        <a 
                        href=""
                        className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"> 
                            game With Friends!</a>
                    </nav>
                </h1>
            </div>
        )
    }
}
