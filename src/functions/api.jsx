import  {get,post} from 'axios';
import { getToken } from './token';



export const fetchAll = async (form) => {
    const tokenRes = await post('http://localhost:8000/api/rest-auth/login/', form);
    const {token} = await tokenRes.data;
    const userRes = await get('http://localhost:8000/api/rest-auth/user/', {
        headers: {
            Authorization: `Token ${token}`,
        }
    });
    const user = await userRes.data;
    return {
        token: `Token ${token}`,
        user,


    }
}

export const fetchBlogs =  async () => {
    const blogsRes =await  get('http://localhost:8000/api/blogs', {
        headers: {
            Authorization: `${getToken()}`,

        }
    });

    const blogsData = await blogsRes.data
    return {blogsData};

}

export const fetchBlogPost = async (id) => {
    const res = await get(`http://localhost:8000/api/blogs/${id}`, {headers: {Authorization: getToken()}});
    const data = await res.data
    return data;

}
