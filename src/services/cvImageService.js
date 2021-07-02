import axios from "axios";

export default class CvImageService {
  add(candidateId) {
    return axios.post("http://localhost:8080/api/cvimages/add?candidateId="+candidateId);
  }
  getByCandidateId(candidateId){
      return axios.get("http://localhost:8080/api/cvimages/getbycandidateid?candidateId="+candidateId);
  }

  
}