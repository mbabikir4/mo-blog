import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Admin from '../admin/app'
import BlogPost from './BlogPost';
import BlogView from './BlogView';
import LoginForm from './LoginForm';
import BlogAll from '../components/BlogForm';
import NavbarBlog from '../components/Navbar';
const HomeScreen = () => {
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('user'))
    return (
        <div>
            <Router>
                <NavbarBlog user={loggedIn} />
                <Route path="/admin" exact component={Admin}></Route>
                <Route path="/login" exact><LoginForm setUser={setLoggedIn}></LoginForm></Route>
                <Route path="/" exact ><BlogView setUser={setLoggedIn} user={loggedIn}></BlogView></Route>
                <Route path="/create" exact component={BlogAll}></Route>
                <Route path="/blogs/:id" exact component={BlogPost}></Route>

            </Router>
        </div>
      );
}
 
export default HomeScreen;