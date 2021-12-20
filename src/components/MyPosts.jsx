import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './style.css'


// 48fa8b968da1414895a50b68a45ab365
export default class MyPosts extends Component {
    render() {
        return (
            <div className="ml-4">
                <div>
                    <h1 className="about-sec">From the Firehose</h1>
                    <hr></hr>
                </div>
                <div>
                    <h1 className="mb-0" style={{ fontWeight: "bolder" }}>Sample blog post</h1>
                    <p className="mb-2 text-muted">January 1, 2014 by <a href="#">Mark</a></p>


                    <p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
                </div>



                <div>
                    <Button variant="outline-primary py-2 px-3 mr-3" style={{ borderRadius: "40px" }}>Older</Button>
                    <Button variant="outline-secondary py-2 px-3" disabled style={{ borderRadius: "40px" }}>Newer</Button>
                </div>
            </div>
        )
    }
}
