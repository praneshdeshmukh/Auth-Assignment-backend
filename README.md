# Auth-Assignment

Welcome to Auth-Assignment! 

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MongoDB instance set up or access to a MongoDB database.
- Postman or any other API testing tool.
- install all packages from package.json

## Installation

1. Clone this repository:

```terminal 
  git clone https://github.com/praneshdeshmukh/Auth-Assignment-backend
.git
```

3. Navigate to the project directory:
```terminal
  cd Express-JS/backend
```

5. Install the dependencies:
```terminal
  npm install
```

7. Create a `.env` file in the root directory and set your MongoDB connection URI:
```javascript
MONGODB_URI=mongodb+srv://<yourusername>:<yourpassword>@cluster0.zfcokkr.mongodb.net/yourdatabasename
```

## Usage

1. Start the application:
```terminal
npm run start
```

3. Open Postman or your preferred API testing tool.

## API Endpoints

- **POST : /signup:** Create a new user. 
- **POST : /login:**  login into account.
- **GET  :  /  : **   get account details.

API requests and responses should be in JSON format.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push to your branch.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
