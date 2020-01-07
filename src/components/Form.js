import React from 'react'
import { useFormik } from 'formik';

const Form = (addIdea) => {

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            location: ''
        },
        onSubmit: values => {
            fetch("http://greening.louis.lol/api/idea", {
                method: "POST",
                body: JSON.stringify(values)
            })
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input onChange={formik.handleChange} value={formik.values.title} name="title" />
                <input onChange={formik.handleChange} value={formik.values.description} name="description" />
                <input onChange={formik.handleChange} value={formik.values.location} name="location" />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Form
