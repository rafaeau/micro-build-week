import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './style.css'


// 48fa8b968da1414895a50b68a45ab365
export default class MyPosts extends Component {
    render() {
        return (
            <div className="mx-5 single-news-list">
                <div>
                    <h1 className="about-sec">From the Firehose</h1>
                    <hr></hr>
                </div>
                <div>
                    <h1 className="mb-0 post-title" style={{ fontWeight: "bolder" }}>Sample blog post</h1>
                    <p className="mb-2 text-muted posted-date">January 1, 2014 by <a className="post-author" href="#">Mark</a></p>


                    <p className="post-description">This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>

                    <hr></hr>

                    <p className="post-content">This blog post shows a few different types of content that's supported and styled with Bootstrap.</p>
                </div>



                <div>
                    <Button variant="outline-primary py-2 px-3 mr-3" style={{ borderRadius: "40px" }}>Older</Button>
                    <Button variant="outline-secondary py-2 px-3" disabled style={{ borderRadius: "40px" }}>Newer</Button>
                </div>
            </div>
        )
    }
}
