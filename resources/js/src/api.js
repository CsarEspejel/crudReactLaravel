const axios = window.axios;
const BASE_API_URL = "http://localhost:8000/api";

export default {
    getAllPosts: () => 
        axios.get(BASE_API_URL+'/postingo'),
    getOnePost: (id) =>
        axios.get(BASE_API_URL+'/postingo/'+id+'/edit'),
    addPost: (post) =>
        axios.post(BASE_API_URL+'/postingo', post),
    updatePost: (post, id) =>
        axios.put(BASE_API_URL+'/postingo/'+id, post),
    deletePost: (id) =>
        axios.delete(BASE_API_URL+'/postingo/'+id),
}