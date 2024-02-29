import axios from "axios";

function createInstance(baseURL) {
  const axiosInstance = axios.create({ baseURL }); 

  axiosInstance.interceptors.request.use(
    (config) => {
      if (config.headers) {
        config.headers.Accept = "application/json";
        if (localStorage.getItem("token")) {
          config.headers.Authorization = "Bearer " + localStorage.getItem("token");
        }
      }

      return config;
    },
    (error) => Promise.reject(error) 
  );

  axiosInstance.interceptors.response.use(
    async (res) => res,
    (error) => {
      if(error.response.status === 404 || error.response.status === 400){
        if(localStorage.getItem("table_id")){
          window.location.href = `/connect/${localStorage.getItem("table_id")}`
          localStorage.clear()
        }else{
          window.location.href = "/404"
          localStorage.clear()
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}

const instance = (url, data) =>
  createInstance("https://tezzcafe.uz/api/v1", data, url);

  const instanceForPhoto = (url, data) =>
  createInstance(`https://tezzcafe.uz`, data, url);

export const useGet = (url, data) => {
  return instance(url, data).get(url);
};

export const usePost = (url, data) => {
  return instance(url, data).post(url, data);
};

export const usePatch = (url, data) => {
  return instance(url, data).patch(url, data);
};
export const usePut = (url, data) => {
  return instance(url, data).put(url, data);
};

export const useDelete = (url, data) => {
  return instance(url, data).delete(url, data);
};

export const useGetPhoto = (url, data) => {
  return instanceForPhoto(url, data).get(url, data);
};