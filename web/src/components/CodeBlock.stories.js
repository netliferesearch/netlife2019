import React from 'react';
import CodeBlock from './CodeBlock';

export default {
  title: 'Components|CodeBlock',
  parameters: {
    component: CodeBlock,
    componentSubtitle: 'A CodeBlock can show code specially formatted for different programming languages. It\'s one of several content types for the PortableText component.',
  },
};

const languages = [
  'javascript',
  'typescript',
  'php',
  'xml',
  'css',
  'scss',
  'json',
  'java',
  'yaml',
  'plaintext',
  'cs'
];

const codeBlock = {};
for (let i=0; i<languages.length; i++) {
  const language = languages[i];
  codeBlock[language] = <CodeBlock language={language}>
    <p>
      I love coding in {language}! I can write for {} and if (), and it gets different formatting.
    </p>
  </CodeBlock>
}

// TODO: there has to be a better way of doing this but export cant be inside a loop...
// TODO: this should display the actual source and not the story source, which is coming with the SB 5.3 release

// added the code here and not codeBlock[0] so we can see the code in SB. Sigh. TODO: Fix when source works for the docs.
export const javaScriptBlock = () => <CodeBlock language='javascript'>
  <p>
    I love coding in javascript! I can write for {} and if (), and it gets different formatting.
  </p>
</CodeBlock>;
javaScriptBlock.story = { name: `${languages[0]} formatting` };

export const typeScriptBlock = () => codeBlock[languages[1]];
typeScriptBlock.story = { name: `${languages[1]} formatting` };

export const phpBlock = () => codeBlock[languages[2]];
phpBlock.story = { name: `${languages[2]} formatting` };

export const xmlBlock = () => codeBlock[languages[3]];
xmlBlock.story = { name: `${languages[3]} formatting` };

export const cssBlock = () => codeBlock[languages[4]];
cssBlock.story = { name: `${languages[4]} formatting` };

export const scssBlock = () => codeBlock[languages[5]];
scssBlock.story = { name: `Sass/${languages[5]} formatting` };

export const jsonBlock = () => codeBlock[languages[6]];
jsonBlock.story = { name: `${languages[6]} formatting` };

export const javaBlock = () => codeBlock[languages[7]];
javaBlock.story = { name: `${languages[7]} formatting` };

export const yamlBlock = () => codeBlock[languages[8]];
yamlBlock.story = { name: `${languages[8]} formatting` };

export const plainTextBlock = () => codeBlock[languages[9]];
plainTextBlock.story = { name: `${languages[9]} formatting` };

export const csBlock = () => codeBlock[languages[10]];
csBlock.story = { name: `${languages[10]} formatting` };

