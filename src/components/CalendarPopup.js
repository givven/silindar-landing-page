import React, { Component } from 'react';
import './CalendarPopup.css'
import { render } from '@testing-library/react';


export default class CalendarPopup extends Component{
    render(){
        const { open, close, header, schedule_info } = this.props;
        console.log(schedule_info);
        return (
            <div className={open ? 'openModal modal' : 'modal'}>
              {open ? (
                <section>
                  <header>
                    <h1 className='t1'>{header}</h1>
                    <h1 className='t2'>{schedule_info['title']}</h1>
                    <h1 className='t3'>유직현 대표  |  벤처 인사이트</h1> 
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                  </header>
                  <main>
                    <h1 className='content_name'>일정 설명</h1>
                    <h1 className='content'>
                    {schedule_info['content']}
                    </h1>
                  </main>
                  <footer>
                    {/* <button className="close" onClick={close}>close</button> */}
                    <article className='greenHoverButton contact_submit'>
                        <input type="button" onClick={()=>{window.location.href = schedule_info['link']}}/>
                        <div>
                            <span>신청하기</span>
                        </div>
                    </article>
                  </footer>
                </section>
              ) : null}
            </div>
        );
    }
};