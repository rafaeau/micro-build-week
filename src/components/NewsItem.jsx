import React from 'react'
import { parseISO, format } from 'date-fns'

export default function NewsItem({ title, description, url, date, author, content, urlToImage }) {
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
                <div className="post-content" dangerouslySetInnerHTML={{ __html: content.substring(0, content.length - 14) }}>

                </div>
                <hr></hr>
            </div>
        </div >
    )
}
