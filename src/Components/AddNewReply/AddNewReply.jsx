import  { useState } from 'react';
import juliusomo from "../../assets/images/avater/image-juliusomo.png"
import "../AddNewReply/AddNewReply.css"
import useStorePost from '../../store/Counter';

const AddNewReply = () => {
    const [reply, setReply] = useState("");
    const { replyToComment } = useStorePost();

    function HandleOnchange(event) {
        setReply(event.target.value);
    }

    function HandleNewReply(uniqueID) {
        replyToComment(uniqueID, reply);
        
       
    }

    return (
        <div className="container-reply">
            <div className="reply-comment">
                <img src={juliusomo} alt="Avatar" />
                <textarea value={reply} rows={4} type="text" onChange={HandleOnchange} />
                <button onClick={() => HandleNewReply(someUniqueID)}>Reply</button>
            </div>
        </div>
    );
}

export default AddNewReply;