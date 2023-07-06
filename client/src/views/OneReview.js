import axios from "axios";
import { useEffect, useState } from "react";
import NavigationBar from '../components/NavBar';
import { useParams, useNavigate } from "react-router-dom";


export const OneReview = (props) => {

    const { id } = useParams();
    const [review, setReview] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/reviews/${id}`)
            .then((res) => {
                setReview(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    if (review === null) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    const { teacher, organization, title, body, image } = review;
    return (
        <>
            <NavigationBar />
            <div className="w-50 mx-auto text-center mt-5">
                <div className="shadow mb-4 rounded border p-4" style={{textAlign: 'center'}}>
                    <h1 className='form-title'>Title: {title}</h1><br />
                    <h6 className='form-title'>Teacher Name: <span style={{ color: 'black', fontWeight: 'normal' }}>{teacher}</span> </h6>
                    <h6 className="form-title">
                        Organization: <span style={{ color: 'black', fontWeight: 'normal'  }}>{organization}</span>
                    </h6>
                    <p className="form-title">Body: <span style={{color: "black", fontWeight: "normal"}}>{body}</span></p>
                    <h6 className='form-title'>Attachments: </h6>
                    {image && image.url && <img src={image.url} alt="image" style={{width: 400}}/>}
                </div>
            </div>
        </>
    )
}