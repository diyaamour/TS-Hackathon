import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Form() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);


    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleBodyChange = (value) => {
        setBody(value);
        // console.log("body " + value);
    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        // console.log('Selected file:' + file); // Check if the file is logged correctly
        setImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bodyWithoutPTags = body.replace(/<\/?p>/g, '');

        const formData = new FormData();
        formData.append('title', title);
        formData.append('body', bodyWithoutPTags);
        formData.append('image', image);

        try {
            await axios
                .post('http://localhost:8000/api/reviews', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                    setSubmitSuccess(true);
                    setTitle('');
                    setBody('');
                    setImage(null);
                } catch(err) {
                    console.log(err);
                    setSubmitError('An error occurred while submitting the form.');
                    setSubmitting(false);
                };

        };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text"
                    name="title"
                    value={title}
                    onChange={handleTitleChange}
                />
            </div>
            <div>
                <label htmlFor="body">Body:</label>
                <ReactQuill value={body} onChange={handleBodyChange} />
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input type='file'
                    id='image'
                    name='image'
                    onChange={handleImageChange}
                />
            </div>
            <button type='submit'  >
                Submit
            </button>
            {submitError && <p>{submitError}</p>}
            {submitSuccess && <p>Form submitted successfully!</p>}

        </form>
    );
}

export default Form;
