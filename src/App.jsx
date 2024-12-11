//Axios
import axios from "axios"
import { API_BASE_URI } from "./config.js"
//Hooks
import { useState } from "react"
//React router
import { BrowserRouter, Route, Routes } from "react-router-dom"
//Context
import GlobalContext from "./context/GlobalContext.js"
//Layouts
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout.jsx"
import BlankLayout from "./layouts/BlankLayout/BlankLayout.jsx"
//Pages
import NotFound from "./pages/NotFound/NotFound.jsx"
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"
import PostsPage from "./pages/posts/PostsPage/PostsPage.jsx"
import PostsShow from "./pages/posts/PostsShow/PostsShow.jsx"
import PostsStore from "./pages/posts/PostsStore/PostsStore.jsx"


function App() {

  //STATE VARIABLES
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("")
  const [filteredPosts, setFilteredPosts] = useState([posts])

  //FETCH
  function fetchPosts() {
    axios.get(`${API_BASE_URI}posts`)
      .then((res) => {
        setPosts(res.data)
        setFilteredPosts(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  //HANDLERS
  //Search
  function handleSearch(event) {
    const value = event.target.value
    setSearch(value)
    if (value === "") {
      setFilteredPosts(posts)
    }
  }

  //FUNCTIONS
  //Filter
  function filterPosts() {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPosts(filtered);
  }

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
    <GlobalContext.Provider value={{ posts, search, filteredPosts, fetchPosts, handleSearch, filterPosts, deletePost }}>
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