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
            <div nameClass="col-md-6">
                <Card orientation="horizontal" nameClass="flex-md-row mb-4 box-shadow h-md-250">
                    <Card.Body nameClass="row d-flex flex-column align-items-start" style={{ display: "flex", justifyContent: "around" }}>
                        <div nameClass="col-8">
                            <strong nameClass="d-inline-block mb-2 text-primary">World</strong>
                            <h3 nameClass="mb-0">
                                <h2>Featured post</h2>
                            </h3>
                            <Card.Text muted>Nov 12</Card.Text>
                            <p nameClass="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <a href="#">Continue reading</a>
                        </div>
                        <div nameClass="col-4">
                            <Card.Img width="150px" height="200px" nameClass="card-img-right flex-auto d-none d-md-block" src="http://placehold.it/200x150" />
                        </div>
                    </Card.Body>

                </Card>
            </div>
        )
    }
}

export default SingleFeaturedPost