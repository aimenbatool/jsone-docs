import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container } from '@material-ui/core';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const useStyle = makeStyles((theme) => ({
  noteWrapper: {
    marginTop: theme.spacing(1.25),
  },
  note: {
    backgroundColor: '#ecdb02',
    padding: theme.spacing(0.25),
    borderRadius: theme.spacing(0.25),
    marginRight: theme.spacing(0.5),
    border: '1px solid',
  },
}));

const TypeScript = () => {
  const classes = useStyle();

  const installation = `> npm install --save json-e
> yarn add json-e`;
  const importGuide = `import jsone = require('json-e');
var template = {a: {$eval: "foo.bar"}};
var context = {foo: {bar: "zoo"}};
console.log(jsone(template, context));
  // -> { a: 'zoo' }`;

  const functionsGuide = `var template = {$eval: "foo(1)"};
var context = {"foo": function(x) { return x + 2; }};
console.log(jsone(template, context));  // -> 3`;

  return (
    <Container>
      <Box>
        The JS module is installed with either of
        <SyntaxHighlighter language="javascript" style={prism}>
          { installation }
        </SyntaxHighlighter>

        <p>
          <span className={classes.note}>NOTE:</span>
          Type definitions are included with this package, so there is no
          need of seperate @types/.. installation.
        </p>
        <p>
          As
          <b> json-e </b>
          is a CommonJS module, the package must be imported like this
          {' '}
          <a href="https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require">(more..)</a>
          {' '}
          for type definitions to work properly:
        </p>
        <SyntaxHighlighter language="javascript" style={prism}>
          { importGuide }
        </SyntaxHighlighter>
      </Box>
    </Container>
  );
};

export default TypeScript;
