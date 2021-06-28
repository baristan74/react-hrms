import axios from "axios";

export default class CvSkillService {
    getAllByCandidateId(candidateId) {
        return axios.get("http://localhost:8080/api/cvskills/getallbycandidateid?candidateId="+candidateId);
    }

    add(skill){
        return axios.post("http://localhost:8080/api/cvskills/add",skill)
    }
    
    delete(skill){
        return axios.post("http://localhost:8080/api/cvskills/delete",skill)
    }
}