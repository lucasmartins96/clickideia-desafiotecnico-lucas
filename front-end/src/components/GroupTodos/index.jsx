import React from 'react'
import { Grid, Typography } from "@mui/material";
import { TodoCard } from '../TodoCard';

export const GroupTodos = () => {
  return (
    <Grid item xs={4} paddingX={8}>
      <Typography align="center" variant="h4">Group Title</Typography>
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </Grid>
  );
};