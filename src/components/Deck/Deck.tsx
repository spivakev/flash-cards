import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { useDeckStyles } from './Deck.styles';
import { DeckProps } from './Deck.types';

export const Deck = memo(({ id, name }: DeckProps) => {
  const classes = useDeckStyles();

  return (
    <Card data-testid={`Deck_${id}`} className={classes.root}>
      <CardContent>
        <Grid
          container
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <AddAPhotoIcon sx={{ fontSize: 40, color: '#e0e0e0' }} />
          <Typography variant="subtitle1">{name}</Typography>
        </Grid>
      </CardContent>
    </Card>
  );
});
