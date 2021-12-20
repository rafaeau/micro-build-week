import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'


export default function NewsList() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=football&apiKey=48fa8b968da1414895a50b68a45ab365')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
    }, [])
    return (
        <div>
            {articles.map(article => {
                return (
                    <NewsItem
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        date={article.publishedAt}
                        author={article.author}
                        content={article.content}
                    />
                )
            })}
        </div>
    )
}
