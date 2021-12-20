import React from 'react'
import './style.css'

export default function MyAbout() {
    return (
        <div className="mr-4">
            <div className="container about-container px-4 py-3">
                <h3 className="about-sec">About</h3>
                <p className='text-sec'>Etiam porta <span>sem malesuada magna</span> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>

            <div>
                <h3 className="about-sec pl-4 mt-4">Archives</h3>
                <p className="pl-4 mb-0"><a href="#">March 2014</a></p>
                <p className="pl-4 mb-0"><a href="#">February 2014</a></p>
                <p className="pl-4 mb-0"><a href="#">October 2014</a></p>
                <p className="pl-4 mb-0"><a href="#">January 2014</a></p>
                <p className="pl-4 mb-0"><a href="#">April 2014</a></p>
                <p className="pl-4 mb-0"><a href="#">October 2014</a></p>
                <p className="pl-4 mb-0"><a href="#">June 2014</a></p>
                <p className="pl-4 mb-0"><a href="#">August 2014</a></p>
                <p className="pl-4 mb-0"><a href="#">September 2014</a></p>
                <p className="pl-4 mb-0"><a href="#">October 2014</a></p>
                <p className="pl-4 mb-0"><a href="#">March 2014</a></p>
                <p className="pl-4 mb-0"><a href="#">January 2014</a></p>
            </div>
            <div>
                <h3 className="about-sec pl-4 mt-4">Elsewhere</h3>
                <p className="pl-4 mb-0"><a href="#">GitHub</a></p>
                <p className="pl-4 mb-0"><a href="#">Twitter</a></p>
                <p className="pl-4 mb-0"><a href="#">Facebook</a></p>
            </div>
        </div>
    )
}
