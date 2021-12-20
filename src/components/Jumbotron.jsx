import { Component } from 'react'

class Jumbotron extends Component {
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

        catch(err) {console.log(err)}
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="mx-5">
                    <h1><i>Fluid jumbotron{/* {this.state.comments[3].title} */}</i></h1>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dignissimos blanditiis voluptas quos unde, earum illum in. Molestiae, consequuntur quas? Inventore nihil quasi nisi eum consequatur numquam ea vitae optio?
                    {/* {this.state.comments[3].content} */}
                    </p>
                    <b>Continue reading...</b>
                </div>
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