import { Col } from "react-bootstrap";
import CheckBox from "./CheckBox";
import './CategoryJobGroup.css';

export default function CategoryJobGroup(){
    const job_list = [
        {id:'plan',name:'기획자'},
        {id:'design',name:'기획자'},
        {id:'dev',name:'개발자'},
        {id:'market',name:'마케터'},
    ]

    return (
        job_list.map((job)=>(
            <Col xs="3">
            <CheckBox name={job.name} id={job.id} class_name={'jobGroup'}></CheckBox>
            </Col>
        ))
    );
}