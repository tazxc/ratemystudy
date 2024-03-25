import React from "react";
import './style/SchoolItem.css'

const SchoolItem = ({institution}) =>{
    return(
        <div className="school_item">
            <div className="school_card">
                <img src="" alt="" />
                <div className="about_item">
                    <div>{institution.name}</div>
                    <div>
                        <div>{institution.rating}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchoolItem;