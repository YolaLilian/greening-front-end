import React from 'react'
import { useFormik } from 'formik';

const Form = (addIdea) => {
    // constructor() {
    //     super()
    //     this.state = {
    //       title: "Greening",
          
    //     }

    // loadData() {
    //     <h1>{this.state.title}</h1>
    //     this.setState( {title: "Je idee is opgeslagen!"})
    //   }

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            location: ''
        },
        onSubmit: values => {
            fetch("http://greening.louis.lol/api/ideas", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                }
            })
        },
    });

    const myStyle = {
        display: "flex",
        justifyContent: "center",
        // alignSelf: "center",
        flexDirection: "row",
        padding: "30px",
    }

    const formInput = {
        borderStyle: "none",
        backgroundColor: "#F3F3F3",
        width: "80%",
        flexDirection: "column",
        display: "flex",
        margin: "10px"
    }

    const myStyleDiv = {
        backgroundColor: "white",
        width: "50vw",
        display: "flex",
        alignSelf: "center",
    }

    return (
        <div style={myStyleDiv}>
            <form onSubmit={formik.handleSubmit} style={myStyle}>
                <input onChange={formik.handleChange} style={formInput} value={formik.values.title} name="title" placeholder="title"/>
                <input onChange={formik.handleChange} style={formInput} value={formik.values.description} name="description" placeholder="description"/>
                <input onChange={formik.handleChange} style={formInput} value={formik.values.subject} name="subject" placeholder="subject"/><br></br>
                <button onClick={ () => this.loadData() } type="submit">submit</button>
            </form>
        </div>
    )
}

export default Form
