import { Col, Row } from 'react-bootstrap';
import './ServiceSummary.css'

export default function ServiceSummary(){
    return (
        <div className='d-none d-sm-block'>
            <div className='box summary_box'>
                <div id='service_summary'>

                <div className='component-center'>
                    <div className='service_summary_circle'></div>
                </div>
                <h1 className='t1'>FOR SILICON VALLEY</h1>
                <h1 className='t2'>스타트업을 위한 멘토멘티 플랫폼</h1>
                <h1 className='t3'>스타트업 멘토멘티 플랫폼, 실린더에서 다양한 창업 인사이트와</h1>
                <h1 className='t4'>스타트업계에서 활발히 활동하고 있는 다양한 멘토들을 만나보세요.</h1>
                </div>
            </div>
        </div>
    );
}