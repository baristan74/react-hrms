import axios from "axios"

export default class CvCoverLetterService {
    getAll(){
        return axios.get("http://localhost:8080/api/cvcoverletters/getall");
    }
    getAllByCandidateId(candidateId){
        return axios.get("http://localhost:8080/api/cvcoverletters/getallbycandidateid?candidateId="+candidateId)
    }
    add(coverletter){
        return axios.post("http://localhost:8080/api/cvcoverletters/add",coverletter)
    }
}
