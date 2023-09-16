import React from "react";
import nino from "../assets/images/nino.png";

const Attendance = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light">
                <thead className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                  <tr>
                    <th scope="col" className=" px-6 py-4">
                      # ID No.
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Student
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Section
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap  px-6 py-4 font-medium">
                      03-2122-02122
                    </td>
                    <td className="whitespace-nowrap  px-6 py-4">Walex Lim</td>
                    <td className="whitespace-nowrap  px-6 py-4">
                      UP-FA1-BSITWEBDEV3-2
                    </td>
                    <td className="whitespace-nowrap  px-6 py-4 bg-green-500">
                      Present
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap  px-6 py-4 font-medium">
                      03-2021-2021
                    </td>
                    <td className="whitespace-nowrap  px-6 py-4">
                      Andrei Edic
                    </td>
                    <td className="whitespace-nowrap  px-6 py-4">
                      UP-FA1-BSITWEBDEV3-2
                    </td>
                    <td className="whitespace-nowrap  px-6 py-4 bg-red-500">
                      Absent
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap  px-6 py-4 font-medium">
                      03-1920-2020
                    </td>
                    <td className="whitespace-nowrap  px-6 py-4">
                      Paul Molina
                    </td>
                    <td className="whitespace-nowrap  px-6 py-4">
                      UP-FA1-BSITWEBDEV3-2
                    </td>
                    <td className="whitespace-nowrap  px-6 py-4 bg-green-500">
                      Present
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendance;
