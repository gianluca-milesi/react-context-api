import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { API_BASE_URI } from "./config.js"
//Pages
import NotFound from "./pages/NotFound/NotFound.jsx"
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"
import PostsPage from "./pages/posts/PostsPage/PostsPage.jsx"
import PostsShow from "./pages/posts/PostsShow/PostsShow.jsx"
import PostsStore from "./pages/posts/PostsStore/PostsStore.jsx"
//Layouts
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout.jsx"
import BlankLayout from "./layouts/BlankLayout/BlankLayout.jsx"
//Context
import GlobalContext from "./context/GlobalContext.js"


function App() {

  const [posts, setPosts] = useState([])

  //FETCH
  function fetchPosts() {
    axios.get(`${API_BASE_URI}posts`)
      .then((res) => {
        setPosts(res.data)
        // setFilteredPosts(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  //FUNCTIONS
  //Delete
  function deletePost(id) {
    axios.delete(`${API_BASE_URI}posts/${id}`)
      .then(() => {
        fetchPosts()
      })
      .catch((err) => {
        console.error(err)
      })
  }



  return (
    <GlobalContext.Provider value={{ posts, fetchPosts, deletePost }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/posts">
              <Route path="" element={<PostsPage />}></Route>
              <Route path=":id" element={<PostsShow />}></Route>
              <Route path="create-post" element={<PostsStore />}></Route>
            </Route>
          </Route>
          <Route element={<BlankLayout />}>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter >
    </GlobalContext.Provider>
  )
}

export default App