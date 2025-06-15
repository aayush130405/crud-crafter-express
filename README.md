# express-crudify

A modern, extensible CRUD API built with [Express.js](https://expressjs.com/) featuring **custom logging** using [Winston](https://github.com/winstonjs/winston) and [Morgan](https://github.com/expressjs/morgan). This project demonstrates best practices for RESTful API development and structured logging, making it an ideal foundation for scalable backend applications.

---

## 🚀 Features

- **CRUD Operations:** Create, Read, Update, and Delete resources via RESTful endpoints.
- **Custom Logging:** All HTTP requests and application logs are handled by a custom logger using Winston and Morgan.
- **File-based Logging:** Logs are saved to files for easy debugging and monitoring.
- **JSON API:** Communicates using standard JSON payloads.
- **Express.js Foundation:** Built on the industry-standard Node.js framework.
- **Easy to Extend:** Simple structure for adding authentication, validation, or database integration.

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```sh
git clone https://github.com/your-username/express-crudify.git
cd express-crudify
npm install
```

### Running the Server

```sh
npm start
```

The server will start on [http://localhost:3000](http://localhost:3000).

---

## 🛠️ API Endpoints

| Method | Endpoint      | Description           |
|--------|--------------|-----------------------|
| POST   | `/items`     | Create a new item     |
| GET    | `/items`     | Get all items         |
| GET    | `/items/:id` | Get a single item     |
| PUT    | `/items/:id` | Update an item        |
| DELETE | `/items/:id` | Delete an item        |

### Example Request

**POST /items**

```json
{
  "name": "Ice Tea",
  "price": 50
}
```

---

## 📋 Logging

- **Custom logger** is implemented in `logger.js` using Winston.
- **Morgan** is configured to use the custom logger for HTTP request logs.
- Logs are output to both the console (with color and formatting) and to log files for persistent storage.

---

## 🗂️ Project Structure

```
.
├── index.js        # Main application entry point
├── logger.js       # Custom Winston logger configuration
├── package.json
└── ...
```

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or new features.

---

## 📄 License

This project is licensed under the MIT License.

---

## ✨ Inspiration

Built as a learning resource and a foundation for robust backend services with