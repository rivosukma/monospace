import { AsyncComponent } from "space-utils";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await res.json();
}

const PostsComponent = AsyncComponent(async () => {
  const data = (await fetchPosts()) ?? [];
  return data.map((item: any) => <div key={item.id}>{item.title}</div>);
});

export default PostsComponent;
