import React, { useEffect, useState } from 'react'
import cardlink from '../../../images/cardlink_bg.jpg';

const container = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignitems: "center",
  flexWrap: "wrap",
  margin: "150px 150px",
}

const cardlinkStyle = {
  backgroundImage:`url(${cardlink})`,
  backgroundSize: "cover",
  height:"225px",
  width: "175px",
  alignSelf: "center",
  padding: "30px",
  margin: "40px",
  margintop: "50px",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
}

const h3_style = {
  color: "white",
  fontSize: "20px",
}

 const IdeasCards = () => {
    const [ideas, setIdeas] = useState([])

    useEffect(() => {
                fetch("http://greening.louis.lol/api/ideas")
                .then(response => response.json())
                .then(data => setIdeas(data))
    },[])

    return (
      <div className="App">
        <div style={container}>
            {ideas.map((idea =>
              (
              <div className="cardlink" style={cardlinkStyle}>
              <h3 style={h3_style}>{idea.title}</h3>
              </div>
              )
            ))}
            {/* <div className="cardlink" style={cardlinkStyle}>
              <h3 style={h3_style}>Strand opruimen</h3>
            </div>
            <div className="cardlink" style={cardlinkStyle}>
              <h3 style={h3_style}>Vuurwerkafval opvegen</h3>
            </div>
            <div className="cardlink" style={cardlinkStyle}>
              <h3 style={h3_style}>Bomen planten in het Kralingse Bos</h3>
            </div>
            <div className="cardlink" style={cardlinkStyle}>
              <h3 style={h3_style}>Troep opvissen uit de rivier</h3>
            </div> */}
        </div>
      </div>
    )
}

export default IdeasCards