import React, { useContext } from "react";
import {observer} from 'mobx-react-lite'
import { Context } from "..";
import SchoolItem from "./SchoolItem";

const SchoolList = observer(() =>{
    const {institution} = useContext(Context)

    return(
        <div className="school_list">
            {institution.institutions.map(institution =>
            <SchoolItem/>

            )}
        </div>
    )
})

export default SchoolList;