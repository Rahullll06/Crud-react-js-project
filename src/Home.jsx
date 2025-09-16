import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/Student");
      setData(res.data);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  };
 
  function deletedata(id) {
    console.log(id);
    const confirm= window.confirm("would you like to delete")
    if( confirm){
       axios
      .delete("http://localhost:3000/Student/" + id)
      .then((res) => {
        console.log("Deleted:", res.data);
       
      })
      .catch((err) => {
        console.error("Error deleting:", err);
      });
    }
  }

  return (
   <div className="px-4 py-6 min-h-screen bg-black">
  {/* Title */}
  <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-red-500">
    Student Management System
  </h1>

  {/* Loading/Error Handling */}
  {loading ? (
    <p className="text-center">Loading...</p>
  ) : error ? (
    <p className="text-center text-red-500">{error}</p>
  ) : (
    <>
      {/* Create Button */}
      <div className="flex justify-center mb-4">
        <Link to="/create">
          <button className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-md w-full sm:w-[160px] text-sm sm:text-base">
            Create Student +
          </button>
        </Link>
      </div>

      {/* Responsive Table Container */}
      <div className="flex justify-center px-2 sm:px-4">
  <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg overflow-hidden">
    {/* Scrollable container */}
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-gray-800">
        <thead className="bg-yellow-500 text-white">
          <tr>
            <th className="px-4 py-2 border-b  text-left">ID</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Username</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr
              key={post.id}
              className="border-t border-gray-300 hover:bg-gray-50 transition"
            >
              <td className="px-4 border-l py-2">{post.id}</td>
              <td className="px-4 py-2">{post.name}</td>
              <td className="px-4 py-2">{post.username}</td>
              <td className="px-4 py-2">{post.email}</td>
              <td className="px-4 py-2 space-y-1 sm:space-y-0 sm:space-x-2 flex flex-col sm:flex-row">
                <Link to={`/read/${post.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs sm:text-sm w-full sm:w-auto">
                    Read
                  </button>
                </Link>
                <Link to={`/update/${post.id}`}>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded text-xs sm:text-sm w-full sm:w-auto">
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => deletedata(post.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs sm:text-sm w-full sm:w-auto"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

    </>
  )}
</div>

  );
};

export default Home;
