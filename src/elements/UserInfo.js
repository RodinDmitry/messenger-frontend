import React, { Component } from "react";
import "./UserInfo.css"

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Info">
                Hello, {localStorage.getItem('my_name')}
            </div>
        );
    }
}