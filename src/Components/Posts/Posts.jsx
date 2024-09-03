import plus from "../../assets/images/icon-plus.svg";
import minuss from "../../assets/images/icon-minus.svg";
import "../Posts/Posts.css"
import useStorePost from '../../store/Counter';
import AddNewPost from '../AddNewPost/AddNewPost';
import DeleteCooment from '../DeleteCooment/DeleteCooment';

const Posts = () => {
  const { ArrayOfObject, inc, dec } = useStorePost();

  return (
    <div className="container">
      <div className="post">
        {ArrayOfObject.map((item) => (
          <div key={item.id} className="post-item">
            <div className="counter-wrapper">
              <button className="" onClick={() => inc(item.id)}>
                <img src={plus} alt="Increase" />
              </button>
              <span className="counter">{item.likes}</span>
              <button className="" onClick={() => dec(item.id)}>
                <img src={minuss} alt="Decrease" />
              </button>
            </div>
            <div className="box">
              <div className="box-container">
                <div className="profile">
                  <div className="profile-wrapper">
                    <img src={item.img} alt="Profile" />
                    <h2>{item.name}</h2>
                    <h5>{item.createdAt}</h5>
                  </div>
                  <DeleteCooment></DeleteCooment>
                </div>
                <p>{item.content}</p>
              </div>
            </div>
           
          </div>
        ))}
      </div>
      <AddNewPost></AddNewPost>
    </div>
  );
}

export default Posts;