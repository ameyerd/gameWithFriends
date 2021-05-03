import React, { useState} from 'react';
import './Suggestion.css';

const Suggestion = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        
        <div class="container">
        <form>
            <br></br>
            <label className="yuh2">
                Game Suggestion: 
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
            
        </>
    );
};

export default Suggestion;