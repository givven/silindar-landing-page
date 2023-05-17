import React, { createRef } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import actionCreators from '../actions'
import { getHashValues } from './utils'

class DemoApp extends React.Component {
  constructor(props){
    super(props);
    this.myInputRef = createRef()
    this.focus = () =>{
      this.myInputRef.current.focus()
    }
    
  }
  
  render() {
    console.log("인스턴스: ",this.myInputRef);
    const { myInputRef } = this.props
    console.log(myInputRef);
    return (
      <div className='calendar'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={false}
            initialView='dayGridMonth'
            ref={this.calendar}
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
            
            eventChange={this.handleEventChange} // called for drag-n-drop/resize
            eventRemove={this.handleEventRemove}
          />
      </div>
    )
  }

  renderSidebar() {
    return (
      <div className='demo-app-sidebar'>
        <div className='demo-app-sidebar-section'>
          <h2>Instructions</h2>
          <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
        </div>
        <div className='demo-app-sidebar-section'>
          <label>
            <input
              type='checkbox'
              checked={this.props.weekendsVisible}
              onChange={this.props.toggleWeekends}
            ></input>
            toggle weekends
          </label>
        </div>
        <div className='demo-app-sidebar-section'>
          <h2>All Events ({this.props.events.length})</h2>
          <ul>
            {this.props.events.map(renderSidebarEvent)}
          </ul>
        </div>
      </div>
    )
  }

  // handlers for user actions
  // ------------------------------------------------------------------------------------------

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
      console.log("야")
      for (let item of addInfo){
        console.log("케케케:",item);
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
    console.log(this);
  }

  handleEventChange = (changeInfo) => {
    this.props.updateEvent(changeInfo.event.toPlainObject())
      .catch(() => {
        reportNetworkError()
        changeInfo.revert()
      })
  }

  handleEventRemove = (removeInfo) => {
    this.props.deleteEvent(removeInfo.event.id)
      .catch(() => {
        reportNetworkError()
        removeInfo.revert()
      })
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

function renderSidebarEvent(plainEventObject) {
  return (
    <li key={plainEventObject.id}>
      <b>{formatDate(plainEventObject.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{plainEventObject.title}</i>
    </li>
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

export default connect(mapStateToProps, actionCreators)(DemoApp)
