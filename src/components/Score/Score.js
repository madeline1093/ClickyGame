import React, {Component} from "react";

class Score extends Component {
    state = {
        message:"",
        animated: false
    };
    componentWillReceiveProps({score, highScore}) {
        const newState = {animated: true};
        if(score === 0 && highScore === 0){
            newState.message ='';
        } else if (score === 0 && highScore >0) {
            newState.message="incorrect";
        } else{
            newState.message ="correct";
        }
        this.setState(newState, () =>
            setTimeout(() => this.setState({animated:false}), 500)
        );
    }
    renderMessage = () => {
        switch (this.state.message) {
            case "correct":
                return "Correct!";
            case "incorrect":
                return "Incorrect";
            default:
                return "Click an image to start";
        }
    }

    render (){
        return (
            <div className={this.state.animated ? this.state.message : ""}>
                {this.renderMessage()}
            </div>
        )
    }

}

export default Score;