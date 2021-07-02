import axios from "axios";

export default class CvLanguageService {
    getAll(){
        return axios.get("http://localhost:8080/api/cvlanguages/getAll");
    }
    add(link){
        return axios.post("http://localhost:8080/api/cvlanguages/add",link)
    }
    getAllByCandidateId(candidateId) {
        return axios.get("http://localhost:8080/api/cvlanguages/getallbycandidateid?candidateId=" + candidateId);
      }

    delete(cvLanguage){
        return axios.post("http://localhost:8080/api/cvlanguages/delete",cvLanguage);
    }
}