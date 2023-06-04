import { Col, Row } from 'react-bootstrap';
import './ContactInformation.css'
import { useState } from 'react';
import { values } from '../../node_modules/@mui/system/esm/breakpoints';
import axios from 'axios';

export default function ContactInformation(){
    const [alert_message, setAletMessage] = useState("");
    const [user_contact_info,setUserContactInfo] = useState({
        user_data:{
            study_user : false,
            youth_user : false,
            office_user : false,
            startup_user : false,
            prestartup_user : false,
        },
        information_data:{
            confer_information : false,       
            idea_information : false,
            mento_information : false,
            other_information : false,
            study_information : false,
        },
        content_data:{
            contact_name: "",
            contact_number_email: "",
            content_textarea: ""
        }
    });

    const onChange = ({target})=>{
        let data_key = target.id.split('_')[1] + "_data";
        if (target.id.indexOf('_mobile') !== -1){
            let web_input_id = target.id.split('_mobile')[0];
            let web_input = document.getElementById(web_input_id);

            web_input.checked = target.checked;
            
            let user_contact_info_copy = {...user_contact_info};
            user_contact_info_copy[data_key][web_input_id] = target.checked;

            setUserContactInfo(user_contact_info_copy);
        }
        else{
            let mobile_input_id = target.id+'_mobile'
            let mobile_input = document.getElementById(mobile_input_id);

            mobile_input.checked = target.checked;

            let user_contact_info_copy = {...user_contact_info};
            user_contact_info_copy[data_key][target.id] = target.checked;

            setUserContactInfo(user_contact_info_copy);
        }
        console.log(user_contact_info);
    }

    const onChangeContent = (e) =>{
        let target = e.target;

        if (target.id.indexOf('_mobile') !== -1){
            let web_input_id = target.id.split('_mobile')[0];
            let web_input = document.getElementById(web_input_id);
            
            web_input.value = target.value;
            
            let user_contact_info_copy = {...user_contact_info};
            user_contact_info_copy['content_data'][web_input_id] = target.value;

            setUserContactInfo(user_contact_info_copy);
        }
        else{
            let mobile_input_id = target.id+'_mobile'
            let mobile_input = document.getElementById(mobile_input_id);

            mobile_input.value = target.value;

            let user_contact_info_copy = {...user_contact_info};
            user_contact_info_copy['content_data'][target.id] = target.value;

            setUserContactInfo(user_contact_info_copy);

        }
        console.log(user_contact_info);
    }

    const sendData = () => {
        let server_name = process.env.REACT_APP_SERVER_NAME;
        let server_port = process.env.REACT_APP_SERVER_PORT;

        let server_address = server_name + ":" + server_port;

        let api_address = server_address + '/api/v1/user/contactinfo'
        
        console.log(api_address);


        let condition_1 = user_contact_info['content_data']["contact_name"] !== "";
        let condition_2 = user_contact_info['content_data']["contact_number_email"] !== "";
        let condition_3 = user_contact_info['content_data']["content_textarea"] !== "";
        let condition_4 = false
        for (let key in user_contact_info['user_data']){ condition_4 = condition_4 || user_contact_info['user_data'][key] };
        let condition_5 = false
        for (let key in user_contact_info['information_data']){ condition_5 = condition_5 || user_contact_info['information_data'][key]};
        console.log(condition_4, condition_5)

        let alert_message_list = document.getElementsByClassName('alert-message');

        if (condition_1 && condition_2 && condition_3){
            if (condition_4 && condition_5){
                axios.post(api_address, user_contact_info)
                .then(function(response){
                    console.log(response);
                    // window.location.replace("/")
                    setAletMessage("메세지가 보내졌습니다.");
                    for (let alert_message of alert_message_list){
                        alert_message.style.color = 'white';
                    }
                })
                .catch(function(error){
                    console.log(error);
                    setAletMessage("오류가 났습니다.");
                    for (let alert_message of alert_message_list){alert_message.style.color = '#FF3E3E';}
                })
            }
            else{
                setAletMessage("박스를 체크하지 않았습니다.");
                for (let alert_message of alert_message_list){alert_message.style.color = '#FF3E3E';}
            }
        }
        else{
            setAletMessage("내용이 비어 있습니다.");
            for (let alert_message of alert_message_list){ alert_message.style.color = '#FF3E3E';}
        }
    }

    return (
        <div id="contact_input">
            <div className='d-none d-sm-block popup_bottom'>
            <div className='contact_popup'>
                <div className='popup_size'>
                    <h1 className='title'>정보 입력</h1>
                    <h1 className='sub_title popup_padding_sizing'>실린더에 대해 더 자세히 알아보고 출시에 대한 최신 정보를 받고 싶으시다면 아래에 연락처 정보를 입력해 주세요.</h1>
                    <h1 className='sub_title'>정기적인 업데이트와 소식을 알려드리고, 추가 질문이나 참여 기회가 있을 경우 연락을 드릴 수 있습니다</h1>

                    <div id='contact_form'>
                        <Row className="justify-content-md-center">
                            <Col xs="2"></Col>
                            <Col xs="8">
                                <h1 className='caution'>해당되는 모든 항목에 체크해주시기 바랍니다. </h1>
                                <div id='contact_user'>
                                    <h1>사용자</h1>
                                    <div className='form_input'>
                                        <input type="checkbox" id="youth_user" onChange={onChange}/>
                                        <label htmlFor="youth_user">청소년</label>
                                    </div>
                                    <div className='form_input'>
                                        <input type="checkbox" id="study_user" onChange={onChange}/>
                                        <label htmlFor="study_user">대학생</label>
                                    </div>
                                    <div className='form_input'>
                                        <input type="checkbox" id="office_user" onChange={onChange}/>
                                        <label htmlFor="office_user">직장인</label>
                                    </div>
                                    <div className='form_input'>
                                        <input type="checkbox" id="startup_user" onChange={onChange}/>
                                        <label htmlFor="startup_user">스타트업 종사자</label>
                                    </div>
                                    <div className='form_input'>
                                        <input type="checkbox" id="prestartup_user" onChange={onChange}/>
                                        <label htmlFor="prestartup_user">예비 창업가</label>
                                    </div>
                                </div>

                                <div id='contact_information'>
                                    <h1>정보</h1>
                                    <div className='form_input'>
                                        <input type="checkbox" id="idea_information" onChange={onChange}/>
                                        <label htmlFor="idea_information">공모전</label>
                                    </div>
                                    <div className='form_input'>
                                        <input type="checkbox" id="confer_information" onChange={onChange}/>
                                        <label htmlFor="confer_information">컨퍼런스</label>
                                    </div>
                                    <div className='form_input'>
                                        <input type="checkbox" id="study_information" onChange={onChange}/>
                                        <label htmlFor="study_information">스터디</label>
                                    </div>
                                    <div className='form_input'>
                                        <input type="checkbox" id="mento_information" onChange={onChange}/>
                                        <label htmlFor="mento_information">멘토링</label>
                                    </div>
                                    <div className='form_input'>
                                        <input type="checkbox" id="other_information" onChange={onChange}/>
                                        <label htmlFor="other_information">기타(내용 입력)</label>
                                    </div>
                                </div>
                                <div className='d-none d-sm-block'>
                                    <div id='contact_content'>
                                        <h1>내용</h1>
                                        <input id='contact_name' type="text" placeholder='이름' onChange={onChangeContent}/>
                                        <input id='contact_number_email' type="text" placeholder='연락처/이메일' onChange={onChangeContent}/>
                                        <br></br>
                                        <textarea id='content_textarea' placeholder='내용을 입력해주세요...' onChange={onChangeContent}></textarea>
                                    </div>
                                </div>
                                <div className='alert-message'>{ alert_message }</div>
                                <article className='greenHoverButton contact_submit'>
                                    <input type="button" onClick={sendData} />
                                    <div>
                                        <span>제출하기</span>
                                    </div>
                                </article>
                                <h1 className='contact_number'>관련 문의 : 010-7250-6297 / Silinder 대표 박상언</h1>
                            </Col>
                            <Col xs="2"></Col>
                        </Row>
                    </div>
                </div>                
            </div>
            </div>

            <div className='d-block d-sm-none popup_mobile_bottom'>
                <div className='contact_popup contact_popup_mobile'>
                    <div className='popup_size_mobile'>
                        <h1 className='title'>정보 입력</h1>
                        <h1 className='sub_title'>해당되는 모든 항목에 체크해주시기 바랍니다.</h1>

                        <div id='contact_form'>
                            <Row className="justify-content-md-center">
                                <Col xs="1"></Col>
                                <Col xs="10">
                                    <div id='contact_user_mobile'>
                                        <h1>사용자</h1>
                                        <div className='form_input'>
                                            <input type="checkbox" id="youth_user_mobile" onChange={onChange}/>
                                            <label htmlFor="youth_user_mobile">청소년</label>
                                        </div>
                                        <div className='form_input'>
                                            <input type="checkbox" id="study_user_mobile" onChange={onChange}/>
                                            <label htmlFor="study_user_mobile">대학생</label>
                                        </div>
                                        <div className='form_input'>
                                            <input type="checkbox" id="office_user_mobile" onChange={onChange}/>
                                            <label htmlFor="office_user_mobile">직장인</label>
                                        </div>
                                        
                                    </div>
                                    <div id='contact_user_second'>
                                        <div className='form_input'>
                                            <input type="checkbox" id="startup_user_mobile" onChange={onChange}/>
                                            <label htmlFor="startup_user_mobile">스타트업 종사자</label>
                                        </div>
                                        <div className='form_input'>
                                            <input type="checkbox" id="prestartup_user_mobile" onChange={onChange}/>
                                            <label htmlFor="prestartup_user_mobile">예비 창업가</label>
                                        </div>
                                    </div>

                                    <div id='contact_information_mobile'>
                                        <h1>정보</h1>
                                        <div className='form_input'>
                                            <input type="checkbox" id="idea_information_mobile" onChange={onChange}/>
                                            <label htmlFor="idea_information_mobile">공모전</label>
                                        </div>
                                        <div className='form_input'>
                                            <input type="checkbox" id="confer_information_mobile" onChange={onChange}/>
                                            <label htmlFor="confer_information_mobile">컨퍼런스</label>
                                        </div>
                                        <div className='form_input'>
                                            <input type="checkbox" id="study_information_mobile" onChange={onChange}/>
                                            <label htmlFor="study_information_mobile">스터디</label>
                                        </div>
                                        
                                    </div>
                                    <div id='contact_information_second'>
                                        <div className='form_input'>
                                            <input type="checkbox" id="mento_information_mobile" onChange={onChange}/>
                                            <label htmlFor="mento_information_mobile">멘토링</label>
                                        </div>
                                        <div className='form_input'>
                                            <input type="checkbox" id="other_information_mobile" onChange={onChange}/>
                                            <label htmlFor="other_information_mobile">기타(내용 입력)</label>
                                        </div>
                                    </div>
                                    <div className='d-block d-sm-none mobile'>
                                        <div id='contact_content'>
                                            <h1>내용</h1>
                                            <input id='contact_name_mobile' type="text" placeholder='이름' onChange={onChangeContent}/>
                                            <input id='contact_number_email_mobile' type="text" placeholder='연락처/이메일' onChange={onChangeContent}/>
                                            <br></br>
                                            <textarea id='content_textarea_mobile'  placeholder='내용을 입력해주세요...' onChange={onChangeContent}></textarea>
                                        </div>
                                    </div>
                                    <div className='alert-message'>{ alert_message }</div>
                                    <article className='greenHoverButton contact_submit'>
                                        <input type="button" onClick={sendData} />
                                        <div>
                                            <span>제출하기</span>
                                        </div>
                                    </article>
                                    <h1 className='contact_number'>관련 문의 : 010-7250-6297 / Silinder 대표 박상언</h1>
                                </Col>
                                <Col xs="1"></Col>
                            </Row>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    );
}