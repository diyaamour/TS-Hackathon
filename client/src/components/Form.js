import React, { useState, useEffect } from 'react';
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
    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    // re-use after setting up server side 
    // useEffect(() => {
    //     const handleSubmit = async () => {
    //         if (!submitting) return;

    //         // Create form data to send
    //         const formData = new FormData();
    //         formData.append('title', title);
    //         formData.append('body', body);
    //         formData.append('image', image);

    //         try {
    //             // Send form data to the server
    //             const response = await axios.post('/api/submit', formData);

    //             // Handle success or display an appropriate message
    //             console.log(response.data);
    //             setSubmitSuccess(true);
    //         } catch (error) {
    //             // Handle error or display an appropriate message
    //             console.error(error);
    //             setSubmitError('An error occurred while submitting the form.');
    //         } finally {
    //             setSubmitting(false);
    //         }
    //     };

    //     if (submitting) {
    //         handleSubmit();
    //     }
    // }, [submitting, title, body, image]);

    // const handleSubmitClick = (e) => {
    //     e.preventDefault();
    //     setSubmitting(true);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create form data to log
        const formData = {
            title,
            body,
            image,
        };

        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title"
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
                <input type='file' id='image' onChange={handleImageChange} />
            </div>
            <button type='submit' >
                Submit
            </button>
            
        </form>
    );
}

export default Form;

// onClick={handleSubmitClick}
//             {submitError && <p>{submitError}</p>}
//             {submitSuccess && <p>Form submitted successfully!</p>}