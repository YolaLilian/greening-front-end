import React from "react";
import { useFormik } from "formik";
import { Redirect } from "react-router-dom";

const Form = addIdea => {
    const formik = useFormik({
        initialValues: {
            title: "",
            subject: "",
            description: ""
        },
        onSubmit: values => {
            fetch("http://greening.louis.lol/api/ideas", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
            return <Redirect to="/ideas" />;
        }
    });

    const myStyleDiv = {
        backgroundColor: "white",
        width: "50vw",
        display: "flex",
        alignSelf: "center",
        justifyContent: "center"
    };

    const myStyle = {
        padding: "30px"
    };

    const formInput = {
        borderStyle: "none",
        backgroundColor: "#F3F3F3",
        width: "80%",
        flexDirection: "column",
        margin: "10px",
        padding: "10px 15px",
        fontSize: "20px",
        fontFamily: "Open Sans",
        borderRadius: "25px"
    };

    const h1_style = {
      color: "#3ba755",
      padding: "0 30px"
    };

    const labelStyle = {
      fontSize: "20px",
      fontFamily: "Open Sans"
    }

    return (
        <div style={myStyleDiv}>
            <h1 style={h1_style}>Idee creëeren</h1>
            <div>
                <form onSubmit={formik.handleSubmit} style={myStyle}>
                    <label style={labelStyle}>Titel van idee</label>
                    <input 
                      onChange={formik.handleChange} 
                      style={formInput} 
                      value={formik.values.title} 
                      name="title" 
                      placeholder="titel" 
                    />
                    <br />
                    <label style={labelStyle}>Onderwerp van idee</label>
                    <input 
                      onChange={formik.handleChange} 
                      style={formInput} 
                      value={formik.values.subject} 
                      name="subject" 
                      placeholder="onderwerp" 
                    />
                    <br></br>
                    <label style={labelStyle}>Beschrijving van idee</label>
                    <input
                      onChange={formik.handleChange}
                      style={formInput}
                      value={formik.values.description}
                      name="description"
                      placeholder="beschrijving"
                    />
                    <button type="submit">Verzenden</button>
                </form>
            </div>
        </div>
    );
};

export default Form;
