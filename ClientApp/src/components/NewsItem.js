import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { Title, Description, ImageUrl, NewsUrl } = this.props; // way of using props in class based component.
        return (
            <div className="my-3">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={ImageUrl} className="card-img-top" alt="" />  {/*way of defining/calling props in class based component. */}
                    <div className="card-body">
                        <h5 className="card-title">{Title}</h5>
                        <p className="card-text">{Description}</p>
                        <a href={NewsUrl} target="_blank" class="btn btn-sm btn btn-primary">Click Here..</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem