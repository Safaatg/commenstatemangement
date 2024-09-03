import { useState } from "react";
import "../AddNewPost/AddNewPost.css"
import useStorePost from '../../store/Counter';
import juliusomo from "../../assets/images/avater/image-juliusomo.png";
const AddNewPost = () => {
    const [inputValue, setInputValue] = useState("");
    const { addComment,  } = useStorePost();
    function handleSendPost() {
        const newObject = {
            id: null,
            likes: 0,
            img: juliusomo,
            name: "juliusomo",
            createdAt: "just now",
            comments: inputValue,
          };
      
          // Add the new post
          addComment(newObject);
          setInputValue(""); // Clear the input field after sending
      
      }
      function handleOnchange(event) {
        setInputValue(event.target.value);
      }
    return (
        <div>
            <div className="container-comment">
      <div className="comment">
        <img src={juliusomo} />
        <textarea
          rows={4}
          type="text"
          placeholder="Add a comment..."
          value={inputValue}
          onChange={handleOnchange}
        ></textarea>
        <button onClick={handleSendPost}>send</button>
      </div>
    </div>
        </div>
    );
}

export default AddNewPost;
