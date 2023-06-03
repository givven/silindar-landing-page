import React, { Component } from 'react';
import './CalendarPopup.css'
import { render } from '@testing-library/react';


export default class CalendarPopup extends Component{
    render(){
        const { open, close, header } = this.props;
        return (
            <div className={open ? 'openModal modal' : 'modal'}>
              {open ? (
                <section>
                  <header>
                    <h1 className='t1'>{header}</h1>
                    <h1 className='t2'>나의 창업에 린스타트업 100% 활용하기</h1>
                    <h1 className='t3'>유직현 대표  |  벤처 인사이트</h1> 
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                  </header>
                  <main>
                    <h1 className='content_name'>일정 설명</h1>
                    <h1 className='content'>
                        이 강의는 "벤처인사이트"의 유진혁 대표가 진행하는 강의로, 현재 창업 시장의 동향과 기술, 시장의 변화에 민첩하게 대응하여 창업하는 방법과 성공적인 창업과 실패하는 창업의 원인, 그리고 실험조직으로 창업을 시작하는 방법 등에 대해 다룹니다. 또한, 린캔버스를 활용하여 창업의 성장 모멘텀을 만드는 방법에 대해서도 다루게 됩니다. 이 강의는 창업을 고민하는 사람들과 기업가들에게 유용한 정보와 지침을 제공할 것입니다.
                    </h1>
                  </main>
                  <footer>
                    {/* <button className="close" onClick={close}>close</button> */}
                    <article className='greenHoverButton contact_submit'>
                        <input type="button" />
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