import axios from "axios";

export default class CvEducationService {
  getAll() {
    return axios.get("http://localhost:8080/api/cveducations/getall");
  }

  add(cvEducation) {
    return axios.post("http://localhost:8080/api/cveducations/add" ,cvEducation);
  }
  getAllByCandidateIdOrderByFinishDateDesc(candidateId){
      return axios.get("http://localhost:8080/api/cveducations/getallbycandidateidorderbyfinishdatedesc?candidateId="+candidateId);
  }

  delete(cvEducation){
    return axios.post("http://localhost:8080/api/cveducations/delete",cvEducation);
  }

  
}