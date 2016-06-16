"use strict";

var React = require('react');

var ResultRow = React.createClass({
    render: function () {
        return (
            <div className="list-group-item">{this.props.word}
                <span className="pull-right">
                    <span className="glyphicon glyphicon-star right"></span>
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
            <div className="col-lg-8">
                <div className="list-group">
                    {rows}
                </div>
            </div>
        );
    }
});


module.exports = DisplayResult;