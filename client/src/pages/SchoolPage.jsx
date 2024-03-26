import React from "react";
import './style/SchoolPage.css'


const SchoolPage = () =>{
    const school = {id: 1, name: 'КИТиС', review: 26, rating: 4.5, img: 'https://сопк.рф/wp-content/uploads/2019/12/Kolledzh-informatsionnyh-tehnologij-i-stroitelstva-Kaliningrad.jpg'}
    return(
        <div className="main_schoolPage">
            <div className="school" >
                <h1>{school.name}</h1>
                <p>Оценка: {school.rating}</p>
                <h2>Всего отызвов: {school.review}</h2>
            </div>
            <div className="formForRev">
                <form action="">
                    <input type="text" className="rev_input" placeholder="Оставить отзыв"/>
                    <input type="button" value="Отправить" className="form_btn" />
                </form>
            </div>
        </div>
    )
}

export default SchoolPage;