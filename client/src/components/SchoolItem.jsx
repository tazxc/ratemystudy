import React from "react";
import './style/SchoolItem.css'
import {useNavigate} from 'react-router-dom'
import { SCHOOL_ROUTE } from "../utils/consts";

const SchoolItem = ({institution}) =>{

    const history = useNavigate()

    return(
        // <div className="school_item">
        //     <div className="school_card" onClick={()=>history(SCHOOL_ROUTE + '/' + institution.id)}>
        //         <img src={institution.img} alt="" />
        //         <div className="about_item">
        //             <div>{institution.name}</div>
        //             <div>
        //                 <div>{institution.rating}</div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="schoolItem" 
        onClick={()=>history(SCHOOL_ROUTE + '/' + institution.id)}
        >
            <img src={institution.img} alt="" />
            <div className="schoolCard">
                <div className="aboutItem">
                    <div>{institution.name}</div>
                    <div>{institution.rating}</div>
                </div>
            </div>
            
        </div>
    )
}

export default SchoolItem;