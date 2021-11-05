import axios from "axios";

export default class PersonsaService {
  // url = "http://localhost:9090/api/v1/";
  url = "https://gamificacionv3.herokuapp.com/api/alumnos";

  getAll() {
    return axios.get(this.url);
  }

  save(alumno) {
    return axios.post(this.url, alumno);
  }
}
