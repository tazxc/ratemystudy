import {makeAutoObservable} from "mobx"

export default class SchoolStore{
    constructor(){
        this._types = [
            {id: 1, name: 'Школы'},
            {id: 2, name: 'Вузы'},
            {id: 3, name: 'Колледжи'},
        ]
        this._institution = [
            {id: 1, name: 'Колледж Информационных Технологий и Строительства', rating: 5},
            {id: 2, name: 'БФУ', rating: 5},
            {id: 1, name: 'КГТУ', rating: 5},
        ]
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