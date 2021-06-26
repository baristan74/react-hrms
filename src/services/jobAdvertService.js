import axios from "axios"

export default class JobAdvertService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobAdverts/getall")
    }

    getAllByEmployerId(employerId){
        return axios.get("http://localhost:8080/api/jobAdverts/getallbyemployerid?employerId="+employerId)
    }

    getAllByIsConfirmedByEmployee(){
        return axios.get("http://localhost:8080/api/jobAdverts/getallbyisconfirmedbyemployee")
    }

    add(jobAdvert) {
        return axios.post("http://localhost:8080/api/jobAdverts/add", jobAdvert);
      }

    changeActiveStatus(id){
        return axios.post("http://localhost:8080/api/jobAdverts/changeactivestatus?id="+id)
    }

    changeIsConfirmedByEmployee(jobAdvertId){
        return axios.post("http://localhost:8080/api/jobAdverts/changeisconfirmedbyemployee?jobAdvertId="+jobAdvertId)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/jobAdverts/getById?id="+id)
    }

    getAllByIsConfirmedByEmployeeFalse(){
        return axios.get("http://localhost:8080/api/jobAdverts/getallbyisconfirmedbyemployeefalse")
    }

    getAllActiveAndByPageNumber(pageNumber) {
        return axios.get(
          "http://localhost:8080/api/jobAdverts/getallbyactiveandpagination?pageNumber=" +pageNumber);
    }
    
}