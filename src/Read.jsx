import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams , Link} from 'react-router-dom';


const Read = () => {
  const [getdata, setgetdata] = useState(null);
  const { id } = useParams();

  useEffect(() => { 

    fetchData();
  } ,[])
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://localhost:3000/Student/${id}`);
        console.log(res.data);
        setgetdata(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
  return (
 <div className="bg-black min-h-screen p-4">
      <h1 className="font-bold text-2xl sm:text-3xl text-white bg-green-500 shadow text-center py-4">
       READING
      </h1>
     {
 getdata ?

      <div className="flex justify-center mt-10">
        <div className="w-full max-w-4xl overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-3 bg-blue-500 text-white border border-white">ID</th>
                <th className="py-2 px-3 bg-blue-500 text-white border border-white">NAME</th>
                <th className="py-2 px-3 bg-blue-500 text-white border border-white">USERNAME</th>
                <th className="py-2 px-3 bg-blue-500 text-white border border-white">EMAIL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-3 text-pink-500 border border-white">{getdata.id}</td>
                <td className="py-2 px-3 text-pink-500 border border-white">{getdata.name}</td>
                <td className="py-2 px-3 text-pink-500 border border-white">{getdata.username}</td>
                <td className="py-2 px-3 text-pink-500 border border-white">{getdata.email}</td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-center mt-6">
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Read
            </button>
           <Link to={'/'}> <button className="bg-blue-800 text-white  ml-5 px-4 py-2 rounded hover:bg-blue-600">
              Back
            </button>  </Link>

          </div>
        </div>
        
      </div> : <p className='text-read tetx-2xl align-center'> LOADING</p>}
      
    </div>
  );
};

export default Read;
