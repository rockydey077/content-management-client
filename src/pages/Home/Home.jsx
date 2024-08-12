import BlogCard from "../../components/BlogCard/BlogCard";
import { useFetchBlogsQuery } from "../../features/api/apiSlice";

const Home = () => {
  const { data: blogs, isLoading } = useFetchBlogsQuery();

  if (isLoading) {
    return (
      <p className='text-center my-20 text-2xl font-bold text-orange-600'>
        Loading...
      </p>
    );
  }

  return (
    <div className='grid grid-cols-3 gap-6 py-20'>
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog}></BlogCard>
      ))}
    </div>
  );
};

export default Home;
