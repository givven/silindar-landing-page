import './reset.css'
import './MainPage.css';
// import {SectionsContainer, Section} from 'react-fullpage';

import Category from '../components/Category';
import Contact from '../components/Contact';

import { motion } from "framer-motion"
import Title from '../components/Title';
import Calendar from '../components/Calendar';
import CategoryJobGroup from '../components/CategoryJobGroup';
import { Col, Row } from 'react-bootstrap';
import CategoryInform from '../components/CategoryInform';
import React, { useState } from 'react';
import { Cookies } from 'react-cookie';
import CheckBox from '../components/CheckBox';
// import {cookie} from '../metadata/calendar_event_data';
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


class MainPage extends React.Component{
  calendarRef = React.createRef();

  render(){
    let options = {
      anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
      navigation: true,
      delay: 1000,
      scrollbars: false,
      verticalAlign: true,
    };
    const cookies = new Cookies();
    const event_data = cookies.get('event-data');
    const check_state = {'contest':false, 'network':false, 'consult': false, 'study':false};

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

      for(let item of event_data){
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
      cookies.set('event-data',eventInfo);

      this.calendarRef.current.props.eventAdd(addInfo);
      this.calendarRef.current.props.eventRemove(removeInfo);

    };  
    const DAY_NAMES = ['일','월','화','수','목','금','토',];
    return (
      <div>
        {/* <SectionsContainer className="container" {...options}> */}
            {/* <Section> */}
              <div className='section1'>
                <div className='box'>
                  <motion.div
                    initial={{ opacity: 0, x: -200}}
                    whileInView={{
                      opacity: 1, 
                      scale: 1,
                      transition:{ duration: 1.5},
                      x: 0
                    }}
                  >
                    <Row>
                      <Col className="min-vw-50">
                        <Title></Title>
                      </Col>
                      <br></br>
                    </Row>
                    <br></br>
                  </motion.div>
                  
                  <motion.div 
                      initial={{ opacity: 0, x: -200}}
                      whileInView={{
                        opacity: 1, 
                        scale: 1,
                        transition:{ delay: 1.5, duration: 1.5},
                        x: 0
                      }}
                  >
                    {/* <Calendar event_data={event_data} check_state={check_state}></Calendar> */}
                    {/* <DemoApp ref={this.calendarRef} ></DemoApp> */}
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
                            select={this.handleDateSelect}
                            events={this.props.events}
                            eventContent={renderEventContent} // custom render function
                            
                            eventClick={this.handleEventClick}
                            eventAdd={this.handleEventAdd}
                            editable={true}
                            selectable={true}
                            dayHeaderContent={function(arg){
                              return DAY_NAMES[arg.date.getDay()]
                            }}
                            
                            eventChange={this.handleEventChange} // called for drag-n-drop/resize
                            eventRemove={this.handleEventRemove}
                            fixedWeekCount={false}
                          />
                      </div>
                      </Col>
                    </Row>
                    
  
                    {/* <CalendarModule></CalendarModule> */}
              
                  </motion.div>
                  <motion.div 
                      initial={{ opacity: 0, x: -200}}
                      whileInView={{
                        opacity: 1, 
                        scale: 1,
                        transition:{ duration: 1.5},
                        x: 0
                      }}
                  >
                    {/* <Category></Category> */}

                    <Row className="justify-content-center ml-0 mr-0 p-0 mt-5">
                      <Col xs="12" md="6" className='jobFrame'>
                        <h1>직군 선택</h1>
                        <Row className="justify-content-center">
                          <CategoryJobGroup></CategoryJobGroup>
                        </Row>
                      </Col>

                      <Col xs="12" md="6" className='informFrame'>
                        <h1>정보 선택</h1>
                        <Row className="justify-content-center">
                          {/* <CategoryInform 
                          check_state={check_state}
                          setCheckState={setCheckState}
                          /> */}
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
                    </Row>
                  </motion.div>
                </div>
              </div>
            {/* </Section> */}
  
            {/* <Section> */}
              <div className='section2'>
              <motion.div
                  className="box"
                  // animate={{
                  //   scale: [1, 2, 2, 1, 1],
                  //   rotate: [0, 0, 180, 180, 0],
                  //   borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                  // }}
                  // transition={{
                  //   duration: 2,
                  //   ease: "easeInOut",
                  //   times: [0, 0.2, 0.5, 0.8, 1],
                  // }}
                  initial={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 1.5 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    // rotate: [0, 360],
                  }}
              >
                {/* <div className='page2'> */}
                  <img src='images/page2.png' className='page2'></img>
                {/* </div> */}
              </motion.div>
              </div>
            {/* </Section> */}
  
            {/* <Section> */}
              <div className='section3'>
                <motion.div
                  className="box"
                  initial={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 1 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: [0, 360],
                  }}
                >
                  <div><h1>컨퍼런스 개최, 스터디 등 공유 캘린더에 광고를 문의 하고싶은 분께서는 아래 폼을 통해 보내시기 바랍니다. /관련 현직자가 엄선을 통해 등록됩니다.</h1></div>
                  <Contact></Contact>
                </motion.div>
              </div>
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
    if (window(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove() // will render immediately. will call handleEventRemove
    }
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


// export default function MainPage() {
//   let options = {
//     anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
//     navigation: true,
//     delay: 1000,
//     scrollbars: false,
//     verticalAlign: true,
//   };
//   const cookies = new Cookies();
//   const [event_data, setEventData] = useState(cookies.get('event-data'));
//   const [check_state, setCheckState] = useState(
//     {'contest':false, 'network':false, 'consult': false, 'study':false}
//   );

//   const calendarRef = React.createRef();

//   const inform_list = [
//     {id:'contest',name:'공모전'},
//     {id:'network',name:'네트워킹'},
//     {id:'consult',name:'컨설팅'},
//     {id:'study',name:'스터디'},
//   ]

//   const onChange = ({target})=>{
//     console.log(target.checked);
//     console.log(target.id);
//     console.log(check_state);
//     try{
//         // console.log(calendarRef.current);
//         console.log("오잉");
//         check_state[target.id] = target.checked;
//         // setStateCheck({...check_state});
//         console.log("또또또")
//     }
//     catch{

//     }
//     console.log(check_state);
//   };  

//   return (
//     <div>
//       {/* <SectionsContainer className="container" {...options}> */}
//           {/* <Section> */}
//             <div className='section1'>
//               <div className='box'>
//                 <motion.div
//                   initial={{ opacity: 0, x: -200}}
//                   whileInView={{
//                     opacity: 1, 
//                     scale: 1,
//                     transition:{ duration: 1.5},
//                     x: 0
//                   }}
//                 >
//                   <Row>
//                     <Col className="min-vw-50">
//                     <Title></Title>
//                     </Col>
//                   <br></br>
//                   </Row>
//                   <Row className="justify-content-center">
//                   <CategoryJobGroup></CategoryJobGroup>
//                   </Row>
//                   <br></br>
//                 </motion.div>
//                 <motion.div 
//                     initial={{ opacity: 0, x: -200}}
//                     whileInView={{
//                       opacity: 1, 
//                       scale: 1,
//                       transition:{ delay: 1.5, duration: 1.5},
//                       x: 0
//                     }}
//                 >
//                   {/* <Calendar event_data={event_data} check_state={check_state}></Calendar> */}
//                   <DemoApp calendarRef={calendarRef}></DemoApp>

//                   {/* <CalendarModule></CalendarModule> */}
            
//                 </motion.div>
//                 <motion.div 
//                     initial={{ opacity: 0, x: -200}}
//                     whileInView={{
//                       opacity: 1, 
//                       scale: 1,
//                       transition:{ delay: 1.5, duration: 1.5},
//                       x: 0
//                     }}
//                 >
//                   {/* <Category></Category> */}
//                   <Row className="justify-content-center">
//                     {/* <CategoryInform 
//                     check_state={check_state}
//                     setCheckState={setCheckState}
//                     /> */}
//                     {
//                     inform_list.map((inform)=>(
//                         <Col xs="2" md="3" lg="2">
//                           <article className={'informGroup'}>
//                           <input 
//                           type="checkbox" id={inform.id} 
//                           name="radios" value={inform.id} onChange={onChange}/>
//                           <div>
//                               <span>{inform.name}</span>
//                           </div>
//                           </article>
//                         </Col>
//                     ))
//                     }
//                   </Row>
//                 </motion.div>
//               </div>
//             </div>
//           {/* </Section> */}

//           {/* <Section> */}
//             <div className='section2'>
//             <motion.div
//                 className="box"
//                 // animate={{
//                 //   scale: [1, 2, 2, 1, 1],
//                 //   rotate: [0, 0, 180, 180, 0],
//                 //   borderRadius: ["0%", "0%", "50%", "50%", "0%"]
//                 // }}
//                 // transition={{
//                 //   duration: 2,
//                 //   ease: "easeInOut",
//                 //   times: [0, 0.2, 0.5, 0.8, 1],
//                 // }}
//                 initial={{ opacity: 0, scale: 0 }}
//                 transition={{ duration: 1 }}
//                 whileInView={{
//                   opacity: 1,
//                   scale: 1,
//                   rotate: [0, 360],
//                 }}
//             >
//               <br></br><br></br><br></br><br></br>
//               <br></br><br></br><br></br><br></br>
//               <br></br><br></br><br></br><br></br>
//               <br></br><br></br><br></br><br></br>
//               <br></br><br></br><br></br><br></br>
//               <br></br><br></br><br></br><br></br>
//               <div><h1>Slindar란?</h1></div>
//               <div>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, ab mollitia dolorem nam molestiae in. Sint numquam perferendis tempora molestiae veniam impedit dolores ratione accusamus quasi ullam, iure animi voluptatem.</p>
//                 <h1>이러한 분들께 좋아요!</h1>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, ab mollitia dolorem nam molestiae in. Sint numquam perferendis tempora molestiae veniam impedit dolores ratione accusamus quasi ullam, iure animi voluptatem.</p>
//                 <h1>출시 예정일</h1>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, ab mollitia dolorem nam molestiae in. Sint numquam perferendis tempora molestiae veniam impedit dolores ratione accusamus quasi ullam, iure animi voluptatem.</p>
//                 <h1>단돈 900원으로 원하시는 개인 맞춤 "다음 달" 캘린더를 미리 만나보세요!</h1>
//                 <h1>계좌번호 ********* / 아래 폼을 통해 입금자 명/이메일/원하시는 직군,지역,정보를 보내주시기 바랍니다.</h1>
//               </div>
//             </motion.div>
//             </div>
//           {/* </Section> */}

//           {/* <Section> */}
//             <div className='section3'>
//               <motion.div
//                 className="box"
//                 initial={{ opacity: 0, scale: 0 }}
//                 transition={{ duration: 1 }}
//                 whileInView={{
//                   opacity: 1,
//                   scale: 1,
//                   rotate: [0, 360],
//                 }}
//               >
//                 <div><h1>컨퍼런스 개최, 스터디 등 공유 캘린더에 광고를 문의 하고싶은 분께서는 아래 폼을 통해 보내시기 바랍니다. /관련 현직자가 엄선을 통해 등록됩니다.</h1></div>
//                 <Contact></Contact>
//               </motion.div>
//             </div>
//           {/* </Section> */}
//       {/* </SectionsContainer> */}
//     </div>
//   );
// }