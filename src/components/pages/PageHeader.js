import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'

class PageHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">Happy Coding</h1>
        <CssBaseline />
      </header>
    );
  }
}

export default PageHeader;