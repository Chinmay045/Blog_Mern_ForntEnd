import React from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/Login';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import AddBlog from './components/AddBlog';
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
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
