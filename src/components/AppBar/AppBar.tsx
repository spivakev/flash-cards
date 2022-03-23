import { AppBar as MUIAppbar, Typography } from '@mui/material';
import { memo } from 'react';

// todo children
export const AppBar = memo(() => {
  //todo title from redux
  const title = 'Наборы';
  return (
    <MUIAppbar data-testid={'AppBar'}>
      <Typography variant={'subtitle1'}>{title}</Typography>
    </MUIAppbar>
  );
});
AppBar.displayName = 'AppBar';
