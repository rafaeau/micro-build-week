import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MyPosts from './MyPosts'

export default function SinglePostList() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=robert-Lewandowski&apiKey=48fa8b968da1414895a50b68a45ab365')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
    }, [])
    return (
        <div>
            {articles.slice(0, 1).map(article => {
                return (
                    <>
                        <MyPosts key={article.description}
                            title={article.title}
                            description={article.description}
                            url={article.url}
                            date={article.publishedAt}
                            author={article.author}
                            content={article.content}
                            urlToImage={article.urlToImage}

                        />
                    </>

                )
            })}
        </div>
    )
}
