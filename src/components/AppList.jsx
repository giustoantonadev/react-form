import { useState } from "react"
//list of articles
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

    function deleteArticle(i){
        const filteredArticle = articles.filter((article, index)=> index != i)
        setArticles(filteredArticle)
    }

    return (

        <div className="container p-5">
            <div className="card bg-secondary text-center p-5">
                <h1 className="text-center text-white">Articles</h1>
                <form onSubmit={submitArticle}>
                    <input className="form-control text-center" type='text' value={newArticle} onChange={e => setNewArticle(e.target.value)} placeholder="New article here..." />
                    <button type='submit' className="btn btn-warning m-2">Add New Article</button>
                </form>

                <ul className="list-group" >
                    {articles.map((article, index) => (
                        <li key={index} className="list-group-item fs-3 d-flex justify-content-between m-1 bg-primary text-warning border-0" >
                            {article}
                            <button
                                className="badge text-warning text-bg-danger border-0 rounded-pill"
                                onClick={()=> deleteArticle(index)}
                            >DELETE
                            </button>
                        </li>
                    ))}
                </ul >

            </div>
        </div>
    )
}