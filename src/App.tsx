import React, { useState, useEffect } from 'react';
import './index.css';

// We'll use the marked library from CDN
declare const marked: any;

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`);

  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Load marked library
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/marked/4.3.0/marked.min.js';
    script.onload = () => {
      // Configure marked for GitHub flavored markdown
      if (window.marked) {
        window.marked.setOptions({
          breaks: true,
          gfm: true
        });
        setHtmlContent(window.marked.parse(markdown));
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (window.marked) {
      setHtmlContent(window.marked.parse(markdown));
    }
  }, [markdown]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="editor-container">
          <div className="toolbar">
            <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
            Editor
          </div>
          <textarea
            id="editor"
            value={markdown}
            onChange={handleChange}
            placeholder="Enter your markdown here..."
          />
        </div>
        
        <div className="preview-container">
          <div className="toolbar">
            <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
            Previewer
          </div>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;