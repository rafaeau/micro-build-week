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
                        <Card orientation="horizontal" className="flex-md-row mb-4 box-shadow">
                            <Card.Body className="row d-flex flex-column align-items-start" style={{ display: "flex", justifyContent: "around" }}>
                                <div className="col-8">
                                    <strong className="d-inline-block mb-2 text-primary">Australia</strong>
                                    <h3 className="mb-0">
                                        <h5 id="featuredTitle">{this.state.comments[this.props.article].title}</h5>
                                    </h3>
                                    <Card.Text muted>{format(parseISO(this.state.comments[this.props.article].publishedAt), 'dd/mm/yyyy HH:mm')}</Card.Text>
                                    <p className="card-text mb-auto"><div id="featuredContent" dangerouslySetInnerHTML={{ __html: this.state.comments[this.props.article].content }}></div></p>
                                    <a href="#">Continue reading</a>
                                </div>
                            </Card.Body>
                            <div className="col-4">
                            <Card.Img width="300px" height="300px" style={{objectFit: "cover"}}
                                className="card-img-right flex-auto d-none d-md-block"
                                src={this.state.comments[this.props.article].urlToImage} />
                            </div>
                        </Card>
            }
            </div>
        )
    }
}

export default SingleFeaturedPost