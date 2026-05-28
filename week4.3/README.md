# Kidney Health API

A simple Express.js API to manage kidney health data.

## Features

* Get total kidneys
* Get healthy kidneys
* Add a new kidney
* Calculate unhealthy kidneys

---

## Tech Stack

* Node.js
* Express.js

---

## Installation

Clone the repository:

```bash
git clone <your-repo-link>
```

Go inside the folder:

```bash
cd your-folder-name
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node index.js
```

Server runs on:

```bash
http://localhost:3000
```

---

## API Endpoints

### GET /

Returns kidney information.

Example Response:

```json
{
  "total kidneys": 1,
  "Unhealthy Kidneys": 1,
  "healthy kidneys": []
}
```

---

### POST /addkidney

Adds a healthy kidney.

Example Response:

```json
{
  "message": "you kidney is transplanted",
  "kidneys": [
    {
      "healthy": false
    },
    {
      "secondKidney": [
        {
          "healthy": true
        }
      ]
    }
  ]
}
```

---

## Author

Made while learning Express.js and Array filter methods.
