const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{

    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "2f42e79e-9a25-4407-a09d-af2d9da14f31"}}
    )
        return res.status(r.status).json(r.data)
  }catch(e){
    return res.status(e.response.status).json(e.response.data)
  }
  
  
});

app.listen(3001);