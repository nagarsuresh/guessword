"use strict";

var React = require('react');

var ResultRow = React.createClass({
    render: function () {
        var word = this.props.word.word;
        var stars = this.props.word.stars;
        var displayStars = [];
        for (var i = 0; i < stars.blue; i++) {
            displayStars.push(<span className="glyphicon glyphicon-star right"></span>);
        }
        for (i = 0; i < stars.red; i++) {
            displayStars.push(<span className="glyphicon glyphicon-star wrong"></span>);
        }
        for (i = 0; i < stars.gray; i++) {
            displayStars.push(<span className="glyphicon glyphicon-star"></span>);
        }

        return (
            <div className="list-group-item">{word}
                <span className="pull-right">
                    {displayStars}
                </span>
            </div>
        );
    }
});

var DisplayResult = React.createClass({
    render: function () {

        var rows = [];
        this.props.guessedWords.forEach(function (word) {
            rows.push(<ResultRow word={word}/>);
        });
        return (
            <div className="list-group">
                {rows}
            </div>
        );
    }
});


module.exports = DisplayResult;