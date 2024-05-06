import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Review = () =>{

    const [data, setData] = useState([])
    const {id} = useParams()
   
    useEffect(() => { 
        fetch(`http://Server/getViews.php?id=${id}`, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            },
        })
        .then(response => response.json())
        .then(result => setData(result))
        
    },[]);
    return(
        // <div className="allReview">
        //         <div className="AllScore">
        //             {data.map(review =>
        //                 <div className="score" key={review.id}>{review.rating}</div>
        //             )}
        //             </div>
                
        //         <div className="review">
        //             <div className="reviewCommit">
        //                 {data.map(review =>
        //                 <p key={review.id}>{review.review}</p>
        //                 )}
        //             </div>
                
        //         </div>
                
        //     </div>

        <div className="main_review">
            <div className="reviews-container">
                {data.map(review => (
                <div className="review-item" key={review.id}>
                    <div className={`score rating-${review.rating}`}>{review.rating}</div>
                    <p className="review">{review.review}</p>
                </div>
                ))}
            </div>
        </div>

    )
}

export default Review;