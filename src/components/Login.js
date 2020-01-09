import React from 'react'
import { useFormik } from 'formik';

const Form = (addIdea) => {

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: values => {
            console.log(values)
            fetch("http://greening.louis.lol/api/users", {
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
        // border: "2px solid red",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
    }
    const myStyleItem = {
        // border: "2px solid blue",
        justifyContent: "center",
        flexDirection: "center",
        alignItems: "center",
    }

    return (
        <div style={myStyle}>
            <form onSubmit={formik.handleSubmit} style={myStyleItem}>
                <input onChange={formik.handleChange} value={formik.values.username} name="username" placeholder="username"/>
                <input onChange={formik.handleChange} value={formik.values.password} type="password" name="password" placeholder="password" />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Form
