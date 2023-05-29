import { Col, Row } from 'react-bootstrap';
import './ContactInformation.css'

export default function ContactInformation(){
    return (
        <div id="contact_information">
            <div id='contact_popup'>
                <div className='popup_size'>
                    <h1 className='title'>정보 입력</h1>
                    <h1 className='sub_title'>실린더에 대해 더 자세히 알아보고 출시에 대한 최신 정보를 받고 싶으시다면 아래에 연락처 정보를 입력해 주세요.</h1>
                    <h1 className='sub_title'>정기적인 업데이트와 소식을 알려드리고, 추가 질문이나 참여 기회가 있을 경우 연락을 드릴 수 있습니다</h1>

                    <div id='contact_form'>
                        <Row className="justify-content-md-center">
                            <Col xs="1"></Col>
                            <Col xs="10">
                                <h1 className='caution'>해당되는 모든 항목에 체크해주시기 바랍니다. </h1>
                                <div id='contact_user'>
                                    <h1>사용자</h1>
                                    <div className='form_input'>
                                        <input type="checkbox" id="youth_user"/>
                                        <label htmlFor="youth_user">청소년</label>
                                    </div>
                                    <div className='form_input'>
                                        <input type="checkbox" id="study_user"/>
                                        <label htmlFor="study_user">대학생</label>
                                    </div>
                                    <div className='form_input'>
                                        <input type="checkbox" id="office_user"/>
                                        <label htmlFor="office_user">직장인</label>
                                    </div>
                                    <div className='form_input'>
                                        <input type="checkbox" id="startup_user"/>
                                        <label htmlFor="startup_user">스타트업 종사자</label>
                                    </div>
                                    <div className='form_input'>
                                        <input type="checkbox" id="pre_startup_user"/>
                                        <label htmlFor="pre_startup_user">예비 창업가</label>
                                    </div>
                                </div>

                                <div id='contact_information'>
                                    <h1>정보</h1>
                                    <div className='form_input'>
                                        <input type="checkbox" id="idea_information"/>
                                        <label htmlFor="idea_information">공모전</label>
                                    </div>
                                    <div className='form_input'>
                                        <input type="checkbox" id="confer_information"/>
                                        <label htmlFor="confer_information">컨퍼런스</label>
                                    </div>
                                    <div className='form_input'>
                                        <input type="checkbox" id="study_information"/>
                                        <label htmlFor="study_information">스터디</label>
                                    </div>
                                    <div className='form_input'>
                                        <input type="checkbox" id="mento_information"/>
                                        <label htmlFor="mento_information">멘토링</label>
                                    </div>
                                    <div className='form_input'>
                                        <input type="checkbox" id="other_information"/>
                                        <label htmlFor="other_information">기타(내용 입력)</label>
                                    </div>
                                </div>

                                <div id='contact_content'>
                                    <h1>내용</h1>
                                    <input id='contact_name' type="text" placeholder='이름'/>
                                    <input id='contact_number_email' type="text" placeholder='연락처/이메일'/>
                                    <br></br>
                                    <textarea placeholder='내용을 입력해주세요...'></textarea>
                                </div>
                                <article className='greenHoverButton contact_submit'>
                                    <input type="button" />
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
    );
}