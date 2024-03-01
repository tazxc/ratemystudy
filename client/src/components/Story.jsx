import './Story.css'


export default function Story({title, description, photo}){
    return(  
            <div className='task'>
                <div className='body_task'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                
                <div className='task_img'>
                    <img src={photo} width={260} alt="" />
                </div>
            </div>
    )
}