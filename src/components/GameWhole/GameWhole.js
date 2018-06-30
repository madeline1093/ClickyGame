import React, { Component } from 'react';
import NavTabs from "./../NavTabs";
import Footer from '../Footer';
import Container from "./../Container";
import Header from '../Header';
import ClickItem from '../ClickItem';
import imgs from "../../../src/imgs.json"

class GameWhole extends Component {
    state ={
        imgs,
        score: 0,
        HighScore: 0
    };
    componentDidMount() {
        this.setState({imgs: this.shuffleImages(this.state.imgs) });
    };
    handleItemClick = id => {
        let guessedCorrectly = false;
        let newImgs = this.state.imgs.map(item => {
            let newItem = { ...item};
            if (newItem.id === id) {
                if(!newItem.clicked === true) {
                    newItem.clicked = true;
                    guessedCorrectly = true;
                }
            }
            return newItem;
        });
        if (guessedCorrectly) {
            this.handleCorrect(newImgs);
        } else {
            this.handleIncorrect(newImgs);
        }
    };

    handleCorrect = newImgs => {
        console.log("yay!");
    };

    handleIncorrect = newImgs => {
        console.log('boo!');
    };
    shuffleImages = imgs => {
        let i = imgs.length -1;
        while (i>0) {
            let j = Math.floor(Math.random() * (i+1));
            let imgTemp = imgs[i];
            imgs[i] = imgs[j];
            imgs[j] = imgTemp;
            i--;
        }
        return imgs;
    }
    render () {
        return (
            <div>
                <p>hi</p>
                
                 <NavTabs />
                {/* <Header /> */}
                <Container> 
                    {this.state.imgs.map(imgs => (
                        <ClickItem 
                            key={imgs.id}
                            id={imgs.id}
                            handleClick={this.handleItemClick}
                            image={imgs.image}
                        />
                    ))}
                    
                </Container>
                {/* <Footer />  */} 
            </div>
        );
    }
}

export default GameWhole;