import { AsyncComponent } from "space-utils";

async function getPosts() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await data.json();
}

const Post = AsyncComponent(async () => {
  const posts = await getPosts();

  return posts.map((post: any, index: number) => (
    <div key={index}>{post.title}</div>
  ));
});

export default Post;
