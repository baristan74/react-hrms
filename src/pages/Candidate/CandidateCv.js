import React from 'react'
import Education from './CvCards/Education'
import Skill from './CvCards/Skill';
import Link from './CvCards/Link';
import Language from './CvCards/Language';
import JobExperience from './CvCards/JobExperience';

export default function CandidateCv() {
    return (
        <div>
            <Education/>
            <Skill/>
            <JobExperience/>
            <Language/>
            <Link/>
        </div>
    )
}
