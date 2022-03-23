import { Grid } from '@mui/material';
import { memo } from 'react';
import { Deck } from '../../components/Deck';
import { Page } from '../../components/Page/Page'; //todo change imports
import { setsArr } from './mocks';

export const Decks = memo(() => {
  return (
    <Page>
      <Grid container data-testid={'Decks'} spacing={2}>
        {setsArr?.map(({ id, name }) => (
          <Grid item>
            <Deck id={id} name={name} key={id} />
          </Grid>
        ))}
      </Grid>
    </Page>
  );
});

Decks.displayName = 'Decks';
