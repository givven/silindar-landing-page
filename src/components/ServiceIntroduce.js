import { Row,Col } from 'react-bootstrap';
import './ServiceIntroduce.css'


export default function ServiceIntroduce(){
    const team_building_list = [
        {id:'team_building_youth', name:'청소년 예비창업가 팀빌딩 하러가기'},
        {id:'team_building_startup',name:'청년 예비창업가 팀빌딩 하러가기'},
        {id:'team_building_office',name:'직장인 예비창업가 팀빌딩 하러가기'},
        {id:'team_building_startup',name:'초기스타트업 경력자 팀빌딩 하러가기'},
    ];

    function handleClick(e){
        window.location.href = 'https://open.kakao.com/o/gysUutgf?rt=O009'
    }

    const schedule_list = [
        {id:'schedule_youth', name:'일정 제보 하러가기'},
    ];

    return (
        <div id='service_introduce'>
            <h1 className='service_introduce_main_title'>서비스 소개</h1>
            <h1 className='service_introduce_order'>01</h1>
            <h1 className='service_introduce_title'>직군 별 맞춤 일정</h1>
            <h1 className='service_introduce_content'>실린더는 기획자, 디자이너, 개발자 등 직군에 알맞는 정보를 제공합니다.</h1>
            <h1 className='service_introduce_content'>정부지원사업 일정부터 멘토링 스터디, 컨퍼런스, 네트워킹파티 일정을 확인해보세요.</h1>

            <h1 className='service_introduce_order'>02</h1>
            <h1 className='service_introduce_title'>공모전 별 팀빌딩</h1>
            <h1 className='service_introduce_content'>실린더는 기획자, 디자이너, 개발자, 예비 창업가 등 관심분야에 알맞는 정보를 제공합니다.</h1>
            <h1 className='service_introduce_content'>누구나 도전 가능한 창업지원 공모전 일정부터 멘토링 스터디, 컨퍼런스, 네트워킹파티 일정을 확인해보세요.</h1>
            <Row className="justify-content-md-center">
            {
                team_building_list.map((team_building)=>(
                <Col xs="12" md="5" px="0">
                    {
                        team_building.id !== ""
                        ?
                        <article className={'teamBuildingGroup'}>
                        <input 
                        type="button" id={team_building.id} 
                        name="radios" value={team_building.id} onClick={handleClick}/>
                        <div>
                            <span>{team_building.name}</span>
                        </div>
                        </article>
                        :null
                    }
                </Col>
                ))
            }
            </Row>

            <h1 className='service_introduce_order'>03</h1>
            <h1 className='service_introduce_title'>엄선된 일정</h1>
            <h1 className='service_introduce_content'>실린더는 기획자, 디자이너, 개발자 등 직군에 알맞는 정보를 제공합니다.</h1>
            <h1 className='service_introduce_content'>정부지원사업 일정부터 멘토링 스터디, 컨퍼런스, 네트워킹파티 일정을 확인해보세요.</h1>
            <article className={'informGroup'}>
                <input type="checkbox" id='test-man' name="radios" value='test-man'/>
                <div>
                    <span>일정 제보 하러가기</span>
                </div>
            </article>
            
            
            <h1 className='service_introduce_order'>04</h1>
            <h1 className='service_introduce_title'>시드 투자자와의 멘토링 서비스</h1>
            <h1 className='service_introduce_content'>초기 스타트업은 강의가 아닌 맞춤화 된 멘토링이 필요합니다.</h1>
            <h1 className='service_introduce_content'>매 주 30-40팀씩 생겨나는 신생 투자 유치자들과 소통해보세요.</h1>

            {/* <div className='component-center'>
                <div className='service_introduce_circle'></div>
            </div> */}
        </div>
    );
}