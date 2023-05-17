import { Col } from "react-bootstrap";
import CheckBox from "./CheckBox";
import './CategoryInform.css';

export default function CategoryInform({check_state, setCheckState}){
    const inform_list = [
        {id:'contest',name:'공모전'},
        {id:'network',name:'네트워킹'},
        {id:'consult',name:'컨설팅'},
        {id:'study',name:'스터디'},
    ]

    return (
        inform_list.map((inform)=>(
            <Col xs="2" md="3" lg="2">
            <CheckBox 
            name={inform.name} 
            id={inform.id} 
            class_name={'informGroup'}
            check_state={check_state}
            setStateCheck={setCheckState}
            ></CheckBox>
            </Col>
        ))
    );
}