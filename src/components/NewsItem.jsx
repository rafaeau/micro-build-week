import React from 'react'
import './style.css'

export default function NewsItem({ title, description, url, date, author, content, urlToImage }) {
    return (
        <>
            <div className="ml-4" id='single-list'>

                <div>
                    <h1 className="mb-0 post-title" style={{ fontWeight: "bolder" }}>{title}</h1>

                    <p className="mb-2 text-muted posted-date">{date} by <a className="post-author" href={url}>{author}</a></p>

                    <div className="img-description pt-2">
                        <img style={{ width: "200px", objectFit: "cover" }} src={urlToImage}></img>
                        <p className="post-description px-5">{description}</p>
                    </div>




                    <hr></hr>

                    <p className="post-content">{content}</p>
                </div>
            </div >
        </>
    )
}
