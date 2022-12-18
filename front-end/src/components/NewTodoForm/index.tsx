import { Box, Button, Modal, TextField } from '@mui/material';
import { Container, Stack } from '@mui/system';
import { useState } from 'react';
import { Todo } from '../../types/Todo';

export const NewTodoForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleTitle = (value: string) => {
    setTitle(value);
  };

  const handleContent = (value: string) => {
    setContent(value);
  };

  const handleSubmit = () => {
    const todoPayload: Todo = {
      title,
      content,
      list: 'ToDo',
    };
    console.log(todoPayload);
    setOpenModal(false);
  };

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 8,
        }}
      >
        <Button variant="contained" onClick={handleOpen}>
          New todo
        </Button>
      </Box>
      <Modal open={openModal} onClose={handleClose}>
        <Stack
          component="form"
          spacing={4}
          marginY={8}
          sx={{
            bgcolor: 'white',
            width: 600,
            p: 4,
            top: '40%',
            left: '50%',
            boxShadow: 24,
            transform: 'translate(-50%, -50%)',
            position: 'absolute' as 'absolute',
          }}
        >
          <TextField
            id="todo-title"
            label="Todo title"
            variant="standard"
            onChange={(e) => handleTitle(e.target.value)}
          />
          <TextField
            id="standard-multiline-static"
            label="Todo content"
            multiline
            rows={4}
            defaultValue="Your content"
            variant="standard"
            onChange={(e) => handleContent(e.target.value)}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Create todo
          </Button>
        </Stack>
      </Modal>
    </Container>
  );
};
