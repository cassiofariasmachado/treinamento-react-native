import axios, { AxiosInstance } from 'axios';

const createInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: 'https://api.github.com/',
  });

  return instance;
};

const axiosInstance = createInstance();

export default axiosInstance;
