"use strict";

var React = require('react');

var Progress = React.createClass({
    render: function () {
        return (
            <div className="col-lg-4">
                <div className="alert alert-info">Chances Left</div>
            </div>
        );
    }
});

module.exports = Progress;