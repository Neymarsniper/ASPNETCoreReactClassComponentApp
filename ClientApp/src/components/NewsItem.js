import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageurl, newsurl } = this.props; // way of using props in class based component.
        return (
            <div className="my-3">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageurl} className="card-img-top" alt="" />  {/*way of defining/calling props in class based component. */}
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsurl} target="_blank" class="btn btn-sm btn btn-primary">Click Here..</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem