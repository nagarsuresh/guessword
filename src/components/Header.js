"use strict";

var React = require('react');

var Header = React.createClass({
    render: function () {
        var hasWord = (this.props.selectedWord) ? true : false;
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Word Guess Game</a>
                    </div>
                    <div className="nav navbar-nav navbar-right">
                        <div className="btn-toolbar">
                            <button className="btn btn-primary btn-lg" onClick={this.props.startGame} disabled={hasWord}>Start</button>
                            <button className="btn btn-danger btn-lg" onClick={this.props.onGiveUp} disabled={!hasWord}>Give Up!</button>
                            <button className="btn btn-info btn-lg" onClick={this.props.onHowToPlay}>How to play</button>
                        </div>
                    </div>
                </div>
            </nav >
        );
    }
});

module.exports = Header;