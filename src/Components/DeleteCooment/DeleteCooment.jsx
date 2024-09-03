import delet from "../../assets/images/icon-delete.svg";
import "./DeleteCooment.css";
import useStorePost from "../../store/Counter";
import AddNewReply from "../AddNewReply/AddNewReply";

const DeleteCooment = () => {
  const { removeCommentById, ArrayOfObject } = useStorePost();

  const handleDelete = (id) => {
    removeCommentById(id);
  };


  return (
    <div className="delete-reply">
      {ArrayOfObject.map(comment => (
        comment.name === 'juliusomo' ? (
          <div key={comment.id} className="btn">
            <img src={delet} alt="Delete" />
            <button id="DeleteBtns" onClick={() => handleDelete(comment.id)}>
              Delete
            </button>
          </div>
        ) : null
      ))}
       <AddNewReply></AddNewReply>
    </div>
  );
};

export default DeleteCooment;