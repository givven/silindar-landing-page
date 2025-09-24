import './reset.css'

// import {SectionsContainer, Section} from 'react-fullpage';
import './MainPage.css';
import Category from '../components/Category';
import Contact from '../components/Contact';

import { color, motion } from "framer-motion"
import Title from '../components/Title';
import Calendar from '../components/Calendar';
import CategoryJobGroup from '../components/CategoryJobGroup';
import { Col, Row } from 'react-bootstrap';
import CategoryInform from '../components/CategoryInform';
import React, { useEffect, useState } from 'react';
// import { Cookies } from 'react-cookie';
import CheckBox from '../components/CheckBox';
import DemoApp from '../components/DemoApp';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { formatDate } from '@fullcalendar/core';
import { createSelector } from 'reselect';
import { getHashValues } from '../components/utils';
import { connect } from 'react-redux';
import actionCreators from '../actions'
import AdvanceReservation from '../components/AdvanceReservation';
import CalendarNote from '../components/CalendarNote';
import ServiceSummary from '../components/ServiceSummary';
import ServiceIntroduce from '../components/ServiceIntroduce';
import ServiceSummaryImage from '../components/ServiceSummaryImage';
import ContactInformation from '../components/ContactInformation';
import MobileNavbar from '../components/MobileNavbar';
import { Alert } from '@mui/material';
import CalendarPopup from '../components/CalendarPopup';
import Dropdown from '../components/Dropdown';
import axios from 'axios';


class MainPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      scrollPosition: 0,
      jobId: [],
      informId: [],
      schedule_data: [],
      month_ko:"",
      month_en:"",
      schedule_info:{},
    }
  }
  calendarRef = React.createRef();

  // 상태 주기
  componentDidMount(){
    console.log("컴포넌트 마운트");

    let parent_this = this;

    // 폴백 데이터 정의
    const fallbackData = {
      "schedule_event": [
        {
          "job": ["plan", "start"],
          "inform": ["idea"],
          "color": "#276931",
          "title": "2023년 서울여성 창업아이디어 공모전 ",
          "body": "(서울, 아이디어, 400만원) 2023년 서울여성 창업아이디어 공모전",
          "date": "2025-08-10~2025-09-05",
          "start": "2025-09-05",
          "end": "2025-09-05",
          "link": "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=164714",
          "allDay": true,
          "status": true,
          "id": 0
        },
        {
          "job": ["plan", "start"],
          "inform": ["idea"],
          "color": "#276931",
          "title": "제 6회 전국 청년 아이디어톤 대회",
          "body": "(전국, 아이디어, 200만원) 제 6회 전국 청년 아이디어톤 대회",
          "date": "2025-09-05~2025-09-18",
          "start": "2025-09-18",
          "end": "2025-09-18",
          "link": "https://www.instagram.com/p/Cs2cR1kS3it/",
          "allDay": true,
          "status": true,
          "id": 1
        },
        {
          "job": ["plan", "start"],
          "inform": ["idea"],
          "color": "#276931",
          "title": "온라인 플랫폼 활성화 지원사업 청년 창업자 모집 공고",
          "body": "(전국, 아이디어, 2000만원) 온라인 플랫폼 활성화 지원사업 청년 창업자 모집 공고",
          "date": "2025-08-22~2025-09-22",
          "start": "2025-09-22",
          "end": "2025-09-22",
          "link": "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=164969",
          "allDay": true,
          "status": true,
          "id": 2
        },
        {
          "job": ["plan", "start"],
          "inform": ["idea"],
          "color": "#276931",
          "title": "2023 넥스트로컬 5기 서울시 지역연계형 청년 창업 지원사업 참여자 모집",
          "body": "(서울, 사업지원, 5000만원) 2023 넥스트로컬 5기 서울시 지역연계형 청년 창업 지원사업 참여자 모집",
          "date": "2025-08-22~2025-09-22",
          "start": "2025-09-22",
          "end": "2025-09-22",
          "link": "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=164902",
          "allDay": true,
          "status": true,
          "id": 3
        },
        {
          "job": ["plan", "start"],
          "inform": ["idea"],
          "color": "#276931",
          "title": "『도전! K-스타트업 2023』 부처 통합 창업경진대회 공고",
          "body": "(전국, 아이디어, 3억원) 『도전! K-스타트업 2023』 부처 통합 창업경진대회 공고",
          "date": "2025-09-30~2025-09-30",
          "start": "2025-09-30",
          "end": "2025-09-30",
          "link": "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=163172#none",
          "allDay": true,
          "status": true,
          "id": 4
        },
        {
          "job": ["plan", "start"],
          "inform": ["idea"],
          "color": "#276931",
          "title": "2023 서울시 청년 골목창업 경진대회 참여자 모집",
          "body": "(서울, 아이디어, 2천만원) 2023 서울시 청년 골목창업 경진대회 참여자 모집",
          "date": "2025-08-23~2025-09-12",
          "start": "2025-09-12",
          "end": "2025-09-12",
          "link": "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=164914",
          "allDay": true,
          "status": true,
          "id": 5
        },
        {
          "job": ["plan", "start"],
          "inform": ["idea"],
          "color": "#276931",
          "title": "제6회 기상기술 아이디어 공모전",
          "body": "(전국, 아이디어, 700만원) 제6회 기상기술 아이디어 공모전",
          "date": "2025-08-15~2025-09-09",
          "start": "2025-09-09",
          "end": "2025-09-09",
          "link": "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=164486",
          "allDay": true,
          "status": true,
          "id": 6
        },
        {
          "job": ["plan", "start"],
          "inform": ["idea"],
          "color": "#276931",
          "title": "슬립테크2023 꿀잠 수면건강 아이디어 공모전 안내",
          "body": "(전국, 아이디어, 250만원) 슬립테크2023 꿀잠 수면건강 아이디어 공모전 안내",
          "date": "2025-08-02~2025-09-05",
          "start": "2025-09-05",
          "end": "2025-09-05",
          "link": "https://www.sleep-tech.co.kr/notice/126",
          "allDay": true,
          "status": true,
          "id": 7
        },
        {
          "job": ["dev"],
          "inform": ["confer"],
          "color": "#6B2B2B",
          "title": "2023 인공지능 & 빅데이터쇼",
          "body": "전 산업과 연결되는 '초지능' 시대! 상품, 서비스의 제조·생산에서부터 유통과 배송, 소비과정의 인공지능 기술을 중심의 최첨단 기술과 기업을 위한 국내 최대 인공지능 & 빅데이터 전문 비즈니스 전시회입니다. 2023년 9월, 인공지능 & 빅데이터쇼에서 새로운 미래를 경험하세요!",
          "date": "2025-09-28~2025-10-02",
          "start": "2025-09-28",
          "end": "2025-10-02",
          "link": "https://aibigdatashow.com/?ref=codenary",
          "allDay": true,
          "status": true,
          "id": 8
        },
        {
          "job": ["dev"],
          "inform": ["confer"],
          "color": "#6B2B2B",
          "title": "부스트캠프 웹·모바일 8기 모집 마감",
          "body": "지속 가능한 개발자로 성장하고 싶다면, 부스트캠프 커뮤니티를 존중하고, 건강한 학습 문화를 만드는데 기여할 수 있는 분을 찾습니다.",
          "date": "2025-08-02~2025-09-12",
          "start": "2025-09-12",
          "end": "2025-09-12",
          "link": "https://boostcamp.connect.or.kr/guide_wm.html?ref=codenary",
          "allDay": true,
          "status": true,
          "id": 9
        }
      ],
      "month_ko": "9월",
      "month_en": "September"
    };

    // 데이터 처리 함수
    const processScheduleData = (data) => {
      console.log('Processing data:', data);
      let schedule_data = data.schedule_event;
      parent_this.setState({'schedule_data': schedule_data});
      parent_this.setState({'month_ko': data.month_ko});
      parent_this.setState({'month_en': data.month_en});

      let addInfo = [];
      let defaultJobId = [];
      let removeInfo = [];
      let defaultInformId = [];
      
      for (let schedule of schedule_data) {
        if (schedule.status) {
          addInfo.push(schedule);
          defaultJobId = defaultJobId.concat(schedule['job']);
          defaultInformId = defaultInformId.concat(schedule['inform']);
        } else {
          removeInfo.push(schedule);
        }
      }
      
      const duplicate = (arr) => [...new Set(arr.filter((value, index, array) => array.indexOf(value) !== index))];
      defaultJobId = duplicate(defaultJobId);
      defaultInformId = duplicate(defaultInformId);

      parent_this.setState({'jobId': defaultJobId});
      parent_this.setState({'informId': defaultInformId});

      if (parent_this.calendarRef.current) {
        parent_this.calendarRef.current.props.eventAdd(addInfo);
        parent_this.calendarRef.current.props.eventRemove(removeInfo);
      }
    };

    let server_name = process.env.REACT_APP_SERVER_NAME;
    let server_port = process.env.REACT_APP_SERVER_PORT;
    let server_address = server_name + ":" + server_port;
    let api_address = server_address + '/api/v1/schedules/month';

    axios.get('/api/v1/schedules/month')
    .then(function(response){
      processScheduleData(response.data);
    })
    .catch(function(error){
        console.log('API 호출 실패, 폴백 데이터 사용:', error);
        processScheduleData(fallbackData);
    })

  }
  componentWillUnmount(){
    console.log('componentWillUnmount()');
  }

  openModal = () => {
    console.log("open calendar schedule popup")
    const body = document.querySelector('body');

    let current_position = window.pageYOffset
    this.setState({ modalOpen: true })
    this.setState({ scrollPosition: current_position })

    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    
    body.style.top = `-${current_position}px`;
    body.style.width = '100%'
  }

  closeModal = () => {
    this.setState({ modalOpen: false});

    const body = document.querySelector('body');
    body.style.removeProperty('overflow');
    body.style.removeProperty('position');
    body.style.removeProperty('top');
    body.style.removeProperty('width');
    window.scrollTo(0, this.state.scrollPosition);
  }

  render(){
    let options = {
      anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
      navigation: true,
      delay: 1000,
      scrollbars: false,
      verticalAlign: true,
    };

    const job_name_list = [{name:'기획',value:'plan'}, {name:'디자인',value:'design'},{name:'개발',value:'dev'},{name:'마케팅',value:'market'}, {name:'예비창업가',value:'start'}];
    const information_name_list = [{name:'컨퍼런스',value:'confer'},{name:'강연',value:'mento'},{name:'네트워크',value:'study'},{name:'공모전',value:'idea'}];

    const categoryHandleChange = (category_state_name, schedule_list, item_type) =>{
      const handleChange = (event) => {
        const {target: { value },} = event;
        const set_data = {}
        set_data[category_state_name] = typeof value === 'string' ? value.split(',') : value;
        this.setState(set_data)
        let job_select_id_list = [];
        let inform_select_id_list = [];

        if(item_type === 'inform'){
          job_select_id_list = this.state.jobId;
          inform_select_id_list = value;
        }
        else{
          job_select_id_list = value;
          inform_select_id_list = this.state.informId;
        }

        // let eventInfo = [];
        let addInfo = [];
        let removeInfo = [];

        for(let schedule of schedule_list){
          let inform_id_list = schedule['inform'];
          let check = false;
          for(let inform_id of inform_id_list){
            for(let inform_select_id of inform_select_id_list){
              // let typed = inform_select_id.split('-')[0];
              let event_id = inform_select_id //inform_select_id.split('-')[1];

              if (inform_id === event_id){
                let job_id_list = schedule['job'];

                for(let job_id of job_id_list){
                  for(let job_select_id of job_select_id_list){
                    // let job_typed = job_select_id.split('-')[0];
                    let job_event_id = job_select_id //job_select_id.split('-')[1];

                    if (job_id === job_event_id){
                      check = true;
                      let schedule_copy = {...schedule};
                      delete schedule_copy.status;
                      addInfo.push(schedule_copy);
                      break;
                    }
                  }
                  if (check){break;}
                }
              }
              if (check){break;}
            }
            if (check){break;}
          }
          if (check){}
          else { 
            // eventInfo.push(schedule);
            let schedule_copy = {...schedule};
            delete schedule_copy.status;
            removeInfo.push(schedule_copy); 
          }
        }
        for(let schedule of addInfo){
          let schedule_copy = {...schedule};
          schedule_copy['status'] = true;
          // eventInfo.push(schedule_copy);
        }
        for(let schedule of removeInfo){
          let schedule_copy = {...schedule};
          schedule_copy['status'] = false;
          // eventInfo.push(schedule_copy);
        }

        this.calendarRef.current.props.eventAdd(addInfo);
        this.calendarRef.current.props.eventRemove(removeInfo);
      };
      return handleChange;
    }

    const inform_list = [
      {id:'contest',name:'공모전'},
      {id:'network',name:'네트워킹'},
      {id:'consult',name:'컨설팅'},
      {id:'study',name:'스터디'},
    ]

    const onChange = ({target})=>{
      let eventInfo = [];
      let addInfo = [];
      let removeInfo = [];

      for(let item of this.state.schedule_data){
        if ((target.id === item.typed)){
          if (target.checked){
            item['status'] = target.checked;
            eventInfo.push(item);
            let other = {...item};
            delete other.status;
            addInfo.push(other);
          }
          else{
            item['status'] = target.checked;
            eventInfo.push(item);
            let other = {...item};
            delete other.status;
            removeInfo.push(other);
          }
        }
        else{
          // item['status'] = target.checked;
          if (item.status){
            eventInfo.push(item);
            let other = {...item};
            delete other.status;
            addInfo.push(other);
          }
          else{
            eventInfo.push(item);
            let other = {...item};
            delete other.status;
            removeInfo.push(other);
          }
        }
      }
      // cookies.set('event-data',eventInfo);

      this.calendarRef.current.props.eventAdd(addInfo);
      this.calendarRef.current.props.eventRemove(removeInfo);

    };  
    const DAY_NAMES = ['일','월','화','수','목','금','토',];

    return (
      <div>
        <MobileNavbar></MobileNavbar>
        <CalendarPopup open={this.state.modalOpen} close={this.closeModal} header={"2023 ICT 콤플렉스 세미나"} schedule_info={this.state.schedule_info}></CalendarPopup>
        {/* <SectionsContainer className="container" {...options}> */}
            {/* <Section> */}
              <div className='section0'>
                <div className='d-none d-sm-block'>
                <div className='section0__cropped'>
                  <img src='images/title.png' className='section0__pages'>
                    {/* <img src='images/title_name.png'></img> */}
                  </img>
                  <div className='main_vanner'>
                    <h1 className='t1'>실리콘밸리를 향해,</h1>
                    <div>
                      <h1 className='t1'>스타트업 멘토멘티 플랫폼</h1>
                      <img src='images/silinder_logo.png'></img>
                    </div>
                    <h1 className='t3'>스타트업 관련 일정 캘린더 'silindar'를 포함한 하단의 부가 서비스들을 체험해 보세요.</h1>
                  </div>
                </div>
                </div>
              </div>
              {/* <div className='section0 mobile'>
                <div className='d-block d-sm-none'>
                  <div>
                    <img src='images/mobile_image.png' className='section0__pages' width={"100%"}></img>
                  </div>
                </div>
              </div> */}

              {/* <div className='d-none d-sm-block'> */}
              <div className='section1'>
                <div className='box calendar_box'>
                  <motion.div
                    initial={{ y: 150}}
                    viewport={{ once:true }}
                    whileInView={{
                      y: 0,
                      // opacity: 0, 
                      // scale: 1,
                      transition:{ duration: 1},
                    }}
                  >
                    
                    <Row>
                      <Col className="min-vw-50">
                        <Title month_ko={this.state.month_ko} month_en={this.state.month_en}></Title>
                      </Col>
                      <br></br>
                    </Row>
                    <br></br>
                  </motion.div>
                  
                  <motion.div 
                      initial={{ opacity: 0,}}
                      viewport={{ once:true }}
                      whileInView={{
                        opacity: 1, 
                        scale: 1,
                        transition:{ delay: 1, duration: 1.5},
                        x: 0
                      }}
                  >
                    <div className='category_dropdown'>
                    {/* <Row>
                      <Col xs="12" md="6"> */}
                      <Dropdown 
                        title_name={"관심 분야"} 
                        data_list={job_name_list} 
                        class_name={"job_category_dropdown"}
                        personName={this.state.jobId}
                        handleChange={categoryHandleChange("jobId", this.state.schedule_data,'job')}
    
                      ></Dropdown>
                      {/* </Col>
                      <Col xs="12" md="6"> */}
                      <Dropdown 
                        title_name={"관심 정보"} 
                        data_list={information_name_list}
                        class_name={"information_category_dropdown"} 
                        personName={this.state.informId}
                        handleChange={categoryHandleChange("informId",this.state.schedule_data,'inform')}>
                      </Dropdown>
                      {/* </Col>
                      </Row> */}
                    </div>

                    {/* 기존 카테고리 기능 */}
                    {/* <Row className="justify-content-center ml-0 mr-0 p-0 mb-5">
                      <Col xs="12" md="6" className='jobFrame'>
                        <h1>직분 선택</h1>
                        <Row className="justify-content-center">
                          <CategoryJobGroup></CategoryJobGroup>
                        </Row>
                      </Col>

                      <Col xs="12" md="6" className='informFrame'>
                        <h1>정보 선택</h1>
                        <Row className="justify-content-center">
                            {
                            inform_list.map((inform)=>(
                                <Col xs="3">
                                  <article className={'informGroup'}>
                                  <input 
                                  type="checkbox" id={inform.id} 
                                  name="radios" value={inform.id} onChange={onChange}/>
                                  <div>
                                      <span>{inform.name}</span>
                                  </div>
                                  </article>
                                </Col>
                            ))
                            }
                        </Row>
                      </Col>
                    </Row> */}
                    
                    <div className='category_type'>
                      <div className='category_label confer_category_label '>
                        <div></div>
                        <h1>컨퍼런스</h1>
                      </div>
                      <div className='category_label mento_category_label '>
                        <div></div>
                        <h1>강연</h1>
                      </div>
                      <div className='study_category_label category_label'>
                        <div></div>
                        <h1>네트워크</h1>
                      </div>
                      <div className='idea_category_label category_label'>
                        <div></div>
                        <h1>공모전</h1>
                      </div>
                    </div>
                    <Row>
                      <Col xs="12">
                      <div className='calendar'>
                        <FullCalendar
                          height={658}
                          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                          headerToolbar={false}
                          initialView='dayGridMonth'
                          ref={this.calendarRef}
                          selectMirror={true}
                          dayMaxEvents={true}
                          weekends={this.props.weekendsVisible}
                          datesSet={this.handleDates}
                          // select={this.handleDateSelect}
                          events={this.props.events}
                          eventContent={renderEventContent} // custom render function
                          
                          eventClick={this.handleEventClick}
                          eventAdd={this.handleEventAdd}
                          editable={true}
                          selectable={true}
                          dayHeaderContent={function(arg){
                            return DAY_NAMES[arg.date.getDay()]
                          }}
                          displayEventEnd={true}
                          eventChange={this.handleEventChange} // called for drag-n-drop/resize
                          eventRemove={this.handleEventRemove}
                          fixedWeekCount={false}
                        />
                      </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12">
                        <CalendarNote></CalendarNote>
                      </Col>
                    </Row>
  
                    {/* <CalendarModule></CalendarModule> */}
              
                  </motion.div>
                  {/* <motion.div 
                      initial={{ opacity: 0, x: -200}}
                      viewport={{ once:true }}
                      whileInView={{
                        opacity: 1, 
                        scale: 1,
                        transition:{ duration: 1.5},
                        x: 0
                      }}
                  > */}
                    {/* <Category></Category> */}

                    {/* <Row className="justify-content-center ml-0 mr-0 p-0 mt-5">
                      <Col xs="12" md="6" className='jobFrame'>
                        <h1>직분 선택</h1>
                        <Row className="justify-content-center">
                          <CategoryJobGroup></CategoryJobGroup>
                        </Row>
                      </Col>

                      <Col xs="12" md="6" className='informFrame'>
                        <h1>정보 선택</h1>
                        <Row className="justify-content-center">
                            {
                            inform_list.map((inform)=>(
                                <Col xs="3">
                                  <article className={'informGroup'}>
                                  <input 
                                  type="checkbox" id={inform.id} 
                                  name="radios" value={inform.id} onChange={onChange}/>
                                  <div>
                                      <span>{inform.name}</span>
                                  </div>
                                  </article>
                                </Col>
                            ))
                            }
                        </Row>
                      </Col>
                    </Row> */}
                  {/* </motion.div> */}
                </div>
              </div>
            {/* </div> */}
            {/* </Section> */}
  
            {/* <Section> */}
              <div className='section2'>
                {/* <div className='cropped'>
                  <img src='images/page0.svg' className='pages'></img>
                </div> */}
                <ServiceSummary></ServiceSummary>
              </div>
              <div className='section2 summary-image-frame'>
                  <ServiceSummaryImage></ServiceSummaryImage>
              </div>
              <div className='section2 page1-frame'>
                  {/* <div className='cropped'>
                    <img src='images/page1.svg' className='pages'></img>
                  </div> */}
                    <ServiceIntroduce></ServiceIntroduce>

              </div>
              <div className='section2'>
                <div className='serviceIntroduceGradient' style={{
                  width: "100%",
                  background: "linear-gradient(to top, #343D07, rgba(23, 23, 23, 0))",
                  height: "380px",
                  marginTop: "-380px",
                  color: '#D6FF01'
                }}></div>
              </div>
              <div className='section2 page2-frame'>
                  <Contact></Contact>

              </div>

              <div className='section2 page3-frame'>
                <motion.div 
                    initial={{ opacity: 0, y: 200}}
                    whileInView={{
                      opacity: 1, 
                      scale: 1,
                      transition:{ delay: 0, duration: 1},
                      y: 0
                    }}
                >
                  <ContactInformation></ContactInformation>
                </motion.div>
              </div>
            {/* </Section> */}


            {/* <Section> */}
            {/* <div className='section4'>
              <motion.div
                  className="box page-section"
                  initial={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 1.5 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
              >
                <Row>
                  <Col xs="12">
                    <AdvanceReservation></AdvanceReservation>
                  </Col>
                </Row>
              </motion.div>
            </div> */}
            {/* </Section> */}



        {/* </SectionsContainer> */}
      </div>
    );
  }

  handleDateSelect = (selectInfo) => {
    let calendarApi = selectInfo.view.calendar
    let title = prompt('Please enter a new title for your event')

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({ // will render immediately. will call handleEventAdd
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      }, true) // temporary=true, will get overwritten when reducer gives new events
    }
  }

  handleEventClick = (clickInfo) => {
    console.log(clickInfo)
    console.log(clickInfo.timeText, clickInfo.event.title, clickInfo.event.extendedProps);
    let schedule_data =  clickInfo.event.extendedProps;
    console.log(schedule_data);
    let tag = schedule_data.job.concat(schedule_data.inform);
    
    let schedule_info = {'title':clickInfo.event.title,'content':schedule_data.body, 'date':schedule_data.dateTime, 'tag':tag, 'link':schedule_data.link}
    this.setState({schedule_info:schedule_info});
    this.openModal()
  }

  // handlers that initiate reads/writes via the 'action' props
  // ------------------------------------------------------------------------------------------

  handleDates = (rangeInfo) => {
    this.props.requestEvents(rangeInfo.startStr, rangeInfo.endStr)
      .catch(reportNetworkError)
  }

  handleEventAdd = (addInfo) => {
    if (Array.isArray(addInfo)){
      for (let item of addInfo){
        this.props.createEvent(item).catch(() => {
          reportNetworkError()
          addInfo.revert()
        })
      }
    }
    else{
      this.props.createEvent(addInfo.event.toPlainObject()).catch(() => {
        reportNetworkError()
        addInfo.revert()
      })
    }
  }

  handleEventChange = (changeInfo) => {
    this.props.updateEvent(changeInfo.event.toPlainObject())
      .catch(() => {
        reportNetworkError()
        changeInfo.revert()
      })
  }

  handleEventRemove = (removeInfo) => {
      if (Array.isArray(removeInfo)){
        for (let item of removeInfo){
          this.props.deleteEvent(item.id).catch(() => {
            reportNetworkError()
            removeInfo.revert()
          })
        }
      }
      else{
        this.props.deleteEvent(removeInfo.event.id).catch(() => {
          reportNetworkError()
          removeInfo.revert()
        })
      }  
  }

}


function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}


function reportNetworkError() {
  alert('This action could not be completed')
}

function mapStateToProps() {
  const getEventArray = createSelector(
    (state) => state.eventsById,
    getHashValues
  )

  return (state) => {
    return {
      events: getEventArray(state),
      weekendsVisible: state.weekendsVisible
    }
  }
}

export default connect(mapStateToProps, actionCreators)(MainPage)
