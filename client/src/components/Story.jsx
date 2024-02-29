import './Story.css'


export default function Story({title, description, photo}){
    return(
            // <ul>
            //     <li>
            //         <p>
            //             <strong>{title} </strong>
            //         </p>
            //         <p>{description}</p>
            //     </li>
            //     <li><img className="mainphoto" src={photo} alt="" /></li>
            // </ul>
            
            <div className='task'>
                <div className='body_task'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                
                <div className='task_img'>
                    <img src={photo} width={260} alt="" />
                </div>
            </div>


            // <ul className='task'>
            //     <li><strong>{title}</strong></li>
            //     <p>{description}</p>
            //     <li><img src={photo} alt="" /></li>
            // </ul>

    )
}