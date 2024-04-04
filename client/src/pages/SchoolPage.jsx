import React, { useEffect, useState } from "react";
import './style/SchoolPage.css'
import Review from "../components/Review";
import {FaStar} from 'react-icons/fa'
import { useParams } from "react-router-dom";


const SchoolPage = () =>{

    const {id} = useParams()
    console.log(id)
    function getSchool(){
        console.log(id)
        fetch(`http://Server/getSchool.php?id=${id}`, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }
    
    useEffect(() => { 
        getSchool()
    });


    const school = {id: 1, name: 'КИТиС', review: 26, rating: 4.5, img: 'https://сопк.рф/wp-content/uploads/2019/12/Kolledzh-informatsionnyh-tehnologij-i-stroitelstva-Kaliningrad.jpg'}
    
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    
    const currentUrl = window.location.href
    
    return(

        <div class="container-fluid">
            <div class="row">
            <div className="school">
                 <div className="nameSchool"><h1>{school.name}</h1></div>
                <p>Оценка: {school.rating}</p>
                <h2>Всего отызвов: {school.review}</h2>
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