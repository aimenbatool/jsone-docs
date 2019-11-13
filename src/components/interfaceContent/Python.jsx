import React from 'react';
import { Box, Container } from '@material-ui/core';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Python = () => {
  const installation = '> pip install json-e';
  const importGuide = `import jsone
template = {"a": {"$eval": "foo.bar"}}
context = {"foo": {"bar": "zoo"}}
print(jsone.render(template, context))  # -> {"a": "zoo"}`;
  const customFunction = `template = {"$eval": "foo(1)"}
template = {"$eval": "foo(1)"}
print(jsone.render(template, context))  # -> 3`;

  return (
    <Container>
      <Box>
        The Python distribution is installed with
        <SyntaxHighlighter language="python" style={prism}>
          { installation }
        </SyntaxHighlighter>

        The distribution exposes as
        <b> render </b>
        function
        <SyntaxHighlighter language="python" style={prism}>
          { importGuide }
        </SyntaxHighlighter>

        and also allows custom functions in the context:
        <SyntaxHighlighter language="python" style={prism}>
          { customFunction }
        </SyntaxHighlighter>

      </Box>
    </Container>
  );
};

export default Python;
