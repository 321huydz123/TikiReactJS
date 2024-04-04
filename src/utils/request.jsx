import axios from  'axios'

const request = axios.create({
    baseURL: 'https://codesandbox.io/p/devbox/api-tiki-86yfl7?fbclid=IwAR1skNuBOC9BrD-te4U3iVS9bOD-osDFvytbkP7VK0QWp8g9aQ8wQ_9zNz8&file=%2Fdata.json%3A1575%2C27'
})

export const get = async (path, options ={}) => {
    const response = await request.get(path, options)
    return response.data
}
export const post = async ( path , options = {}) => {
    const response = await request.post(path , options)
    return response
}
export const put = async ( path , options = {}) => {
    const response = await request.put(path , options)
    return response
}
export const deleteById = async ( path , options = {}) => {
    const response = await request.delete(path , options)
    return response
}
export default request