import React from 'react'
import { Button } from 'react-bootstrap'
import { parseISO, format } from 'date-fns'



export default function MyPosts({ title, description, url, date, author, content, urlToImage }) {
    return (
        <div className="single-news-list container">
            <div>
                <h1 className="mb-0 post-title" style={{ fontWeight: "bolder" }}>{title}</h1>
                <p className="mb-2 text-muted posted-date"> {format(parseISO(date), 'MMMM do yyyy | HH:mm')} by <a className="post-author" href={url}>{author}</a></p>

                {/* {format(parseISO(date), 'MMMM do yyyy | HH:mm')} */}
                <div className="img-description pt-2">
                    <img style={{ width: "200px", objectFit: "cover" }} src={urlToImage}></img>
                    <p className="post-description px-5">{description}</p>
                </div>
                <hr></hr>

                <p className="post-content">{content}</p>
            </div>



            <div>
                <Button variant="outline-primary py-2 px-3 mr-3" disabled style={{ borderRadius: "40px" }}>Read more</Button>
                <Button variant="outline-secondary py-2 px-3" style={{ borderRadius: "40px" }}>Close</Button>
            </div>
        </div>
    )
}
