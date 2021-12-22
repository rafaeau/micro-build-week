import { Component } from 'react'
import { Card } from 'react-bootstrap'
import { parseISO, format } from 'date-fns'

class SingleFeaturedPost extends Component {
    state = {
        loading: true,
        comments: []
    }

    componentDidMount = async () => {
        try {
            let response = await fetch("https://newsapi.org/v2/top-headlines?country=au&apiKey=f7c47b6922c6434eb7afbb73428ffb90")
            let comments = await response.json()
            this.setState({
                comments: comments.articles,
                loading: false
            })
            console.log(this.state.comments)
            console.log(this.state.comments[3].content)
        }

        catch (err) { console.log(err) }
    }

    render() {
        return (
            <div className="col-md-6">
                {
                    this.state.loading ? "loading" :
                        <Card className="flex-md-row mb-4 box-shadow h-md-250">
                            <Card.Body className="d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2" style={{color: this.props.color}}>{this.props.region}</strong>
                                <h3 className="mb-0">
                                    <h5 id="featuredTitle">{this.state.comments[this.props.article].title}</h5>
                                </h3>
                                <Card.Text muted style={{color: 'rgb(140, 140, 140'}}>{format(parseISO(this.state.comments[this.props.article].publishedAt), 'dd/mm/yyyy HH:mm')}</Card.Text>
                                <p className="card-text mb-auto"><div id="featuredContent" dangerouslySetInnerHTML={{ __html: this.state.comments[this.props.article].content }}></div></p>
                                <a href="#">Continue reading</a>
                            </Card.Body>
                            <Card.Img
                                className="card-img-right flex-auto d-none d-lg-block"
                                alt="Thumbnail [200x250]"
                                style={{ width: '200px', height: '250px', objectFit: 'cover' }}
                                src={this.state.comments[this.props.article].urlToImage} />
                        </Card>
                }
            </div>
        )
    }
}

export default SingleFeaturedPost