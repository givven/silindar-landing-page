export default function Contact(){
    return (
        <div id="contact">
            <div id='purpose'>
                <div className='purpose-element'>
                <input type='checkbox' id="purpose-1"></input>
                <label htmlFor='purpose-1'>출시 알림</label>
                </div>
                <div className='purpose-element'>
                <input type='checkbox' id="purpose-2"></input>
                <label htmlFor='purpose-2'>다음달 캘린더</label>
                </div>
                <div className='purpose-element'>
                <input type='checkbox' id="purpose-3"></input>
                <label htmlFor='purpose-3'>일정 광고</label>
                </div>
            </div>
            

            <div className='email-form'>
                <label htmlFor='email'>이메일</label>
                <input type='email' id="email"></input>
            </div>

            <div className='content-form'>
                <label htmlFor='content'>내용</label>
                <input type='email' id="content"></input>
            </div>
        </div>
    );
}