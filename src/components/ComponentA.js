import React, { Component } from 'react';
import './ComponentA.css'
class ComponentA extends Component {
    render() {
        const { onExtend } = this.props
        return (
            <div className="divA">
                <div className="header">
                    <h1>ComponentA</h1>
                    <input className="btnExtend" type="button" value="展开" onClick={onExtend}/>
                </div>
                <div className="content">
                    <p>ComponentA</p>
                    <p>ComponentA</p>
                    <p>ComponentA</p>
                </div>
            </div>
        );
    }
}

export default ComponentA;
