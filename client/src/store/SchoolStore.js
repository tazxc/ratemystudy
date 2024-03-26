import {makeAutoObservable} from "mobx"

export default class SchoolStore{
    constructor(){
        this._types = [
            {id: 1, name: 'Школы'},
            {id: 2, name: 'Вузы'},
            {id: 3, name: 'Колледжи'},
        ]
        this._institution = [
            {id: 1, name: 'КИТиС', review: 6, rating: 4.5, img: 'https://сопк.рф/wp-content/uploads/2019/12/Kolledzh-informatsionnyh-tehnologij-i-stroitelstva-Kaliningrad.jpg'},
            {id: 2, name: 'БФУ', rating: 4.9, img: 'https://studyinrussia.ru/upload/iblock/79c/79c6fc400b537388d57c4579fc5be6d6.jpg'},
            {id: 3, name: 'КГТУ', rating: 5, img: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Kaliningrad_05-2017_img51_Technical_University.jpg'},
            {id: 3, name: 'КГТУ', rating: 5, img: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Kaliningrad_05-2017_img51_Technical_University.jpg'},
            {id: 3, name: 'КГТУ', rating: 5, img: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Kaliningrad_05-2017_img51_Technical_University.jpg'},
            {id: 3, name: 'КГТУ', rating: 5, img: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Kaliningrad_05-2017_img51_Technical_University.jpg'},
            {id: 3, name: 'КГТУ', rating: 5, img: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Kaliningrad_05-2017_img51_Technical_University.jpg'},
            {id: 3, name: 'КГТУ', rating: 5, img: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Kaliningrad_05-2017_img51_Technical_University.jpg'},
            {id: 3, name: 'КГТУ', rating: 5, img: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Kaliningrad_05-2017_img51_Technical_University.jpg'},
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