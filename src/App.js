import React from 'react';
import Accordion from "./components/Accordion"
import Search from "./components/Search"

const items = [
  {
    title: "What is react?",
    content: "React is a frontend framework"
  },
  {
    title: "Why use react?",
    content: "React is a favorite framework for engineers"
  },
  {
    title: "How do you use react?",
    content: "Nobody fucking knows"
  },
]

export default () =>{

  return (
  <div className="ui container">
    <br />
    <Search />
  </div>
  )}
