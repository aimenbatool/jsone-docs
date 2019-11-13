import React from 'react';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const useStyle = makeStyles((theme) => ({
  link: {
    color: '#1e3652',
    padding: theme.spacing(0.125),
    borderBottom: '1px solid black',
    textDecoration: 'none',
  },
}));

const GoLang = () => {
  const classes = useStyle();

  const importGuide = `import (
    "fmt"
    "github.com/taskcluster/json-e"
  )
  // Template must be given using types:
  //   map[string]interface{}, []interface{}, float64, string, bool, nil
  // The same types that json.Unmarshal() will create when targeting an interface{}
  template := map[string]interface{}{
    "result": map[string]interface{}{
      "$eval": "f() + 5",
    },
  }
  // Context can be JSON types just like template, but may also contain functions
  // these can JSON types as arguments, and return a value and optionally an error.
  context := map[string]interface{}{
    "f": func() int { return 37 },
  }
  
  func main() {
    value, err := jsone.Render(template, context)
    fmt.Printf("%#v\n", value)
  }`;

  return (
    <Container>
      <Box>
        The
        {' '}
        <a className={classes.link} href="https://godoc.org/github.com/taskcluster/json-e">golang package for json-e</a>
        {' '}
        exposes a
        <b> Render </b>
        function
        <SyntaxHighlighter language="go" style={prism}>
          { importGuide }
        </SyntaxHighlighter>
      </Box>
    </Container>
  );
};

export default GoLang;
