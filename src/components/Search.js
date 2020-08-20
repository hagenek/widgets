import React, { useState, useEffect }from "react";
import axios from "axios";

const Search = () =>{

    const [term, setTerm] = useState("programming");
    const [results, setResults] = useState([]);
    const [unbouncedTerm, setBouncedTerm] = useState("programming");
   // "en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=programming"


   useEffect(() => {
       const timeoutId = setTimeout(() => {
           setBouncedTerm(term);
       }, 1000)
       return () => {
           clearTimeout(timeoutId)
       }

   }, [term])

    useEffect(() => {
        const search = async () =>{
            const { data }= await axios.get("http://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: unbouncedTerm
                }
            });
            setResults(data.query.search);
        };
            search();
    }, [unbouncedTerm])

    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                        <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
                </div>
                    <div className="content">
                        <div className="header">{result.title}</div>
                        <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                    </div>
                </div>
                )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input onChange={e => setTerm(e.target.value)} className="input"></input>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search; 