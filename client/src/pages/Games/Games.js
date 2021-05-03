import React, {useState} from 'react';
import Cards from '../../components/CardItem/Cards';
import './Games.css';

const Games = () => {

    return (
        <>   
            <Cards />
            <h3>Your game not found in our library? Make a suggestion <a href="/suggestion">here</a>.</h3>
            
        </>
    );
};

export default Games;
