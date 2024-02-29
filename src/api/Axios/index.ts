import axios from 'axios'

export default axios.create({
  //process.env.REACT_APP_API
  baseURL: `https://api.chucknorris.io`,
})
