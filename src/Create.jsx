import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
  const [value, setValue] = useState({
    name: "",
    username: "",
    email: ""
    
  });

  const navigate = useNavigate();

  const submitdata = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/Student", value);
      console.log(res.data);
      navigate('/');
    } catch (error) {
      console.error("Failed to submit data", error);
    }
  };

  const handledata = (e) => {
    setValue({ ...value, name: e.target.value });
  };

  return (
    <div className="bg-black min-h-screen p-4">
      <h1 className="font-bold text-2xl sm:text-3xl text-white bg-green-500 shadow text-center py-3">
        Create Student
      </h1>

      <div className="flex justify-center items-center mt-10">
        <div className="w-full max-w-md bg-gray-700 rounded-lg shadow-lg p-6">
          <form className="flex flex-col space-y-4" onSubmit={submitdata}>
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              onChange={handledata}
              className="p-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Enter username"
              name="username"
              onChange={handledata}
              className="p-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handledata}
              className="p-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
            />

            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Add Student
              </button>
              <Link to="/">
                <button
                 type="button"
                  className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
