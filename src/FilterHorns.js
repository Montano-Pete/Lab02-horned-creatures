import React, { Component } from 'react'

export default class FilterHorns extends Component {
    render() {
        return (
        <label> Sort by number of horns!
            <select onChange={this.props.dataHorns}>
                <option value="">View All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </label>
        )
    }
}
