import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles
} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import teal from '@material-ui/core/colors/teal';
import 'typeface-roboto';

import Header from './Header/Header';
import Feed from './Feed/Feed';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import { get } from './requests';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[700]
    }
  }
});

const useStyles = makeStyles({
  root: {
    width: theme.spacing(75),
    marginTop: theme.spacing(15),
    margin: '0 auto'
  }
});

const App: React.FC = () => {
  const [page, setPage] = useState('feed');
  const [id, setId] = useState<string>('');
  const classes = useStyles();

  get('/users').then(response => {
    setId(response.data[0]._id);
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header setPage={setPage} />
      <div className={classes.root}>
        {
          page === 'profile' && <ProfileInfo id={id} />
        }
        <Feed page={page} />
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

