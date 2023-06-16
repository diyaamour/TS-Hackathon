import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Form() {
    const [teacher, setTeacher] = useState('');
    const [organization, setOrganization] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleTeacherChange = (e) => {
        setTeacher(e.target.value);
    }
    const handleOrganizationChange = (e) => {
        setOrganization(e.target.value);
    }
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
        formData.append('teacher', teacher);
        formData.append('organization', organization);
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
            setTeacher('');
            setOrganization('');
            setTitle('');
            setBody('');
            setImage(null);
            setTeacher('');
            setOrganization('');

        } catch (err) {
            console.log(err);
            setSubmitError('An error occurred while submitting the form.');
            setSubmitting(false);
        };

    };

    return (
        <div className='box'>
            <h1 className='form-title'>Share Your Success and Win</h1>
            <div className='description'>
                <p >Calling all teachers using CC studies in their classrooms! Participate in our competition by submitting your implementation entries via MY TS account, complete with photo documentations. This opportunity is open to both CC cloud and CC print users, including Preschool and IT2 CC and Cloud. Showcase your interest areas, student work, what we know charts, what we want to know charts, question of the day, and end of study celebration for a chance to inspire others and win exciting prizes!</p>
            </div>
            <div className='form'>
                <form onSubmit={handleSubmit} className='form-box' >
                    <div className="userForm">
                        <div className="form-group" id="formGroupExampleInput">
                            <label htmlFor="teacher">Teacher Name:</label>
                            <input type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Teacher Name"
                                onChange={handleTeacherChange} />
                        </div>
                        <div class="form-group" id="formGroupExampleInput-2">
                            <label htmlFor="organization">Organization Name:</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Organization Name"
                                onChange={handleOrganizationChange} />
                        </div>
                    </div>
                    <div class="form-group" >
                        <label htmlFor="title">Title:</label>
                        <input type="text"
                            className="form-control"
                            name="title"
                            id="title-input"
                            value={title}
                            onChange={handleTitleChange}
                            placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Body:</label>
                        <ReactQuill value={body} onChange={handleBodyChange} id="wysiwyg" />
                    </div>
                    <div className="form-group" id="image-attachment">
                        <label htmlFor="image">Image: </label>
                        <input type="file" class="form-control"
                            id='image' name='image'
                            onChange={handleImageChange} />
                    </div>
                    <p className="text-xs">By clicking the submit button below I agree that Teaching Strategies may collect my personal information to identify me and provide me with marketing information, company updates, information about events, and product information and as described in the <a href="https://teachingstrategies.com/privacy-policy/" target="_blank" style={{ color: "#009cc0" }}>Privacy Policy</a>.</p>
                    <div className="form-container">
                        <button id="form-submit-btn">Submit</button>
                        <div className="message-container">
                            {submitError && <p className="error-message">{submitError}</p>}
                            {submitSuccess && <p className="success-message">Form submitted successfully!</p>}
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Form;

{/* <Link to="/entries" style={{ textDecoration: 'none' }}>
                        </Link> */}