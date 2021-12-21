// import React, { Component } from 'react'
// import { parseISO, format } from 'date-fns'
// import ReadMoreReact from 'read-more-react';

// export default class NewsItem extends Component {
//     render() {
//         return (
//             <div className="ml-4">

//                 <div>
//                     <h1 className="mb-0 post-title" style={{ fontWeight: "bolder" }}>{this.props.title}</h1>

//                     <p className="mb-2 text-muted posted-date"> {format(parseISO(this.props.date), 'MMMM do yyyy | HH:mm')} by <a className="post-author" href={this.props.url}>{this.props.author}</a></p>

//                     <div className="img-description pt-2">
//                         <img style={{ width: "200px", objectFit: "cover" }} src={this.props.urlToImage}></img>
//                         <div className="px-5 post-description" dangerouslySetInnerHTML={{ __html: this.props.description }}>

//                         </div>
//                         {/* <p className="post-description px-5">{description}</p> */}
//                     </div>

//                     <hr></hr>
//                     <div className="post-content" dangerouslySetInnerHTML={{ __html: this.props.content }}>

//                     </div>
//                     <hr></hr>
//                     <ReadMoreReact
//                         text={this.props.content}
//                         min={1000}
//                         ideal={1900}
//                         max={3000}
//                     />


//                 </div>
//             </div >
//         )
//     }
// }

import React from 'react'
import { parseISO, format } from 'date-fns'
import ReadMoreReact from 'read-more-react';

export default function NewsItem({ title, description, url, date, author, content, urlToImage }) {
    const MAX_LENGTH = 250
    return (
        <div className="ml-4">

            <div>
                <h1 className="mb-0 post-title" style={{ fontWeight: "bolder" }}>{title}</h1>

                <p className="mb-2 text-muted posted-date"> {format(parseISO(date), 'MMMM do yyyy | HH:mm')} by <a className="post-author" href={url}>{author}</a></p>

                <div className="img-description pt-2">
                    <img style={{ width: "200px", objectFit: "cover" }} src={urlToImage}></img>
                    <div className="px-5 post-description" dangerouslySetInnerHTML={{ __html: description }}>

                    </div>
                    {/* <p className="post-description px-5">{description}</p> */}
                </div>

                <hr></hr>
                <div className="post-content" dangerouslySetInnerHTML={{ __html: content }}>

                </div>
                <hr></hr>
                <ReadMoreReact
                    text={content}
                    min={200}
                    ideal={250}
                    max={300}
                    readMoreText="Read more"
                />
                {/* <p className="post-content">{content}</p> */}
            </div>
        </div >
    )
}
