import { Button } from "space-ui/core";
import Post from "./components/posts/Post";

const Home: React.FC = () => {
  return (
    <div className="px-10">
      <Button>Click Me</Button>
      <Post />
    </div>
  );
};

export default Home;
