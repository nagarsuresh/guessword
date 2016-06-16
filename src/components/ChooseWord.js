"use strict";

var React = require('react');

var ChooseWord = React.createClass({

    guessWord: function (event) {
        event.preventDefault();
        this.props.guessWord(this.refs.theWord.getDOMNode().value);
    },

    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="input-group">
                            <input type="text" className="form-control" ref="theWord"/>
                            <span className="input-group-btn">
                                <button className="btn btn-primary" type="button" onClick={this.guessWord}>Go!</button>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="well">Word is selected!</div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ChooseWord;