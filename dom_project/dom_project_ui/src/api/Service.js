import axios from "axios";

var URL_BACKEND = "https://localhost:44334/api/v1/";

class Service {
  constructor() {
    let service = axios.create({
      headers: { csrf: "token" },
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = (error) => {
    switch (error.response.status) {
      case 401:
        this.redirectTo(document, "/");
        break;
      case 404:
        this.redirectTo(document, "/404");
        break;
      default:
        this.redirectTo(document, "/500");
        break;
    }
    return Promise.reject(error);
  };

  redirectTo = (document, path) => {
    document.location = path;
  };

  async get(path, callback) {
    const response = await this.service.get(`${URL_BACKEND}${path}`);
    return callback(response.status, response.data);
  }

  async patch(path, payload, callback) {
    const response = await this.service.request({
      method: "PATCH",
      url: `${URL_BACKEND}${path}`,
      responseType: "json",
      data: payload,
    });
    return callback(response.status, response.data);
  }

  async post(path, payload, callback) {
    const response = await this.service.request({
      method: "POST",
      url: `${URL_BACKEND}${path}`,
      responseType: "json",
      data: payload,
    });
    return callback(response.status, response.data);
  }

  async put(path, payload, callback) {
    const response = await this.service.request({
      method: "PUT",
      url: `${URL_BACKEND}${path}`,
      responseType: "json",
      data: payload,
    });
    return callback(response.status, response.data);
  }

  async delete(path, id, callback) {
    const response = await this.service.delete(`${URL_BACKEND}${path}/${id}`);
    return callback(response.status, response.data);
  }
}

export default new Service();
