import './Title.css'

export default function Title({month_ko, month_en}){
    return (
        <div id='section1__title'>
            <h1 className='t1'>{month_ko}</h1>
            <h1 className='t2'>{month_en}</h1>
            <h1 className='t3'>이달의 누구나 참여 가능한 <span id="job">창업 관련 일정</span>입니다.</h1>
            {/* <h1 className='t4'><span className='inform'>아이디어 공모전</span> | <span className='inform'>네트워킹</span> | <span className='inform'>스터디</span> 일정입니다.</h1> */}
        </div>
    );
}