import React from 'react'
import Navbar from '../navigation/Navbar';
import logo from '../../images/heroImage.jpg';
import Footer from '../footer/Footer';
import Form from '../../components/Form';


function CreateIdea() {

    const mainImage = {
        height:"100vh",
        backgroundImage:`url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }

    return (
        
        <div>
            <Navbar />
            {/* <Form /> */}
            <Footer />
            <div style={mainImage}>
                <Form />
            </div>
            
        </div>

        
    )
}

export default CreateIdea;
