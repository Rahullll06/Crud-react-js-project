import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const [updatedata, setupdatedata] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchStudentData();
  }, []);
    
  const nevigate= useNavigate();
  async function fetchStudentData() {
    try {
      const res = await axios.get(`https://localhost:3000/Student/${id}`);
      setupdatedata(res.data);
       
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handledata = (e) => {
    setupdatedata({...updatedata,name:(e.target.value)})
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://localhost:3000/Student/${id}`, updatedata);
      alert('Student data updated successfully!');
     nevigate('/');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div className="bg-black min-h-screen p-4">
      <h1 className="font-bold text-2xl sm:text-3xl text-white bg-green-500 shadow text-center py-3">
        Update Student
      </h1>

      <div className="flex justify-center items-center mt-10">
        <div className="w-full max-w-md bg-gray-700 rounded-lg shadow-lg p-6">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
            
              name="name"
              value={updatedata.name || ''}
              onChange={handledata}
              className="p-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
            />
            <input
              type="text"
            
              name="username"
              value={updatedata.username || ''}
              onChange={handledata}
              className="p-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
            />
            <input
              type="email"
            
              name="email"
              value={updatedata.email || ''}
              onChange={handledata}
              className="p-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
            />

            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Submit
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

export default Update;
