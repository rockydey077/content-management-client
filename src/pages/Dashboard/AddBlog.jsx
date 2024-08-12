import { useForm } from "react-hook-form";
import { useAddBlogMutation } from "../../features/api/apiSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import toast from "react-hot-toast";

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const [addBlog, { isError, isLoading, isSuccess, error }] =
    useAddBlogMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      toast.loading("Adding...", { id: "addProduct" });
    }

    if (!isLoading && isSuccess) {
      toast.success("Product added", { id: "addProduct" });

      reset();
    }

    if (!isLoading && isError) {
      toast.error(error, { id: "addProduct" });
    }
  }, [isLoading, isError, error, isSuccess, reset]);

  const submit = (data) => {
    const blog = {
      title: data.title,
      image: data.image,
      author: {
        name: data.aName,
        image: data.aImage,
      },
      date: data.date,
      read_time: data.read,
      description: data.description,
    };

    reset();
    dispatch(addBlog(blog));
  };

  return (
    <div className='flex justify-center items-center h-full '>
      <form
        onSubmit={handleSubmit(submit)}
        className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='title'>
            Title
          </label>
          <input
            type='text'
            id='title'
            name='title'
            className='border px-5 py-2 rounded outline-none'
            {...register("title")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='image'>
            Image
          </label>
          <input
            type='text'
            name='image'
            className='border px-5 py-2 rounded outline-none'
            id='image'
            {...register("image")}
          />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='aName'>
            Author Name
          </label>
          <input
            type='text'
            name='aName'
            className='border px-5 py-2 rounded outline-none'
            id='aName'
            {...register("aName")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='aImage'>
            Author Image
          </label>
          <input
            type='text'
            name='aImage'
            className='border px-5 py-2 rounded outline-none'
            id='aImage'
            {...register("aImage")}
          />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='date'>
            Date
          </label>
          <input
            type='text'
            name='date'
            className='border px-5 py-2 rounded outline-none'
            id='date'
            {...register("date")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='read'>
            Read Time
          </label>
          <input
            type='text'
            name='read'
            className='border px-5 py-2 rounded outline-none'
            id='read'
            {...register("read")}
          />
        </div>

        <div className='flex flex-col w-full'>
          <label className='mb-2' htmlFor='description'>
            Description
          </label>
          <textarea
            rows={5}
            type='text'
            name='description'
            className='border px-5 py-2 rounded outline-none'
            id='description'
            {...register("description")}
          />
        </div>

        <div className='flex justify-between items-center w-full'>
          <button
            className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
            type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
