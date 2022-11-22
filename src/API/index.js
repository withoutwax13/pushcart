import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.pushcart.com/' //api baseurl
})