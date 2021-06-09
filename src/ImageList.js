import React, { Component } from 'react'
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
        return (
            <div className="data">
                {this.props.data.map(item =>
                    <ImageItem
                    url={item.url}
                    title={item.title}
                    desc={item.description}
                    keyword={item.keyword}
                    horns={item.horns}
                    />)}
            </div>
        )
    }
}