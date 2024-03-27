import React from "react";
import './style/SchoolPage.css'


const SchoolPage = () =>{
    const school = {id: 1, name: 'КИТиС', review: 26, rating: 4.5, img: 'https://сопк.рф/wp-content/uploads/2019/12/Kolledzh-informatsionnyh-tehnologij-i-stroitelstva-Kaliningrad.jpg'}
    return(
        <div className="main_schoolPage">
            <div className="school">
                <div className="nameSchool"><h1>{school.name}</h1></div>
                <p>Оценка: {school.rating}</p>
                <h2>Всего отызвов: {school.review}</h2>
            </div>
            <div className="formForRev">
                <form action="">
                    <input type="text" className="rev_input" placeholder="Оставить отзыв"/>
                    <input type="button" value="Отправить" className="form_btn" />
                </form>
            </div>
            
            <div className="allReview">
                <div className="AllScore">
                    <div className="score">4.5</div>
                    
                </div>
                <div className="review">
                    <div className="reviewCommit">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium animi id, autem debitis qui vitae, 
                            eius molestias consectetur, 
                            quia culpa ea unde minima veritatis inventore doloremque odit rem dignissimos? Molestiae!</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default SchoolPage;