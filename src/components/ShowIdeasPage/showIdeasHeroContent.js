import React from 'react'; 

const ShowIdeasHeroContent = () => {
    return (
        <div className="showideasherocontent">
            <h1>{this.state.title}</h1>
            <button className="button" onClick={ () => this.loadData() }>Maak een idee aan</button>
        </div>
    )
};

export default ShowIdeasHeroContent;