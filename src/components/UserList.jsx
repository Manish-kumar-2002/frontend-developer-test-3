import React, { useEffect, useState } from "react";

const ClientList = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  console.log(user);

  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://api.nexgenov8.com/api/directClientlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
      );
      const data = await response.json();
      console.log(data.DataList);
      setUser(data.DataList || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching User list:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="p-6 min-h-screen bg-[#111827] text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between mb-3 items-start md:items-center gap-4">
          <h2 className="text-2xl font-semibold">User List</h2>
          <div className="m-w-[350px] relative">
            <input
              className="bg-gray-800 border w-full border-gray-600 px-3 py-2 rounded text-white"
              type="text"
              placeholder="Search.."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="absolute right-0 bg-gray-800 border border-gray-600 px-3 py-2 rounded text-white">
              <i class="fas fa-search text-gray-500"></i>
            </button>
          </div>
          <div className="flex gap-2">
            <button className="bg-gray-600 px-4 py-2 rounded flex items-center gap-1">
              Back{" "}
              <span className="block bg-white pl-1 rounded-full pr-2">
                <i className="fas fa-backward text-black"></i>
              </span>
            </button>
            <button className="bg-red-600 px-4 py-2 rounded">Submit</button>
          </div>
        </div>

        {loading ? (
          <h1 className="text-xl py-3">Loading...</h1>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-700 rounded-lg shadow-sm">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-2 text-left border border-gray-700">
                    Sr. No.
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-700">
                    Name
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-700">
                    Gender
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-700">
                    DOB
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-700">
                    Anniversary Date
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-700">
                    Country
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-700">
                    State
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-700">
                    ContactInfo
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-700">
                    Email
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-700">
                    AccomodationPrefer
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-700">
                    MarketType
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-700">
                    Status
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-700">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {user.map((el, index) => (
                  <tr key={el.id || index} className="hover:bg-gray-700">
                    <td className="px-4 py-2 border border-gray-700">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      {el?.FirstName || "N/A"}
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      {el.Gender || "N/A"}
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      {el.DOB || "N/A"}
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      {el.AnniversaryDate || "N/A"}
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      {el.Country.Name || "N/A"}
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      {el.State.Name || "N/A"}
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      {el.Contactinfo[0].Mobile || "N/A"}
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      {el.Contactinfo[0].Email || "N/A"}
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      {el.AccomodationPreference?.id || "N/A"}
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      {el.MarketType?.Name || "N/A"}
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      <span className="text-green-700 px-2 py-1 font-bold rounded-full bg-green-300">
                        {el.Status || "N/A"}
                      </span>
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      <div className="flex items-center gap-1">
                        <span className="block bg-gray-400 p-1 cursor-pointer px-2 py-1 rounded-full ">
                          <i class="fas fa-pencil-alt text-green-700"></i>
                        </span>
                        <span className="block bg-gray-400 cursor-pointer px-2 py-1 rounded-full ">
                          <i class="fas fa-trash text-red-600"></i>
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientList;
