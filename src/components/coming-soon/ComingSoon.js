import React from 'react';

import Typing, {Backspace, Delay} from 'react-typing-animation';

import './ComingSoon.css'
export default class ComingSoon extends React.Component {

    state = {showSlogan : false}

    showSlogan() {
        this.setState({showSlogan: true})
    }

    renderComingSoon() {
        return (
            <div className="animate-color">
                Coming Soon ...
                <Delay ms={10000}/>
            </div>
        )
    }

    renderSlogan() {

        return (
            <div>
                <span>Fun. </span> 
                <Delay ms={800}/>
                <span>Fitness. </span> 
                <Delay ms={800}/>
                <span>Football.</span>
                <Delay ms={1000}/>
                { this.renderComingSoon() }
            </div>
        )
        
    }

    render() {
        return (
            <div className="coming-soon">
                <Typing className="texts"
                        startDelay={500}>
                    <span>Thane Players League.</span>
                    <br/>
                    <Delay ms={500}/>
                    {this.renderSlogan()}
                </Typing>
            </div>
            
        )
    }
    
}
