import React, { Component } from 'react';
import './CalendarPopup.css'
import { render } from '@testing-library/react';


export default class CalendarPopup extends Component{
    render(){
        const category_name = {'plan':'기획','dev':'개발','design':'디자인','market':'마케팅','start':'예비창업가',
          'confer':'컨퍼런스','mento':'강연','study':'네트워크','idea':'공모전'}
        const { open, close, schedule_info } = this.props;
        return (
            <div className={open ? 'openModal modal' : 'modal'}>
              {open ? (
                <section>
                  <header>
                    {schedule_info['tag'].map((job) =>(
                      <h1 className='t1'>{category_name[job]}</h1>
                    ))
                    }
                    <h1 className='t2'>{schedule_info['title']}</h1>
                    <h1 className='t3'>{schedule_info['date']}</h1> 
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