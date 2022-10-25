import { Box, Typography, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import { Link } from "react-router-dom";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <Link
      key={post.id}
      to={`post/${post.id}`}
      style={{ textDecoration: "none" }}
    >
      <Box
        sx={{
          m: 1,
          border: 1,
          borderRadius: "5px",
          padding: 1,
          borderColor: "#9e9e9e",
        }}
      >
        <Typography color="#01579b" variant="h5">
          {post.title}
        </Typography>
        <Typography variant="p">{post.content.substring(0, 100)}</Typography>
      </Box>
    </Link>
  ));
  return (
    <Stack direction="row" justifyContent="center">
      <Stack maxWidth="900px" width="900px">
        <Typography
          fontWeight="bold"
          fontSize="1.75rem"
          color="#0091ea"
          align="center"
        >
          Posts
        </Typography>
        {renderedPosts}
      </Stack>
    </Stack>
  );
};

export default PostsList;
