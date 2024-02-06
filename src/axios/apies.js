import axios from "axios";

function createInstance(baseURL) {
  const axiosInstance = axios.create({ baseURL });
  
  axiosInstance.interceptors.request.use(
    (config) => {
      if (config.headers) {
        config.headers.Accept = "application/json";
        config.headers.Authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWVkODAyM2IxYmRiODBhM2FkMjkyMSIsInN0YXR1cyI6ImthZmVBZG1pbiIsImlhdCI6MTcwNTk1NzM4OH0.BYhLdVD2Uw56u8ae66P-dskpEtAJ6FwmxAfftMB6SV0"
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    async (res) => res,
    (error) => {
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}

const instance = (url, data) =>
  createInstance("http://45.132.106.225:1000", data, url);

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
