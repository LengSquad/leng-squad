import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from './Main'
import './index.css';

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <Main/>
    </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
