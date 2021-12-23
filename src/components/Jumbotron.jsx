import { Component } from 'react'

class Jumbotron extends Component {
    state = {
        loading: true,
        comments: []

    }

    componentDidMount = async () => {
        try {
            let response = await fetch("https://newsapi.org/v2/everything?q=robert-Lewandowski&top-headlines?country=au&apiKey=f7c47b6922c6434eb7afbb73428ffb90")
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
            <div className="jumbotron jumbotron-fluid">

                {this.state.loading ? "loading" :
                    <div className='d-flex'>
                        <div className="col-6 ml-3">
                            <h1 id="jumboTitle"><i><b>{this.state.comments[this.props.article].title}</b></i></h1>

                            <div id="jumboContent" dangerouslySetInnerHTML={{ __html: this.state.comments[this.props.article].content }}></div>

                            <p className='pt-3'><b>Continue reading...</b></p>
                        </div>
                        <div className="col-6 mr-3">
                            <img className="card-img-right flex-auto d-none d-lg-block"
                                alt="Thumbnail"
                                style={{ width: '525px', height: '250px', objectFit: 'cover' }}
                                src={this.state.comments[this.props.article].urlToImage} />
                        </div>
                    </div>
                }
            </div>


        )
    }
}

export default Jumbotron

/* class Jumbotron extends Component {

    state = {
        comments: []
    }

    componentDidMount = () => {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=f7c47b6922c6434eb7afbb73428ffb90")
        .then(response => response.json())
        .then(comments => {
            console.log(comments)
            this.setState({
                comments: comments.articles
            })
            console.log(this.state.comments[0].content)
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="mx-5">
                    <h1><i>Fluid jumbotron</i></h1>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dignissimos blanditiis voluptas quos unde, earum illum in. Molestiae, consequuntur quas? Inventore nihil quasi nisi eum consequatur numquam ea vitae optio?
                    </p>
                    <b>Continue reading...</b>
                </div>
            </div>
        )
    }
} */