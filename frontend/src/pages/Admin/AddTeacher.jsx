import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTeacher = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("email", data.email);
    formdata.append("password", data.password);
    formdata.append("image", data.image);

    axios
      .post("http://localhost:8081/add-teacher", formdata)
      .then((res) => {
        navigate("/teacher");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="px-5 py-3">
        <div className="flex justify-center">
          <form className="w-full max-w-lg mt-34" onSubmit={handleSubmit}>
            <h1 className="font-[700] text-3xl my-10">Add Teacher</h1>
            {/* First Name */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Full name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>
            </div>
            {/* Email */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
            </div>
            {/* Password */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="off"
                  required
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
                <p className="text-gray-600 text-xs italic">
                  Password must contain 8 characters
                </p>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="file_input"
                >
                  Upload image
                </label>
                <input
                  className="block w-full text-sm bg-gray-200 text-gray-600 border border-gray-200 rounded-lg cursor-pointer  dark:text-gray-700 focus:outline-none dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-700"
                  id="image"
                  type="file"
                  onChange={(e) =>
                    setData({ ...data, image: e.target.files[0] })
                  }
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-white hover:bg-primaryColor hover:text-white font-[500]] text-sm py-2 px-4 mt-1 border border-gray-400 rounded shadow"
            >
              Create
            </button>
            {/* End */}
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTeacher;
