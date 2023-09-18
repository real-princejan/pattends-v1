import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Teacher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/getTeacher")
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log(res.data.Result);
          setData(res.data.Result);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8081/delete/" + id)
      .then((res) => {
        if (res.data.Status === "Success") {
          window.location.reload(true);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="px-5 py-3">
      <div className="flex justify-center">
        <h3>Teacher List</h3>
      </div>
      <button
        className="rounded-xl border-solid border-2 border-primaryColor border-opacity-30 shadow-lg bg-transparent font-[500] 
    text-sm w-24 py-2 hover:bg-primaryColor hover:text-white"
      >
        <Link to="/add-teacher">Add Teacher</Link>
      </button>
      <table className="min-w-full text-center text-sm font-[400] my-4">
        <thead className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
          <tr>
            <th scope="col" className=" px-6 py-4">
              Name
            </th>
            <th scope="col">Image</th>
            <th scope="col" className=" px-6 py-4">
              Email
            </th>
            <th scope="col" className=" px-6 py-4">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((teacher, index) => {
            return (
              <tr key={index}>
                <td>{teacher.name}</td>
                <td className="">
                  {
                    <img
                      src={`http://localhost:8081/images/` + teacher.image}
                      alt=""
                      className="w-14 h-14 my-2 rounded-full mx-auto"
                    />
                  }
                </td>
                <td>{teacher.email}</td>
                <td>
                  <Link
                    to={`/teacherEdit/` + teacher.id}
                    className="border border-transparent rounded-2xl bg-blue-500 px-3 py-2 mx-2 hover:bg-blue-400"
                  >
                    <i class="ri-edit-2-line"></i>
                  </Link>
                  <button
                    onClick={(e) => handleDelete(teacher.id)}
                    className="border border-transparent rounded-2xl bg-red-500 px-3 py-2 mx-2 hover:bg-red-400"
                  >
                    <i class="ri-delete-bin-6-line"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Teacher;
