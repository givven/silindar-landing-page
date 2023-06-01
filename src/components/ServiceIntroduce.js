import { Row,Col } from 'react-bootstrap';
import './ServiceIntroduce.css'
import { color, motion } from "framer-motion"


export default function ServiceIntroduce(){
    const team_building_list = [
        {id:'col'},
        {id:'team_building_youth', name:'청소년 예비창업가 팀빌딩 하러가기'},
        {id:'team_building_startup',name:'청년 예비창업가 팀빌딩 하러가기'},
        {id:'col'},
        {id:'col'},
        {id:'team_building_office',name:'직장인 예비창업가 팀빌딩 하러가기'},
        {id:'team_building_startup',name:'초기스타트업 경력자 팀빌딩 하러가기'},
        {id:'col'},
    ];

    function handleClick(e){
        window.location.href = 'https://open.kakao.com/o/gysUutgf?rt=O009'
    }

    const schedule_list = [
        {id:'schedule_youth', name:'일정 제보 하러가기'},
    ];

    return (
        <div>
            <div className='box'>
                <div id='service_introduce'>
                    <h1 className='service_introduce_main_title'>서비스 소개</h1>
                    <h1 className='service_introduce_order'>01</h1>
                    <h1 className='service_introduce_title'>관심  분야 별 맞춤 일정</h1>
                    <div className='d-none d-sm-block'>
                        <h1 className='service_introduce_content'>실린더는 기획자, 디자이너, 개발자, 예비 창업가 등 관심분야에 알맞는 정보를 제공합니다.</h1>
                        <h1 className='service_introduce_content'>누구나 도전 가능한 창업지원 공모전 일정부터 멘토링 스터디, 컨퍼런스, 네트워킹파티 일정을 확인해보세요.</h1>
                    </div>
                    <div className='d-block d-sm-none'>
                        <h1 className='service_introduce_content'>실린더는 기획자, 디자이너, 개발자, 예비 창업가 등</h1>
                        <h1 className='service_introduce_content'>관심분야에 알맞는 정보를 제공합니다.</h1>
                        <h1 className='service_introduce_content'>누구나 도전 가능한 창업지원 공모전 일정부터 멘토링 스터디,</h1>
                        <h1 className='service_introduce_content'>컨퍼런스, 네트워킹파티 일정을 확인해보세요.</h1>
                    </div>
                    <h1 className='service_introduce_order'>02</h1>
                    <h1 className='service_introduce_title'>공모전 별 팀빌딩</h1>
                    <h1 className='service_introduce_content'>실린더가 제공하는 창업 공모전 정보는 '누구나' 도전 가능합니다.</h1>
                    <h1 className='service_introduce_content bottom-20'>팀 빌딩이 필요하다면 아래 링크를 통해 들어와 이야기를 나누어보세요.</h1>
                    <Row className="justify-content-md-center">
                    {
                        team_building_list.map((team_building)=>(
                            team_building.id !== "col"
                            ?
                            <Col xs="12" md="4" lg="3" className='button-col'>
                                <article className={'greenHoverButton'}>
                                    <input 
                                    type="button" id={team_building.id} 
                                    name="radios" value={team_building.id} onClick={handleClick}/>
                                    <div>
                                        <span>{team_building.name}</span>
                                    </div>
                                </article>
                            </Col>
                            :<Col xs="0" md="2" lg="3"></Col>
                        ))
                    }
                    </Row>

                    <h1 className='service_introduce_order'>03</h1>
                    <h1 className='service_introduce_title'>엄선된 일정</h1>
                    <h1 className='service_introduce_content'>유용한 컨퍼런스와 스터디 일정을 사람들과 공유하세요.</h1>
                    <h1 className='service_introduce_content bottom-20'>실린더의 MD를 통해 검수 후 모두에게 알려드릴게요.</h1>
                    <article className='greenHoverButton schedule_report'>
                        <input type="button" onClick={handleClick}/>
                        <div>
                            <span>일정 제보 하러가기</span>
                        </div>
                    </article>
                    
                    
                    <h1 className='service_introduce_order'>04</h1>
                    <h1 className='service_introduce_title'>시드 투자자와의 멘토링 서비스</h1>
                    <h1 className='service_introduce_content'>초기 스타트업은 강의가 아닌 맞춤화 된 멘토링이 필요합니다.</h1>
                    <h1 className='service_introduce_content bottom-20'>매 주 30-40팀씩 생겨나는 신생 투자 유치자들과 소통해보세요.</h1>
                    <article className='greenHoverButton schedule_report bottom-63'>
                        <input type="button" onClick={handleClick}/>
                        <div>
                            <span>시드 투자자와 소통하기</span>
                        </div>
                    </article>

                    <div className='d-none d-sm-block lineGradientGap'>
                        <motion.div 
                        initial={{ opacity: 0, y: -400}}
                        whileInView={{
                            opacity: 1, 
                            scale: 1,
                            transition:{ delay: 0.5, duration: 1},
                            y: 0
                        }}
                        >
                            <div className='lineGradient'></div>
                            <div className='lineGradientCircle'></div>
                        </motion.div>
                    </div>
                    <div className='d-block d-sm-none mobile_lineGradientGap'>
                        <motion.div 
                        initial={{ opacity: 0, y: -200}}
                        whileInView={{
                            opacity: 1, 
                            scale: 1,
                            transition:{ delay: 0.5, duration: 1},
                            y: 0
                        }}
                        >
                            <div className='lineGradient mobile_lineGradient'></div>
                            <div className='lineGradientCircle mobile_lineGradientCircle'></div>
                        </motion.div>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0,}}
                      whileInView={{
                        opacity: 1, 
                        scale: 1,
                        transition:{ delay: 1, duration: 1.5},
                        x: 0
                      }}
                    >
                    <div className='service_introduce_recommend'>
                        <h1>실린더, 이런 분들께 추천드립니다.</h1>
                        <Row className="justify-content-md-center">
                            <Col sm="12" md="4">
                                <div className='d-none d-sm-block'>
                                    <img src='images/recommend_1.png'></img>
                                    <h1 className='t1'>창업을 어떻게 시작해야할 지 막막했던 분</h1>
                                </div>
                                <div className='d-block d-sm-none'>
                                    <div className='mobile-introduce-image'>
                                        <img src='images/recommend_1_mobile.png' ></img>
                                        <div>
                                            <h1 className='t1-mobile'>창업을 어떻게</h1>
                                            <h1 className='t1-mobile'>시작해야할 지 막막했던 분</h1>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="12" md="4">
                                <div className='d-none d-sm-block'>
                                    <img src='images/recommend_2.png'></img>
                                    <h1 className='t1'>전문적인 스타트업 맞춤 멘토링/과외가 필요한 분</h1>
                                </div>
                                <div className='d-block d-sm-none'>
                                    <div className='mobile-introduce-image'>
                                        <img src='images/recommend_2_mobile.png'></img>
                                        <div>
                                            <h1 className='t1-mobile'>전문적인 스타트업</h1>
                                            <h1 className='t1-mobile'>맞춤 멘토링/과외가 필요한 분</h1>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="12" md="4">
                                <div className='d-none d-sm-block'>
                                    <img src='images/recommend_3.png'></img>
                                    <h1 className='t1'>업계 사람들과 네트워크를 쌓고 싶은 분</h1>
                                </div>
                                <div className='d-block d-sm-none'>
                                    <div className='mobile-introduce-image '>
                                        <img src='images/recommend_3_mobile.png'></img>
                                        <div className='one_h1'>
                                            <h1 className='t1-mobile'>업계 사람들과 네트워크를 쌓고 싶은 분</h1>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    </motion.div>

                    {/* <div className='component-center'>
                        <div className='service_introduce_circle'></div>
                    </div> */}
                </div>
            </div>
            {/* <div className='Red'>
            </div> */}
        </div>
    );
}