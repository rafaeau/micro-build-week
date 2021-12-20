import { Component } from 'react'
import { Card } from 'react-bootstrap'

class SingleFeaturedPost extends Component {
    state = {
        comments: []
    }

    componentDidMount = async () => {
        try {
            let response = await fetch("https://newsapi.org/v2/top-headlines?country=au&apiKey=f7c47b6922c6434eb7afbb73428ffb90")
            let comments = await response.json()
            this.setState({
                comments: comments.articles
            })
            console.log(this.state.comments)
            console.log(this.state.comments[3].content)
        }

        catch (err) { console.log(err) }
    }

    render() {
        return (
            <div nameClass="row col-md-6">
            <Card orientation="horizontal" nameClass="flex-md-row mb-4 box-shadow h-md-250">
                <Card.Body nameClass="col-8 d-flex flex-column align-items-start">
                <strong nameClass="d-inline-block mb-2 text-primary">World</strong>
                        <h3 nameClass="mb-0">
                            <h2>Featured post</h2>
                        </h3>
                        <div nameClass="mb-1 text-muted">Nov 12</div>
                        <p nameClass="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#">Continue reading</a>
                </Card.Body>
                <Card.Img width="200px" height="250px" nameClass="col-4 card-img-right flex-auto d-none d-md-block" src="http://placehold.it/200x250"/>
            </Card>
            </div>
        )
    }
}

export default SingleFeaturedPost