import axios from "axios";

export default class EmployerService {
    getAll(){
        return axios.get("http://localhost:8080/api/employers/getall");
    }
    add(employer){
        return axios.post("http://localhost:8080/api/employers/add",employer)
    }
    changeIsConfirmedByEmployee(employerId){
        return axios.post("http://localhost:8080/api/employers/changeisconfirmedbyemployee?employerId="+employerId)
    }
    getAllByConfirmedFalse() {
        return axios.get("http://localhost:8080/api/employers/getallbyconfirmedfalse");
      }

    getById(employerId){
        return axios.get("http://localhost:8080/api/employers/getbyid?employerId="+employerId);
    }
}