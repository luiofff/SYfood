const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "4c0913e8fbmshee3d5797b276796p1dabc3jsnd83be6ecfb8b",
});
const openai = new OpenAIApi(configuration);