import { Button, TextField } from '@mui/material';
import { Container, Stack } from '@mui/system';
import React from 'react';

export const NewTodoForm = () => {
  return (
    <Container maxWidth="sm">
      <Stack component="form" spacing={4} marginY={8}>
        <TextField id="todo-title" label="Todo title" variant="standard" />
        <TextField
          id="standard-multiline-static"
          label="Todo content"
          multiline
          rows={4}
          defaultValue="Your content"
          variant="standard"
        />
        <Button variant="contained">New todo</Button>
      </Stack>
    </Container>
  );
};
