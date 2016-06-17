"use strict";

var React = require('react');

var Progress = React.createClass({
    render: function () {
        var cls = "alert alert-info";
        if(this.props.msgType === 'failure'){
            cls = "alert alert-danger lead";
        } else if(this.props.msgType === 'success'){
            cls = "alert alert-success lead";
        }
        
        return (
            <div>
                <div className={cls}>{this.props.message}</div> 
            </div>
        );
    }
});

module.exports = Progress;