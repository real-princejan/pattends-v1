import React from "react";

const Home = () => {
  return (
    <>
      <div className="">
        <div className="p-3 flex justify-around mt-3 font-[400]">
          <div className="px-3 pt-2 pb-3 border rounded-md shadow-sm w-72">
            <div className="text-center pb-1">
              <h4>Teachers</h4>
            </div>
            <hr />
            <div className="">
              <h5>Total: {}</h5>
            </div>
          </div>

          <div className="px-3 pt-2 pb-3 border shadow-sm w-72">
            <div className="text-center pb-1">
              <h4>Student</h4>
            </div>
            <hr />
            <div className="">
              <h5>Total: {}</h5>
            </div>
          </div>

          <div className="px-3 pt-2 pb-3 border shadow-sm w-72">
            <div className="text-center pb-1">
              <h4>Attendance</h4>
            </div>
            <hr />
            <div className="">
              <h5>Total: {}</h5>
            </div>
          </div>
        </div>

        {/* List of Teachers */}
        <div className="mt-4 px-5 pt-4">
          <h3>List of Teachers</h3>
          <table className="table-auto">
            <thead>
              <th>
                <th>Name</th>
                <th>Action</th>
              </th>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
