import React from "react";
import { Route, Routes} from 'react-router-dom'
import { AuthRoutes, PublicRoutes } from "../routes";


const AppRouter = () =>{

    const isAuth = false

    return(
        <Routes>
            {isAuth === true && AuthRoutes.map(({path, Component})=>
                <Route key={path} path={path} Component={Component} exact/>
            )}
            {PublicRoutes.map(({path, Component})=>
                <Route key={path} path={path} Component={Component} exact/>
            )}
        </Routes>
    )
}

export default AppRouter;