import { BrowserRouter, Route, Routes } from "react-router-dom"
//Pages
import NotFound from "./pages/NotFound/NotFound.jsx"
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"
import PostsIndex from "./pages/posts/PostsIndex/PostsIndex.jsx"
import PostsShow from "./pages/posts/PostsShow/PostsShow.jsx"
import PostsStore from "./pages/posts/PostsStore/PostsStore.jsx"
//Layouts
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout.jsx"
import BlankLayout from "./layouts/BlankLayout/BlankLayout.jsx"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/posts">
              <Route path="" element={<PostsIndex />}></Route>
              <Route path=":id" element={<PostsShow />}></Route>
              <Route path="create-post" element={<PostsStore />}></Route>
            </Route>
          </Route>
          <Route element={<BlankLayout />}>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App