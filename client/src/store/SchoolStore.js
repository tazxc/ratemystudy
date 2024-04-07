import {makeAutoObservable} from "mobx"
import axios from 'axios'

export default class SchoolStore{
    constructor(){
        this._types = [
            {id: 1, name: 'Школы'},
            {id: 2, name: 'Вузы'},
            {id: 3, name: 'Колледжи'},
        ]
        this._institution = []
        makeAutoObservable(this)
    }

    

    setTypes(types){
        this._types = types
    }

    setInstitution(institution){
        this._institution = institution
    }

    get types(){
        return this._types
    }

    get institution(){
        return this._institution
    }
}