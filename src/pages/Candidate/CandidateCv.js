import React from 'react'
import Education from './CvCards/Education'
import Skill from './CvCards/Skill';
import Link from './CvCards/Link';

export default function CandidateCv() {
    return (
        <div>
            <Education/>
            <Skill/>
            <Link/>
        </div>
    )
}
