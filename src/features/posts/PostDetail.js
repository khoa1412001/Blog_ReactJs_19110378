import {
  Stack,
  Typography,
  TextField,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { selectAllPosts } from "./postsSlice";
import { postEdit, commentAdded, postDeleted } from "./postsSlice";
const PostDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { id } = useParams();
  const post = useSelector(selectAllPosts).find((post) => post.id === id);
  const commentList = post.comment;
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [edit, setEdit] = useState(false);
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");
  const onSubmit = () => {
    if (title && content) {
      dispatch(postEdit({ id, title, content }));
      setEdit(false);
    }
  };
  const onComment = () => {
    if (comment) {
      dispatch(commentAdded({ id, data: { id: nanoid(), author, comment } }));
      setComment("");
      setAuthor("");
    }
  };
  const onDelete = () => {
    dispatch(postDeleted({ id }));
    navigate("/");
  };
  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button>Home</Button>
      </Link>
      <Stack direction="row" justifyContent="center">
        <Stack m={5} maxWidth="900px" width="900px">
          <Stack direction="row" justifyContent="space-between">
            <Typography color="#0091ea" fontSize="1.25rem" paddingLeft={2}>
              Title
            </Typography>
            <Stack direction="row">
              <Button onClick={() => setEdit(true)}>Edit</Button>
              <Button onClick={onDelete}>Delete</Button>
            </Stack>
          </Stack>
          <TextField
            disabled={!edit}
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Typography color="#0091ea" fontSize="1.25rem" paddingLeft={2}>
            Content
          </Typography>
          <TextField
            disabled={!edit}
            placeholder="Content"
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {edit && (
            <Stack direction="row" justifyContent="flex-end">
              <Button sx={{ my: 2 }} variant="outlined" onClick={onSubmit}>
                Submit
              </Button>
            </Stack>
          )}
          <Typography color="#0091ea" fontSize="1.25rem" paddingLeft={2}>
            Comment
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                placeholder="Tên người comment"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Grid>
            <Grid item xs={9}>
              <TextField
                placeholder="Comment"
                fullWidth
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Grid>
          </Grid>
          <Stack direction="row" justifyContent="flex-end">
            <Button sx={{ my: 2 }} variant="outlined" onClick={onComment}>
              Comment
            </Button>
          </Stack>
          <Divider />
          {commentList.map((item) => (
            <Typography key={item.id}>
              {item.author}: {item.comment}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default PostDetail;
