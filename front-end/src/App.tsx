import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import {
  CssBaseline,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
} from '@mui/material';
import { Stack } from '@mui/system';
import { NewTodoForm } from './components/NewTodoForm';
import { TodosDashboard } from './components/TodosDashboard';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <>
      <NewTodoForm />
      <TodosDashboard />
    </>
  );
}
