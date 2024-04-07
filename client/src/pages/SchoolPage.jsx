import React, { useEffect, useState } from "react";
import './style/SchoolPage.css'
import Review from "../components/Review";
import {FaStar} from 'react-icons/fa'
import { useParams } from "react-router-dom";


const SchoolPage = () =>{

    const [data, setData] = useState([])
    const {id} = useParams()
   
    useEffect(() => { 
        fetch(`http://Server/getSchool.php?id=${id}`, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            },
        })
        .then(response => response.json())
        .then(result => setData(result))
        
    },[]);
    
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    
    const currentUrl = window.location.href
    
    return(
        
        <div class="container-fluid">
            <div class="row">
            <div className="school">
                 <div className="nameSchool"> 
                    <h2>{data.fullName}</h2>
                 </div>
                <p>Оценка: {data.rating}</p>
                <h2>Всего отызвов: {data.allView}</h2>
            </div>
            
            
            </div>
                <form action="http://Server/school.php" method="POST" class="mt-4 d-flex justify-content-center align-items-center flex-column">
                    <div class="form-group ">
                        <textarea name="review" placeholder="Отставить отзыв" class="form-control" id="exampleFormControlTextarea1" rows="5" cols="100" required></textarea>
                        <textarea name="schoolId" id="" cols="30" rows="10" class="d-none">{currentUrl}</textarea>
                    </div>
                    
                    <div class="d-flex mt-3">
                        {[...Array(5)].map((star, index) => {
                            const currentRating = index + 1 
                            return (
                                <label>
                                    <input type="radio" 
                                    name="rating"
                                    value={currentRating}
                                    onClick={()=> setRating(currentRating)}
                                    required
                                    />
                                    <FaStar 
                                        className="star" 
                                        size={35}
                                        color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                        onMouseEnter={() => setHover(currentRating)}
                                        onMouseLeave={() => setHover(null)}
                                    />
                                </label>
                            
                            )
                                
                        })}
                    </div>
                    <button type="submit" class="btn btn-outline-success mt-3">Отправить</button>
                </form>
            

            <Review/>
        </div>
    )
}

export default SchoolPage;