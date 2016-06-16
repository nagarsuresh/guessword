"use strict";

var React = require('react');

var Header = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Brand</a>
                    </div>
                    <div className="nav navbar-nav navbar-right">
                        <div className="btn-toolbar">
                            <button className="btn btn-primary btn-lg" onClick={this.props.startGame}>Start</button>
                            <button className="btn btn-danger btn-lg">Give Up</button>
                        </div>
                    </div>
                </div>
            </nav >
        );
    }
});

module.exports = Header;