const PORT = 8000

require('dotenv').config()
const {Octokit} = require('@octokit/core');

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res)=>{
    res.send('hi')
})

app.get('/projects', (req, res)=>{
  
    const octokit = new Octokit({ auth: process.env.REACT_APP_API_KEY })
          const fetchProjects = async () => {
              try {
                  const response = await octokit.request("GET /users/{owner}/repos", {
                      owner: "Habeebah157",
                      per_page: 1000,
                  })

                 console.log(response.data)
                res.send(response.data)


              } catch (error) {
                  console.error(error) // Handle any errors that may occur during the request
              }

          }
          fetchProjects()
      
})
// https://www.youtube.com/watch?v=FcwfjMebjTU

app.listen(8000, () => console.log(`Backend is running on port ${PORT}`))