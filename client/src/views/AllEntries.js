import axios from "axios";
import { useEffect, useState } from "react";
import NavigationBar from '../components/NavBar';
import { Link } from "react-router-dom";

export const AllEntries = (props) => {
    const [entries, setEntries] = useState([0]);

    useEffect(() => {
        axios 
            .get("http://localhost:8000/api/reviews")
            .then((res) => {
                setEntries(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    
    return (
        <>
        <NavigationBar />
        <div className="w-50 mx-auto text-center" style={{marginTop: "20px"}}>
        <h1 className='form-title'>All Submissions</h1>
                {entries.map((entry) => {
                    const { _id, teacher, organization, title, body, image } = entry;

                    return (
                        <div key={_id} className="shadow mb-4 rounded border p-4 mt-4">
                            <h3><Link to={`/reviews/${_id}`}>{title}</Link></h3>
                            <h6 style={{fontWeight:"bold"}}>By: {teacher} from {organization}</h6>
                        </div>
                    );
                })}
            </div>
            </>
    )
}