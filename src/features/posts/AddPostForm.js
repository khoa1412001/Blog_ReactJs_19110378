import { Button, Stack, TextField, Typography } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onSubmit = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
          comment: [],
        })
      );
      setContent("");
      setTitle("");
    }
  };
  return (
    <Stack direction="row" justifyContent="center">
      <Stack p={5} maxWidth="900px" width="900px" spacing={1}>
        <Typography
          fontWeight="bold"
          fontSize="1.75rem"
          color="#0091ea"
          align="center"
        >
          Add New Posts
        </Typography>
        <Typography color="#0091ea">Title</Typography>
        <TextField
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Typography color="#0091ea">Content</Typography>
        <TextField
          placeholder="Content"
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Stack direction="row" justifyContent="flex-end">
          <Button variant="outlined" onClick={onSubmit}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AddPostForm;
