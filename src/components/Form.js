import React from 'react'
import { useFormik } from 'formik';

const Form = (addIdea) => {



    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            subject: ''
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

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input onChange={formik.handleChange} value={formik.values.title} name="title" />
                <input onChange={formik.handleChange} value={formik.values.description} name="description" />
                <input onChange={formik.handleChange} value={formik.values.subject} name="subject" />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Form
