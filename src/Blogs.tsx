import { useParams } from "react-router";

const Blogs = () => {
  const { id } = useParams();
  return <div className="text-[2.4rem] font-bold p-[22px]">Blog:{id}</div>;
};

export default Blogs;
