import React,{useState,useEffect} from "react";
import Education from "./CvCards/Education";
import Skill from "./CvCards/Skill";
import Link from "./CvCards/Link";
import Language from "./CvCards/Language";
import CoverLetter from "./CvCards/CoverLetter";
import JobExperience from "./CvCards/JobExperience";
import ProfilImage from "./CvCards/ProfilImage";
import { Grid, Image } from 'semantic-ui-react'
import CandidateService from "../../services/candidateService";

export default function CandidateCv() {

    const [candidate, setCandidate] = useState([]);

    useEffect(() => {
        let candidateService= new CandidateService();
        candidateService
        .getById(16)
        .then((result) => setCandidate(result.data.data));
    }, []);
  return (
    <div>


          <ProfilImage candidate={candidate}/>
          <CoverLetter />

      
      
      <Education />
      <Skill />
      <JobExperience />
      <Language />
      <Link />
    </div>
  );
}
