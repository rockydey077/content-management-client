import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import {
  useFetchBlogsQuery,
  useRemoveBlogMutation,
  useUpdateBlogMutation,
} from "../../features/api/apiSlice";
import { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";

const BlogList = () => {
  const { data: blogs, isLoading } = useFetchBlogsQuery();
  const [removeBlog] = useRemoveBlogMutation();
  const [blogDetails, setBlogDetails] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const [updateBlog] = useUpdateBlogMutation();
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <p className='text-center my-20 text-2xl font-bold text-orange-600'>
        Loading...
      </p>
    );
  }

  const customStyles = {
    overlay: {
      backgroundColor: "#000000cc",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function closeModal() {
    setModalIsOpen(false);
  }

  const submit = (data) => {
    const blog = {
      _id: blogDetails._id,
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

    setModalIsOpen(false);
    dispatch(updateBlog(blog));
  };

  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
      <div className='mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
        <header className='px-5 py-4 border-b border-gray-100'>
          <div className='font-semibold text-gray-800'>Blogs</div>
        </header>

        <div className='overflow-x-auto p-3'>
          <table className='table-auto w-full'>
            <thead className='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
              <tr>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Title</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Image</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Author</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-center'>Action</div>
                </th>
              </tr>
            </thead>

            <tbody className='text-sm divide-y divide-gray-100'>
              {blogs?.map((blog) => (
                <tr key={blog._id}>
                  <td className='p-2'>
                    <div className='font-medium text-gray-800'>
                      {blog.title}
                    </div>
                  </td>
                  <td className='p-2'>
                    <img src={blog.image} className='w-12 rounded-sm ' alt='' />
                  </td>
                  <td className='p-2'>
                    <div>{blog.author.name}</div>
                  </td>
                  <td className='p-2'>
                    <div className='flex justify-center text-base gap-2'>
                      <button
                        onClick={() => {
                          setModalIsOpen(true);
                          setBlogDetails(blog);
                        }}>
                        <FaRegEdit />
                      </button>
                      <button onClick={() => removeBlog(blog._id)}>
                        <FaRegTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'>
        <div className='text-end'>
          <button onClick={closeModal} className=''>
            <ImCross />
          </button>
        </div>
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
              defaultValue={blogDetails.title}
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
              defaultValue={blogDetails.image}
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
              defaultValue={blogDetails?.author?.name}
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
              defaultValue={blogDetails?.author?.image}
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
              defaultValue={blogDetails.date}
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
              defaultValue={blogDetails.read_time}
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
              defaultValue={blogDetails.description}
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
      </Modal>
    </div>
  );
};

export default BlogList;
