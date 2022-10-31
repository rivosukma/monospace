import { AsyncComponent } from "space-utils";

async function getPostById(id: number) {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  return await data.json();
}

const Post = AsyncComponent(async ({ id }: { id: number }) => {
  const post = await getPostById(id);
  return <div>{JSON.stringify(post)}</div>;
});

export default Post;
