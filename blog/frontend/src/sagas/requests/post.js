import axios from 'axios';

export const requestGetPosts = () => {
  return axios.request({
    method: 'get',
    url: '/api/posts',
  });
};
