import React from 'react'

export default function NewsItem({ title, description, url, date, author, content }) {
    return (
        <div className="ml-4">
            <div>
                <h1 className="mb-0 post-title" style={{ fontWeight: "bolder" }}>{title}</h1>
                <p className="mb-2 text-muted posted-date">{date} by <a className="post-author" href={url}>{author}</a></p>


                <p className="post-description">{description}</p>

                <hr></hr>

                {/* <p className="post-content">{content}</p> */}
            </div>
        </div>
    )
}
