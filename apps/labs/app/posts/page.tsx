import { Button } from "space-ui";
import PostsComponent from "./PostsComponent";

const PostPage = () => {
  return (
    <div className="px-10">
      <h1 className="text-2xl font-semibold my-8">LIST POST</h1>
      <Button className="mb-5">Click me</Button>
      <PostsComponent />
    </div>
  );
};

export default PostPage;
