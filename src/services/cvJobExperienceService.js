import axios from "axios";

export default class CvJobExperienceService {
  getAll() {
    return axios.get("http://localhost:8080/api/cvjobexperiences/getall");
  }

  add(cvjobexperience) {
    return axios.post("http://localhost:8080/api/cvjobexperiences/add",cvjobexperience);
  }
  getAllByCandidateIdOrderByLeaveDateDesc(candidateId){
      return axios.get("http://localhost:8080/api/cvjobexperiences/getallbycandidateidorderbyleavedatedesc?candidateId="+candidateId);
  }

  delete(cvjobexperience){
      return axios.post("http://localhost:8080/api/cvjobexperiences/delete",cvjobexperience)
  }

  
}