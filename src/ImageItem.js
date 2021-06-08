import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div className="card">
               <h2>{this.props.title}</h2>
               <img src={this.props.url} alt='' className="images"/>
               <p>{this.props.desc}</p>
               <p>Horns: {this.props.horns}</p>
            </div>
        )
    }
}
