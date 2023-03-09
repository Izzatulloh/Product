import axios from "axios";
import { cookies } from './cookie'
const axiosApi = axios.create()
const onRequest = (config) => {
  const token = cookies.get("token")
  return {
    ...config,
    headers: {
      "X-API-KEY": token,
    },
  }
}
axiosAPI.interceptors.request.use(onRequest)
export default axiosApi