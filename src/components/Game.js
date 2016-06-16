"use strict";

var React = require('react');
var Header = require('./Header');
var DisplayResult = require('./DisplayResult');
var Progress = require('./Progress');
var ChooseWord = require('./ChooseWord');

var Game = React.createClass({

    getInitialState: function () {
        return {
            selectedWord: null,
            guessedWords: ['one', 'two'],
            maxAttempts: 15
        };
    },


    onStartGame: function (event) {
        event.preventDefault();
        this.setState({
            guessedWords: []
        });
    },

    onWordGuess: function (word) {
        var words = this.state.guessedWords;
        words.push(word);
        this.setState({
            guessedWords: words
        });
    },


    render: function () {
        return (
            <div className="">
                <Header startGame={this.onStartGame}/>
                <ChooseWord guessWord={this.onWordGuess}/>
                <div className="container">
                    <DisplayResult guessedWords={this.state.guessedWords}/>
                    <Progress/>
                </div>

            </div>
        );
    }
});

module.exports = Game;
