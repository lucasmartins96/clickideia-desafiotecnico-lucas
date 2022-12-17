import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { GroupTodos } from '../GroupTodos';

export const TodosDashboard = () => {
  return (
    <Grid container>
      <GroupTodos />
      <GroupTodos />
      <GroupTodos />
    </Grid>
  );
};
