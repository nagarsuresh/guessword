"use strict";

var React = require('react');

var ChooseWord = React.createClass({

    guessWord: function (event) {
        event.preventDefault();
        this.props.guessWord(this.refs.theWord.getDOMNode().value);
    },

    onWordBeingEntered: function (event) {
        this.props.onWordEnter(event.target.value);
    },

    render: function () {
        var error = <div/>;
        if (this.props.invaildWordError) {
            error = <div className="alert alert-danger ">{this.props.invaildWordError}</div>;
        }
        var canGuess = (this.props.selectedWord) ? false : true;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                        <div className="input-group">
                            <input type="text" className="form-control capitalize" ref="theWord" maxLength="4" value={this.props.guessedWord} onChange={this.onWordBeingEntered}/>
                            <span className="input-group-btn">
                                <button className="btn btn-primary" type="button" onClick={this.guessWord} disabled={canGuess}>Go!</button>
                            </span>
                        </div>
                        {error}
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="well">{this.props.selectedWord ? 'Start Guessing!' : 'click START button to play!'}</div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ChooseWord;