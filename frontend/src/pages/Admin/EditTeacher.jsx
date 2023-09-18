import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditTeacher = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8081/get/" + id)
      .then((res) => {
        setData({
          ...data,
          name: res.data.Result[0].name,
          email: res.data.Result[0].email,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put("http://localhost:8081/update/" + id, data)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/teacher");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="px-5 py-3">
        <div className="flex justify-center">
          <form className="w-full max-w-lg mt-34" onSubmit={handleSubmit}>
            <h1 className="font-[700] text-3xl my-10">Update Teacher</h1>
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
                  placeholder="Update name  "
                  required
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  value={data.name}
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
                  placeholder="Update your email"
                  required
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  value={data.email}
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-white hover:bg-primaryColor hover:text-white font-[500]] text-sm py-2 px-4 mt-1 border border-gray-400 rounded shadow"
            >
              Update
            </button>
            {/* End */}
          </form>
        </div>
      </div>
    </>
  );
};

export default EditTeacher;
