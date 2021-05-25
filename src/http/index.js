import axios from 'axios';
const io = axios.create({
  baseURL:'/api',
  timeout:30*1000
})
io.interceptors.response.use(res=>res.data,err=>{
  console.log(err)
})
export default io