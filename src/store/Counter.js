import { create } from 'zustand';
import image1 from "../assets/images/avater/image-amyrobson.png";
import juliusomo from "../assets/images/avater/image-juliusomo.png";
import image3 from "../assets/images/avater/image-ramsesmiron.png";
import maxblagun from "../assets/images/avater/image-maxblagun.png";

const useStorePost = create((set) => ({
  ArrayOfObject: [
    {
      id: 1,
      likes: 2,
      img: image1,
      name: "amyrobson",
      createdAt: "1 month ago",
      comments: [],
      content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    },
    {
      id: 2,
      likes: 5,
      img: maxblagun,
      name: "maxblagun",
      createdAt: "2 weeks ago",
      comments: [],
      content: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    },
    {
      id: 3,
      likes: 4,
      img: image3,
      name: "maxblagun",
      createdAt: "1 week ago",
      comments: [],
      content: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
    },
    {
      id: 4,
      likes: 2,
      img: juliusomo,
      name: "juliusomo",
      createdAt: "2 days ago",
      comments: [],
      content: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
    },
  ],
  inc: (postId) =>
    set((state) => ({
      ArrayOfObject: state.ArrayOfObject.map((post) =>
        post.id === postId ? { ...post, likes: Math.max(post.likes + 1, 0) } : post
      ),
    }),
  ),
  dec: (postId) =>
    set((state) => ({
      ArrayOfObject: state.ArrayOfObject.map((post) =>
        post.id === postId ? { ...post, likes: Math.max(post.likes - 1, 0) } : post
      ),
    }),
  ),
  addComment: (newObject) =>
    set((state) => ({
      ArrayOfObject: [...state.ArrayOfObject, { ...newObject, id: state.ArrayOfObject.length + 1 }],
    }),
  ),
  removeCommentById: (ID) => 
    set((state) => ({
      ArrayOfObject: state.ArrayOfObject.filter((item) => item.id !== ID),
    }),
  ),
  replyToComment: (commentId, replyContent) => {
    set((state) => ({
      ArrayOfObject: state.ArrayOfObject.map((post) => {
        return {
          ...post,
          comments: post.comments.map((comment) => {
            if (comment.id === commentId) {
              return {
                ...comment,
                replies: [...comment.replies, { content: replyContent, createdAt: new Date() }],
              };
            }
            return comment;
          }),
        };
      }),
    }));
  },
}));

export default useStorePost;