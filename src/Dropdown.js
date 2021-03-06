import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <select onChange={this.props.handleChange}>
                <option value="">All</option>
                {this.props.options.map(optionString => <option value={optionString}>{optionString}</option>)}
            </select>
        )
    }
}
