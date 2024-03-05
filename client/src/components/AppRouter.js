import React, { useContext } from "react";
import { Route, Routes} from 'react-router-dom'
import { AuthRoutes, PublicRoutes } from "../routes";
import {Context} from '../index'


const AppRouter = () =>{

    const {user} = useContext(Context)

    
    return(
        <Routes>
            {user.isAuth === true && AuthRoutes.map(({path, Component})=>
                <Route key={path} path={path} Component={Component} exact/>
            )}
            {PublicRoutes.map(({path, Component})=>
                <Route key={path} path={path} Component={Component} exact/>
            )}
        </Routes>
    )
}

export default AppRouter;