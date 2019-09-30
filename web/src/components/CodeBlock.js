import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import php from 'highlight.js/lib/languages/php';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import json from 'highlight.js/lib/languages/json';
import java from 'highlight.js/lib/languages/java';
import yaml from 'highlight.js/lib/languages/yaml';
import plaintext from 'highlight.js/lib/languages/plaintext';
import cs from 'highlight.js/lib/languages/cs';

const CodeBlock = ({ children, language }) => {
  const code = useRef(null);

  useEffect(() => {
    if (code) {
      hljs.registerLanguage('javascript', javascript);
      hljs.registerLanguage('typescript', typescript);
      hljs.registerLanguage('php', php);
      hljs.registerLanguage('xml', xml);
      hljs.registerLanguage('css', css);
      hljs.registerLanguage('scss', scss);
      hljs.registerLanguage('json', json);
      hljs.registerLanguage('java', java);
      hljs.registerLanguage('yaml', yaml);
      hljs.registerLanguage('plaintext', plaintext);
      hljs.registerLanguage('cs', cs);
      hljs.highlightBlock(code.current);
    }
  }, []);

  return (
    <div className="text-base">
      <code ref={code} className={language}>
        {children}
      </code>
    </div>
  );
};

CodeBlock.propTypes = {
  language: PropTypes.oneOf([
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
  ])
};

export default CodeBlock;
