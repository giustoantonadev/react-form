import { useState } from "react"

const articlesList = [
    {
        id: 1,
        title: 'Introduzione a React',
        text: 'testo articolo React'
    },
    {
        id: 2,
        title: 'Come funziona lo stato in React',
        text: 'testo articolo stato React'

    },
    {
        id: 3,
        title: 'Gestire eventi nei componenti',
        text: 'testo articolo eventi componenti React'
    },
    {
        id: 4,
        title: 'Differenza tra props e state',
        text: 'testo articolo differenza props e state React'
    },
    {
        id: 5,
        title: 'Creare il primo blog con React',
        text: 'testo articolo primo blog creato usando React'
    }
];

export default function AppList() {

    const [articles, setArticles] = useState(articlesList)

    return (

        <div className="container">

            <div className="card">
                <ul className="list-group" >
                    <h1 className="text-center">Articles</h1>
                    {articles.map(article => (
                        <li key={article.id} className="list-group-item d-flex justify-content-between" >
                            {article.title}
                            <button className="badge text-bg-warning rounded-pill" >DELETE</button>
                        </li>
                    ))}
                </ul >
            </div>
        </div>
    )
}