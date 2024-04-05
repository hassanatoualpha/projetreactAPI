import { useState, useEffect } from "react";
import axios from 'axios';
import CardTailwin from "./CardTailwin";


const PhotoComponent = () => {
    const [photos, setphotos] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                console.log(response.data)
                setphotos(response.data);
            })
            .catch(error => {
                console.log(error)
            });
    }, []);
    return (
        <div className="container-fluid">
            <h1 className="mt-5 mb-4">Photos</h1>
            <div className="row">
                {
                    photos.map(photo => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={photo.id} >
                            {/* <div className="card">
                                <img  src={photo.thumbnailUrl} className="card-img-top" alt={photo.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{photo.title} </h5>
                                    <p className="card-text">ID:.{photo.id} </p>

                                </div> 
                            </div>*/}
                            <CardTailwin photo={photo}></CardTailwin>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default PhotoComponent;
