import Post from "../components/posts/PostById";

const Page = ({ params }: any) => {
  return <Post id={params?.id} />;
};

export default Page;
