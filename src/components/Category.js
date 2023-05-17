import './Category.css';

export default function Category(){
    return (
        <div id='category'>

            <div id='region'>
                <div className='region-element title'>지역</div>
                <div className='region-element'>
                <input type='checkbox' id="region-seoul"></input>
                <label htmlFor='region-seoul'>서울</label>
                </div>
                <div className='region-element'>
                <input type='checkbox' id="region-kyonggi"></input>
                <label htmlFor='region-plan-kyonggi'>경기도</label>
                </div>
                <div className='region-element'>
                <input type='checkbox' id="region-incheon"></input>
                <label htmlFor='region-incheon'>인천</label>
                </div>
                <div className='region-element'>
                <input type='checkbox' id="region-other"></input>
                <label htmlFor='region-other'>그 외</label>
                </div>
            </div>

            <div id='inform'>
                <div className='inform-element title'>정보</div>
                <div className='inform-element'>
                <input type='checkbox' id="contest"></input>
                <label htmlFor='contest'>정부 지원 사업</label>
                </div>

                <div className='inform-element'>
                <input type='checkbox' id="network"></input>
                <label htmlFor='network'>창업 아이디어 공모전</label>
                </div>

                <div className='inform-element'>
                <input type='checkbox' id="consult"></input>
                <label htmlFor='consult'>멘토링</label>
                </div>

                <div className='inform-element'>
                <input type='checkbox' id="study"></input>
                <label htmlFor='study'>스터디</label>
                </div>

                <div className='inform-element'>
                <input type='checkbox' id="inform-5"></input>
                <label htmlFor='inform-5'>네트워킹 파티</label>
                </div>

                <div className='inform-element'>
                <input type='checkbox' id="inform-6"></input>
                <label htmlFor='inform-6'>컨퍼런스 · 세미나</label>
                </div>
            </div>
        </div>
    );
}


