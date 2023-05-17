import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import React, { useEffect, useRef } from 'react'

import './Calendar.css'
import { Cookies } from 'react-cookie'
import { render } from '@testing-library/react';

export default function Calendar({event_data,check_state}){
  let visiable_event_data = [];
  for (var i in event_data){
    if (check_state[event_data[i].id]){
      visiable_event_data.push(event_data[i]);
    }
   }
   console.log(visiable_event_data);
  //  const {view, ...others} = check_state;

  //  const calendarRef = useRef();

  //   // useEffect(()=>{
  //   //   changeView(view)
  //   // },[view])

  //   const changeView = view =>{
  //     const API = getApi();
  //     API.addEvent({
  //       title:'소나ㅏ',
  //       start:'2023-5-20',
  //     })

  //     API && API.changeView(view);
  //   }

  //   const getApi = () =>{
  //     const { current: calendarDom} = calendarRef;
  //     return calendarDom ? calendarDom.getApi() : null;
  //   }
    

    function renderEventContent(eventInfo) {
        return (
          <>
            <div className={eventInfo.event.id}>
                <i>{eventInfo.event.title}</i>
                <i>{eventInfo.event.id}</i>
                <h1>hello</h1>
            </div>
          </>
        )
    }

    const DAY_NAMES = ['일','월','화','수','목','금','토',]

    return(
      <div className='calendar'>
        <FullCalendar
            // {...others}
            // ref={calendarRef}
            // defaultView={view}
            // contentHeight={'600'}
            height={580}
            // showNonCurrentDates={false}
            plugins={[dayGridPlugin]}  
            eventContent={renderEventContent}

            initialView='dayGridMonth'
            duration={ {days: 4 }}

            eventBackgroundColor='#c000ff'
            events={visiable_event_data}
            headerToolbar={false}
            // locale={'ko'}
            // titleFormat={
            //   {year: 'numeric', month: 'numeric', day:'2-digit'}
            // }
            dayHeaderContent={function(arg){
              return DAY_NAMES[arg.date.getDay()]
            }}

            // dayHeaders={false}
            fixedWeekCount={false}
        />
      </div>
        );
}