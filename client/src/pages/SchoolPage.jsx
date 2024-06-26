
import React, { useState, useEffect } from "react";
import './style/SchoolPage.css';
import Review from "../components/Review";
import {FaStar} from 'react-icons/fa';
import { useParams } from "react-router-dom";
import { Context } from "..";

const SchoolPage = () =>{

    const isLoggedIn = localStorage.getItem('user_id') !== null;
    const [data, setData] = useState({});
    const { id } = useParams();
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [reviewSubmitted, setReviewSubmitted] = useState(false);

    useEffect(() => { 
        fetch(`http://Server/getSchool.php?id=${id}`, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            },
        })
        .then(response => response.json())
        .then(result => setData(result));
    }, [id]);
    
    const currentUrl = window.location.href;

    const handleSubmitReview = (e) => {
        e.preventDefault();
        if (isLoggedIn) {
            fetch('http://Server/school.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    review: reviewText,
                    rating: rating,
                    schoolId: currentUrl
                })
            })
            .then(response => {
                if (response.ok) {
                    setReviewSubmitted(true);
                } else {
                    console.error('Ошибка отправки отзыва');
                }
            })
            .catch(error => console.error('Ошибка сети', error));
        } else {
            alert('Пожалуйста, авторизуйтесь, чтобы отправить отзыв.');
        }
    };

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="school">
                    <div className="nameSchool"> 
                        <h2>{data.fullName}</h2>
                    </div>
                    <p>Оценка: {data.rating}</p>
                </div>
            </div>
            <form onSubmit={handleSubmitReview} className="mt-4 d-flex justify-content-center align-items-center flex-column">
                <div className="form-group">
                    <textarea 
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        placeholder="Оставить отзыв" 
                        className="form-control" 
                        rows="5" 
                        cols="100" 
                        required
                    ></textarea>
                    <textarea name="schoolId" value={currentUrl} className="d-none"></textarea>
                </div>
                <div className="d-flex mt-3">
                    {[...Array(5)].map((star, index) => {
                        const currentRating = index + 1;
                        return (
                            <label key={index}>
                                <input
                                    type="radio"
                                    name="rating"
                                    value={currentRating}
                                    onClick={() => setRating(currentRating)}
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
                        );
                    })}
                </div>
                {reviewSubmitted && <p className="revOk">Отзыв успешно отправлен!</p>}
                <button type="submit" className="btn btn-outline-success mt-3">Отправить</button>
            </form>
            <h4 className="pt-3 d-flex justify-content-center">Всего отзывов: {data.allView}</h4>
            <Review/>
        </div>
    );
};

export default SchoolPage;
