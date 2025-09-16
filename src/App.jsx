import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Read from './Read';
import Update from './Update';
import Create from './Create';






const App = () => {
  

  return (

    


    <>
    

<BrowserRouter>
<Routes>

  <Route path='/' element={<Home/>}></Route>
  <Route path='/read/:id'  element={<Read/>}></Route>
  <Route path='/update/:id' element={<Update/>}></Route>
 <Route path='/create' element={<Create />} />


</Routes>

</BrowserRouter>
   



   </>




      
 
  );
};

export default App;
