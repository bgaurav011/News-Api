import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
   let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl} className='card-iteam-top' alt="..."/>
        <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <p className="card-description ">{description}</p>
            <a href={newsUrl} target= "_blank"  className="btn btn-sm btn-primary">Read More</a>
        </div>
         </div>
     </div>
    )
  }
}

export default NewsItem
