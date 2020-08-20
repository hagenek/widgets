import React, { useState } from 'react';
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import Dropdown from "./components/Dropdown"
import Greed from "./components/Greed"

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

const options = [
  {
    label: "Princely Red",
    value: "red"
  },
  {
    label: "A Shade of Blue",
    value: "blue"
  },
  {
    label: "Smashing Violet",
    value: "violet"
  }
]

export default () =>{

  const [selected, setSelected] = useState(options[0])

  return (
  <div className="ui container">
    <br />
    <Dropdown 
    options={options}
    selected={selected}
    onSelectedChange={setSelected}/>
  </div>
  )}
/*   return (
  <div className="ui container">
    <br />
    <Greed /> 
  </div>
  )} */
