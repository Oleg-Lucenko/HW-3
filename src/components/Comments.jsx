
import { useEffect, useState } from "react";
import './comments.css';



const Comments = ({colorStatus}) => {

    const [elements, setElements] = useState([]);

        useEffect(() => {
           async function request() {
           const data = await fetch('https://jsonplaceholder.typicode.com/comments');
           const response = await data.json();
           setElements(response);
        }

        request();
    }
    ,[])

    return(
        <div>            
            {elements.map(element => (
                <div className="comment-container" key={element.id}>

                    <div className= {colorStatus ? 'name-number-container active' :'name-number-container'}>
                        <span>{element.id}.</span>
                        <p>Name: {element.name}</p>
                    </div>

                    <p className="comment-content">{element.body}</p>
                </div>

        ))}
        </div>

    )
}


export default Comments;