# Simple Rick AI Assistant

A lightweight AI coding assistant web interface with colorized letters and numbers, powered by OpenAI GPT-4.

## Features

- Chat UI with colorized letters (red) and numbers (green)
- Simple AI integration via OpenAI API
- Works in browser, ready for Electron or Termux floating overlay
- Auto-scrolls and allows sending messages via Enter key or button

---

## Project Structure

```text
simple-rick-ai/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env          # ignored by git
├── frontend/
│   ├── index.html
│   ├── simple_rick.html
│   ├── styles/
│   │   └── custom.css
│   └── static/
│       └── images/
│           └── favicon.ico
└── README.md
