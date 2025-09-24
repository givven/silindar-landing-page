import './ServiceSummaryImage.css'

export default function ServiceSummaryImage(){
    return (
        <div className='d-none d-sm-block'>
            <div className='box'>
                <div id='service_summary_image'>
                    <div className='service_summary_cropped'>
                        <img src='images/summary.png' className='main-background' alt="서비스 요약 이미지"></img>
                        {/* <div className='main-image-text'>
                            <h1 className='t1'>실리콘밸리를 향한</h1>
                            <h1 className='t1'>초기 스타트업 캘린더 앱</h1>
                            <img src='images/silindar_logo.png' className='logo'></img>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}