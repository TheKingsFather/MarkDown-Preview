# a markdown preview written in typescript

A real-time markdown editor and previewer built with React and TypeScript. The application features a split-pane interface where users can write markdown syntax in the left editor panel and see the rendered HTML output instantly in the right preview panel. The app uses the Marked library for markdown parsing and supports GitHub Flavored Markdown features.
Key Features:

Real-time markdown preview with live updates
Split-pane layout with editor and preview sections
GitHub Flavored Markdown support (tables, strikethrough, task lists)
Syntax highlighting for code blocks
Support for all standard markdown elements (headers, lists, links, images, blockquotes)
Pre-loaded with comprehensive example content
Responsive design with styled toolbars
TypeScript implementation for type safety
FontAwesome icons integration

Technologies Used:

React with Hooks (useState, useEffect)
TypeScript
Marked.js library for markdown parsing
CSS for styling and layout
dangerouslySetInnerHTML for rendering parsed HTML

The application dynamically loads the Marked library and configures it for optimal markdown rendering with line breaks and GitHub flavored markdown enabled.
