import axios from "axios";

export default class CvLinkService {
    getAll(){
        return axios.get("http://localhost:8080/api/cvlinks/getall");
    }
    add(link){
        return axios.post("http://localhost:8080/api/cvlinks/add",link)
    }
    getAllByCandidateId(candidateId) {
        return axios.get("http://localhost:8080/api/cvlinks/getallbycandidateId?candidateId=" + candidateId);
      }

    delete(cvLink){
        return axios.post("http://localhost:8080/api/cvlinks/delete",cvLink);
    }
}