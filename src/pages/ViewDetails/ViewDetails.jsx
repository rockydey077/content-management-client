import { useParams } from "react-router-dom";
import { useFetchBlogQuery } from "../../features/api/apiSlice";
import { IoMdBook } from "react-icons/io";

const ViewDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading } = useFetchBlogQuery(id);

  if (isLoading) {
    return (
      <p className='text-center my-20 text-2xl font-bold text-orange-600'>
        Loading...
      </p>
    );
  }

  const { title, image, date, read_time, author, description } = blog;

  return (
    <div className='pb-20 space-y-6'>
      <div>
        <img className='rounded' src={image} alt={title} />
      </div>
      <div>
        <h1 className='text-center font-bold text-4xl max-w-3xl mx-auto'>
          {title}
        </h1>
      </div>
      <div className='flex items-center justify-center gap-4 text-base font-normal text-slate-600'>
        <div className='flex items-center gap-3'>
          <img
            className='w-10 h-10 rounded-full'
            src={author.image}
            alt={author.name}
          />
          <h4 className='font-bold'>{author.name}</h4>
        </div>
        <div className='w-1 h-1 bg-slate-700 rounded-full'></div>
        <p>{date}</p>
        <div className='w-1 h-1 bg-slate-700 rounded-full'></div>
        <p className='flex items-center gap-[5px]'>
          <IoMdBook /> {read_time}
        </p>
      </div>
      <div className='text-lg'>{description}</div>
    </div>
  );
};

export default ViewDetails;
