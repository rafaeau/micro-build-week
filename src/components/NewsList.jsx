import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function NewsList() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-11-20&sortBy=publishedAt&apiKey=48fa8b968da1414895a50b68a45ab365')
            console.log(response)

        }
        getArticles()
    }, [])
    return (
        <div>

        </div>
    )
}
