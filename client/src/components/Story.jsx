import './Story.css'


export default function Story({title, description, photo}){
    return(
        <section className="story_main">
            <ul>
                <li>
                    <p>
                        <strong>{title}</strong>
                        {description}
                    </p>
                </li>
                <img src={photo} alt="" />
            </ul>
        </section>
    )
}