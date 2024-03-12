import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import AddBlog from './components/AddBlog';
import BlogDetail from './components/BlogDetail';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);

  return (
    <React.Fragment>
      <header>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <main>
          <Routes>
            <Route path='/auth' element={<Auth />}></Route>
            <Route path='/blogs' element={<Blogs />}></Route>
            <Route path='/myBlogs' element={<UserBlogs />}></Route>
            <Route path='/myBlogs:id' element={<BlogDetail />}></Route>
            <Route path='/blogs/add' element={<AddBlog />}></Route>
          </Routes>

        </main>
      </header>
    </React.Fragment>

  );
}

export default App;
