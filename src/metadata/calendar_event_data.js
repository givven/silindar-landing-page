import { Cookies } from "react-cookie";



// const event = [
//     {allDay: true, job:["plan","start"], inform:[], status:false, id:0, typed:'contest', title: '(전체) 미래세대 정책 아이디어)', start: '2023-05-18', end:'2023-05-24',color:'#6B2B2B',},
//     {allDay: true, job:["dev"], inform:[], status:false, id:1, typed:'study', title: '(역삼) 기획자 4인 스터디)', start: '2023-05-16', end:'2023-05-19',color:'#276931'},
//     {allDay: true, job:["plan","dev","design"], inform:[], status:false, id:2, typed:'network', title: '(성남) 현직 카카오 개발자 네트워킹', start:'2023-05-12', color:'#0A6A71',},
//     {allDay: true, job:["design"], inform:[], status:false, id:3, typed:'consult', title: '(강남) 패스트 캠퍼스 현직 컨설팅', start:'2023-05-20',color:'#276931'},
//     {allDay: true, job:["start"], inform:[], status:false, id:4, typed:'study', title: '(경기) 창업허브 창업 실전 스터디', start:'2023-05-29', color:'#276931',},
//     {allDay: true, job:["start","plan"], inform:[], status:false, id:5, typed:'network', title: '(강남) 현직 기획자들과 와인 파티' ,start: '2023-05-28', color:'#0A6A71',}
// ];

const event = [
    {allDay: true, job:["plan","start"], status:false, inform:['idea','confer'], id:0, typed:'contest', title: '(전체) 미래세대 정책 아이디어)', start: '2023-06-18', end:'2023-06-24',color:'#6B2B2B',},
    {allDay: true, job:["dev"], status:false, inform:['mento'], id:1, typed:'study', title: '(역삼) 기획자 4인 스터디)', start: '2023-06-16', end:'2023-06-19',color:'#276931'},
    {allDay: true, job:["plan","dev","design"], status:false, inform:['idea'], id:2, typed:'network', title: '(성남) 현직 카카오 개발자 네트워킹', start:'2023-06-12', color:'#0A6A71',},
    {allDay: true, job:["design"], status:false, inform:['confer'], id:3, typed:'consult', title: '(강남) 패스트 캠퍼스 현직 컨설팅', start:'2023-06-20',color:'#276931'},
    {allDay: true, job:["start","market"], status:false, inform:['study'], id:4, typed:'study', title: '(경기) 창업허브 창업 실전 스터디', start:'2023-06-29', color:'#276931',},
    {allDay: true, job:["start","plan"], status:false, inform:['idea','confer','study'], id:5, typed:'network', title: '(강남) 현직 기획자들과 와인 파티' ,start: '2023-06-28', color:'#0A6A71',}
];

const cookie = new Cookies();
cookie.set('event-data',event);
console.log(cookie.get('event-data'));