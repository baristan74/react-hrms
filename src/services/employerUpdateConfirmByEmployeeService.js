import axios from "axios";

export default class EmployerUpdateConfirmByEmployeeService {
    getAll(){
        return axios.get("http://localhost:8080/api/employerupdateconfirmbyemployees/getall");
    }
    add(updateEmployer){
        return axios.post("http://localhost:8080/api/employerupdateconfirmbyemployees/add",updateEmployer)
    }
    getAllByConfirmedFalse() {
        return axios.get("http://localhost:8080/api/employerupdateconfirmbyemployees/getallbyconfirmfalse");
      }

    getById(updateEmployerId){
        return axios.get("http://localhost:8080/api/employerupdateconfirmbyemployees/getById?employerId="+updateEmployerId);
    }

    changeIsConfirmedByEmployee(employerId){
        return axios.post("http://localhost:8080/api/employerupdateconfirmbyemployees/changeisconfirmedbyemployee?employerId="+employerId)
    }
}