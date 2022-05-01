import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./component/Post/Post";
import Navbar from "./component/Navbar/Navbar";
import PostFullDetails from "./component/PostFullDetails/PostFullDetails";
function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Post></Post>} />
          <Route path="/post" element={<Post></Post>} />
          <Route path="/post/:id/comments" element={<PostFullDetails></PostFullDetails>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
