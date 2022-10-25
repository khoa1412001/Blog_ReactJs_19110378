import { Route, Routes } from "react-router-dom";
import AddPostForm from "../features/posts/AddPostForm";
import PostDetail from "../features/posts/PostDetail";
import PostsList from "../features/posts/PostsList";

function ConfigRoute() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <AddPostForm />
            <PostsList />
          </>
        }
      />
      <Route path="/post/:id" element={<PostDetail />} />
    </Routes>
  );
}

export default ConfigRoute;
