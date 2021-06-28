import React from 'react'
import Education from './CvCards/Education'
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import Skill from './CvCards/Skill';

export default function CandidateCv() {
    return (
        <div>
            <Education/>
            <Skill/>
        </div>
    )
}
