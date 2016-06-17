"use strict";

var React = require('react');

var HowToPlay = React.createClass({
    render: function () {
        return (
            <div>
                <div className="well">
                    <p className="lead">
                        Guess a valid dictionary word chosen randomly by system in 15 attempts.
                    </p>
                    System choses a 4 letter word randomly, the word will be a valid dictionary word.<br/>
                    You need to guess the word which system has selected.<br/>
                    If any of the letter of the word which you guess is there in the word selected by system and is at right location too, system displays a "blue" star,
                    if letter is there but is at wrong location, system displays a "red" star. <br/>
                    e.g. system selected word - "SEAT" and user enters "TEST" system will dislay two Blue(E and T) and one red star (S). <br/>
                    <br/>
                    <strong>Note </strong>: The order of stars is not related to order of letters in the word!
                    <br/><br/>    
                    <span className="label label-default">press 'how to play' again to hide this message </span>
                </div>
            </div>
        );
    }
});

module.exports = HowToPlay;