import './Story.css'


export default function Story({title, description, photo}){
    return(  
            <div className='d-flex justify-content-center align-items-center text-center flex-wrap mt-4 '>
                <div className='body_task m-auto'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                
                <div className='task_img m-auto'>
                    <img src={photo} width={260} alt="" />
                </div>
            </div>
    )
}