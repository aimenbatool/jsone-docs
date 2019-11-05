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

const JavaScript = () => {
  const classes = useStyle();

  const installation = `npm install --save json-e
yarn add json-e`;
  const importGuide = `import jsone from 'json-e';
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

        The module exposes following interface:
        <SyntaxHighlighter language="javascript" style={prism}>
          { importGuide }
        </SyntaxHighlighter>

        Note that the context can contain functions, and those
        functions can be called from the template:
        <SyntaxHighlighter language="javascript" style={prism}>
          { functionsGuide }
        </SyntaxHighlighter>

        <Box className={classes.noteWrapper}>
          <span className={classes.note}>NOTE:</span>
        Context functions are called synchronously. Any complex asynchronous
        operations should be handled before rendering the template.
        </Box>

        <Box className={classes.noteWrapper}>
          <span className={classes.note}>NOTE:</span>
        If the template is untrusted, it can pass arbitrary data to functions
        in the context, which must guard against such behavior.
        </Box>

        <h3>Brwoser</h3>
        JSON-e is distributed as a CommonJS package is not designed to be included
        directly in a browser with script. Instead, it must be incorporated using
        a tool that understands CommonJS such as Webpack. See Neutrino for an easy,
        configuration-free way to build such applications.
      </Box>
    </Container>
  );
};

export default JavaScript;
