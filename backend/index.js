const express = require("express"); // importing express module
const cors = require("cors"); // importing cors module
const { default: axios } = require("axios"); // importing axios module

// creating an instance of express
const app = express();

// using middleware to parse json request bodies
app.use(express.json());

// using cors middleware to allow cross-origin requests
app.use(cors({ origin: true }));

// defining a route for user authentication
app.post("/authenticate", async (req, res) => {
  // destructuring the username from the request body
  const { username } = req.body;

  try {
    // making a put request to the chatengine api to create a new user
    const r = await axios.put(
      // the endpoint for creating a new user
      'https://api.chatengine.io/users/',
      // the new user data
      {
        username: username,
        secret: username,
        first_name: username
      },
      // setting the private-key header with the chatengine api key
      {
        headers: { "private-key": "2f42e79e-9a25-4407-a09d-af2d9da14f31" }
      }
    );

    // returning the response from the chatengine api
    return res.status(r.status).json(r.data);
  } catch (e) {
    // if there was an error, return the error response from the chatengine api
    return res.status(e.response.status).json(e.response.data);
  }
});

// starting the express server on port 3001
app.listen(3001);