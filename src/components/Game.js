"use strict";

var React = require('react');
var Header = require('./Header');
var DisplayResult = require('./DisplayResult');
var Progress = require('./Progress');
var ChooseWord = require('./ChooseWord');
var HowToPlay = require('./HowToPlay');

var Game = React.createClass({

    getInitialState: function () {
        var MAX_ATTEMPTS = 15;
        return {
            selectedWord: null,
            guessedWords: [],
            maxAttempts: MAX_ATTEMPTS,
            guessedWord: null,
            invaildWordError: null,
            message: "Not Started!",
            howToPlay: false,
            msgType: 'info',
        };
    },


    onStartGame: function (event) {
        var randomIndex, randomWord;
        event.preventDefault();

        randomIndex = Math.round(Math.random() * DICTIONARY_WORDS.length);
        randomWord = DICTIONARY_WORDS[randomIndex];

        this.setState({
            guessedWords: [],
            selectedWord: randomWord,
            givenUp: false,
            message: this.state.maxAttempts + " Attempts left",
            msgType: 'info'
        });

    },

    onWordGuess: function (word) {
        var me = this;
        var i = 0;

        if (!word || word === '') {
            this.setState({
                invaildWordError: 'Enter a word to guess!'
            });
            return;
        }
        word = word.toUpperCase();
        for (i = 0; i < this.state.guessedWords.length; i++) {
            if (this.state.guessedWords[i].word === word) {
                this.setState({
                    invaildWordError: word + ' is already guessed!',
                    guessedWord: word
                });
                return;
            }
        }

        this.setState({
            invaildWordError: '',
            guessedWord: word
        }, function () {
            if (!DICTIONARY_WORDS.includes(word)) {
                me.setState({
                    invaildWordError: word + ' is an invalid dictionary word!',
                    guessedWord: word
                });
                return;
            }

            me.matchWord(word);
        });
    },

    matchWord: function (word) {
        var words = this.state.guessedWords;
        var index = 0;

        var selectedWord = this.state.selectedWord.split("");
        var toMatch = word.split("");
        var blue = 0, red = 0, gray = 0;
        for (var i = 0; i < 4; i++) {
            if (toMatch[i] === selectedWord[i]) {
                blue += 1;
                toMatch[i] = null;
            }
        }

        for (i = 0; i < 4; i++) {
            if (toMatch[i] != null && toMatch.includes(selectedWord[i])) {
                red += 1;
                index = toMatch.indexOf(selectedWord[i]);
                toMatch[i] = null;
            }
        }

        gray = 4 - (blue + red);

        words.push({
            word: word,
            stars: {
                red: red,
                blue: blue,
                gray: gray
            }
        });

        //won it

        if (blue === 4) {
            this.setState({
                message: 'You won it!!! Click start to Play again!',
                selectedWord: null,
                msgType: 'success'
            });
        } else {
            var attempsLeft = this.state.maxAttempts - this.state.guessedWords.length;

            if (attempsLeft === 0) {
                this.setState({
                    message: 'You could not guess ' + this.state.selectedWord,
                    selectedWord: null,
                    guessedWord: null,
                    msgType: 'failure'
                });
            } else {
                var message = attempsLeft + " Attempts left";
                this.setState({
                    guessedWords: words,
                    guessedWord: '',
                    message: message
                });
            }
        }


    },

    onWordEnter: function (word) {
        if (word) {
            word = word.toUpperCase();
        }
        this.setState({
            guessedWord: word
        });
    },

    onGiveUp: function () {
        this.setState({
            message: 'You could not guess ' + this.state.selectedWord,
            selectedWord: null,
            msgType: 'failure'
        });
    },

    onHowToPlay: function () {
        this.setState({
            howToPlay: !this.state.howToPlay
        });
    },


    render: function () {
        var help = null;
        if (this.state.howToPlay) {
            help = <HowToPlay />;
        }
        return (
            <div className="">

                <Header
                    startGame={this.onStartGame}
                    selectedWord={this.state.selectedWord}
                    onGiveUp={this.onGiveUp}
                    onHowToPlay={this.onHowToPlay}
                    />

                <ChooseWord
                    guessWord={this.onWordGuess}
                    selectedWord={this.state.selectedWord}
                    invaildWordError={this.state.invaildWordError}
                    guessedWord={this.state.guessedWord}
                    onWordEnter={this.onWordEnter}/>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            <DisplayResult guessedWords={this.state.guessedWords}/>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <Progress message={this.state.message} msgType={this.state.msgType}/>
                            {help}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
});

module.exports = Game;
