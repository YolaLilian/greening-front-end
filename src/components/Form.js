import React from 'react'
import { useFormik } from 'formik';

const Form = (addIdea) => {

    const formik = useFormik({
        initialValues: {
            title: '',
            subject: '',
            description: ''
        },
        onSubmit: values => {
            fetch("http://greening.louis.lol/api/ideas", {
                method: "POST",
                body: JSON.stringify(values),
                isSubmitting: true
            })
        },
    });

    function handleClick() {
        console.log("I was clicked")
    }

    return (
        <div>
            <h2 style={myStyle}>Voeg hier je idee toe!</h2>
            <form onSubmit={formik.handleSubmit} style={myStyle}>
                <input onChange={formik.handleChange} value={formik.values.title} name="title" placeholder="title" />
                <input onChange={formik.handleChange} value={formik.values.subject} name="subject" placeholder="subject" />
                <input onChange={formik.handleChange} value={formik.values.description} name="description" placeholder="description"/>
                <button type="submit" onClick={handleClick}>submit</button>
            </form>
        </div>
    )
}

const myStyle = {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    padding: "30px"
}

export default Form
