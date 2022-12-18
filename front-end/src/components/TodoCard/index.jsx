import React from 'react'
import { Box, Button, Card, CardActions, CardContent, FilledInput, IconButton, TextField, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export const TodoCard = () => {
  return (
    <Card sx={{ minWidth: 275, marginY:4 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Typography variant="h5" component="div">
            Todo title
          </Typography>
          <IconButton aria-label="delete" size="large">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Box>
        <FilledInput
          multiline
          fullWidth
          readOnly
          id="filled-multiline-static"
          label="Multiline"
          rows={4}
          defaultValue="Todo content"
        />
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Button color="error">
          Move to
        </Button>
        <Button>
          Edit
        </Button>
        <Button color="success">
          Move to
        </Button>
      </CardActions>
    </Card>
  );
};