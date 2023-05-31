import './Title.css'

export default function Title(){
    return (
        <div id='section1__title'>
            <h1 className='t1'>5월</h1>
            <h1 className='t2'>May</h1>
            <h1 className='t3'>이달의 누구나 도전 가능한 <span id="job">창업지원 공모전 일정</span>입니다.</h1>
            {/* <h1 className='t4'><span className='inform'>아이디어 공모전</span> | <span className='inform'>네트워킹</span> | <span className='inform'>스터디</span> 일정입니다.</h1> */}
        </div>
    );
}