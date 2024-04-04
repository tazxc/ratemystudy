import {$host} from './index'

export const fetchSchools = async () => {
    const {data} = await $host.get('allSchool')
    return data
}

export const fetchOneSchool = async (id) =>{
    const {data} = $host.get('schoolInfo/' + id)
    return data
}