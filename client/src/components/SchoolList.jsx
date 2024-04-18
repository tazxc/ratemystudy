import React, { useEffect, useState, useContext } from "react";
import axios from 'axios'
import {observer} from 'mobx-react-lite'
import { Context } from "../index";
import SchoolItem from "./SchoolItem";
import './style/SchoolList.css'

const SchoolList = observer(() =>{
    const {school} = useContext(Context)
        
    return(
        <div className="school_list">
            <div className="school_map">
                {school.institution.map(institution =>
                <SchoolItem key={institution.id} institution={institution}/>

                )}
            </div>
        </div>
    )
})

export default SchoolList;