import { Cookies } from 'react-cookie';
import './AdvanceReservation.css'
// import { event } from '../metadata/calendar_event_data';
import { useEffect } from 'react';

export default function AdvanceReservation(){
    useEffect(() => {
        const event = [
            {allDay: true, status:false, id:0, typed:'contest', title: '(전체) 미래세대 정책 아이디어)', start: '2023-05-18', end:'2023-05-24',color:'#6B2B2B',},
            {allDay: true, status:false, id:1, typed:'study', title: '(역삼) 기획자 4인 스터디)', start: '2023-05-16', end:'2023-05-19',color:'#276931'},
            {allDay: true, status:false, id:2, typed:'network', title: '(성남) 현직 카카오 개발자 네트워킹', start:'2023-05-12', color:'#0A6A71',},
            {allDay: true, status:false, id:3, typed:'consult', title: '(강남) 패스트 캠퍼스 현직 컨설팅', start:'2023-05-20',color:'#276931'},
            {allDay: true, status:false, id:4, typed:'study', title: '(경기) 창업허브 창업 실전 스터디', start:'2023-05-29', color:'#276931',},
            {allDay: true, status:false, id:5, typed:'network', title: '(강남) 현직 기획자들과 와인 파티' ,start: '2023-05-28', color:'#0A6A71',}
        ];
        const cookie = new Cookies();
        console.log(event)
        cookie.set('event-data',event);
        console.log(cookie.get('event-data'));
    },[]);

    return (
        <div className='section4__advance'>
            <h1 className="advance-1">02</h1>
            <h1 className="advance-1">스타트업 캘린더 일정 사전 배포</h1>
            <h1 className="advance-2">당장 스타트업 캘린더가 필요한 여러분들을 위해<br></br> 5월 한정으로 기존 8,700원에 판매되는 2023년 6월 스타트업 일정을 1,900원에 배포합니다.</h1>
            <h1 className="advance-3">캘린더 링크 발송 이후에도 어플 출시 전까지 매주 무료로 스타트업 일정이 자동으로 업데이트됩니다.</h1>
            <h1 className="advance-4">아래 링크를 통해 캘린더 사전 배포를 신청하세요!</h1>
            <div className="advance-5">
                <h1 >하단 링크를 통해 결제를 완료하고, 현재 페이지 최하단의 [캘린더 미리 받기]를 목적으로 정보를 기입해 주시면</h1>
                <h1 >5월 31일 18:00, 맞춤화된 일정 캘린더 링크를 보내드립니다.</h1>
            </div>

            <div className='advance-6-background'>
                <button className='advance-6' type="button">
                    링크
                </button>
            </div>
            <br></br>
        </div>
    );
}
