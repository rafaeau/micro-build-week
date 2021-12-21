import React, { Component } from 'react'
import NewsList from './NewsList'
import WarningSign from './WarningSign'

export default class SinglePostList extends Component {
    state = {
        newsList: [],
        errorHandle: false,
        newsTitle: 'Sample blog post'
    }

    newsDidMount = () => {
        this.getNews()
    }


    getNews = async () => {
        try {
            let APIRes = await fetch('https://newsapi.org/v2/everything?q=robert-Lewandowski&apiKey=48fa8b968da1414895a50b68a45ab365')


            if (APIRes.ok) {

                let news = await APIRes.json()
                this.setState({
                    newsList: [...news],
                    isLoading: false,
                    remainingNews: news.length
                })
            } else {
                this.setState({
                    newsList: [],
                    isLoading: false,
                    errorHandle: true

                })

            }
        } catch (err) {
            console.log(err)
        }


    }

    newsDidUpdate(prevProps) {
        if (this.props.article.title !== prevProps.article.title) {
            this.getNews()
            this.setState({
                newsList: [...this.state.newsList],
                newsTitle: this.props.article.title,
                errorHandle: false,
            })
        }
    }



    render() {
        return (
            <div className="ml-4" id='single-list'>
                {this.state.errorHandle && <WarningSign variant="danger" text="Sorry try again in a bit"></WarningSign>}

                <div>
                    <h1 className="mb-0 post-title" style={{ fontWeight: "bolder" }}>{this.props.title}</h1>

                    <p className="mb-2 text-muted posted-date">{this.props.publishedAt} by <a className="post-author" href={this.props.url}>{this.props.author}</a></p>

                    <div className="img-description pt-2">
                        <img style={{ width: "200px", objectFit: "cover" }} src={this.props.urlToImage}></img>
                        <p className="post-description px-5">{this.props.description}</p>
                    </div>
                    <hr></hr>
                    <p className="post-content">{this.props.content}</p>
                </div>
            </div >
        )
    }
}
