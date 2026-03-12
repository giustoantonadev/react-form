import { useState } from "react"

const articlesList = [
    'Introduzione a React',
    'Come funziona lo stato in React',
    'Gestire eventi nei componenti',
    'Differenza tra props e state',
    'Creare il primo blog con React'
];

export default function AppList() {

    const [articles, setArticles] = useState(articlesList)
    const [newArticle, setNewArticle] = useState('')

    function submitArticle(e) {
        e.preventDefault()
        setArticles([newArticle, ...articles])
    }

    return (

        <div className="container">
            <div className="card text-center p-5">
                <h1 className="text-center">Articles</h1>
                <form onSubmit={submitArticle}>
                    <input type='text' value={newArticle} onChange={e => setNewArticle(e.target.value)} />
                    <button type='submit' className="btn btn-primary m-1">Add New Article</button>
                </form>
                <ul className="list-group" >
                    {articles.map((article,index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between" >
                            {article}
                            <button className="badge text-bg-warning rounded-pill" >DELETE</button>
                        </li>
                    ))}
                </ul >
            </div>
        </div>
    )
}