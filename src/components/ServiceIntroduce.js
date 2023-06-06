import { Row,Col } from 'react-bootstrap';
import './ServiceIntroduce.css'
import { color, motion } from "framer-motion"


export default function ServiceIntroduce(){
    const team_building_list = [
        {id:'col'},
        {id:'team_building_youth', name:'청소년 스타트업 팀빌딩 하러가기',link:'https://open.kakao.com/o/g8Z7TLnf'},
        {id:'team_building_startup',name:'대학생 스타트업 팀빌딩 하러가기',link:'https://open.kakao.com/o/gXVAz5mf'},
        {id:'col'},
        {id:'col'},
        {id:'team_building_office',name:'직장인 스타트업 팀빌딩 하러가기',link:'https://open.kakao.com/o/g8RTLLnf'},
        {id:'team_building_startup',name:'초기스타트업 경력자 팀빌딩 하러가기',link:'https://open.kakao.com/o/g3IJMLnf'},
        {id:'col'},
    ];
    let report_calendar_link = 'https://forms.gle/f6iVxt5y3SJoMj8p6'
    let silinder_link = 'https://www.silinder.co.kr'

    let link_list = {
        'silinder_link': 'https://www.silinder.co.kr',
        'menti_link': 'https://forms.gle/pGbcS4ZsVeRNtajx7',
        'mento_link': 'https://forms.gle/3YZNXgciT2LEHjqB8',
        'report_calendar_link':'https://forms.gle/f6iVxt5y3SJoMj8p6',
        'feedback_link':'https://forms.gle/VxgVBhFB9BKX234u5'
    }

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
                    <h1 className='service_introduce_title'>스타트업 멘토링 서비스</h1>
                    <div className='d-none d-md-block'>
                        <h1 className='service_introduce_content'>현재 많은 투자 유치 스타트업 CEO, 종사자분들께서 적극적인 멘토링을 기다리고 있으니 많은 지원 바랍니다.</h1>
                    </div>
                    <div className='d-block d-md-none '>
                        <h1 className='service_introduce_content'>현재 많은 투자 유치 스타트업 CEO, 종사자분들께서</h1>
                        <h1 className='service_introduce_content'>적극적인 멘토링을 기다리고 있으니 많은 지원 바랍니다.</h1>
                    </div>
                    {/* <div className='d-none d-sm-block'>
                        <div className='mentoring '>
                        <article className='greenHoverButton mento_apply'>
                            <input type="button" onClick={()=>{window.location.href = link_list['mento_link']}}/>
                            <div>
                                <span>멘토 신청하기</span>
                            </div>
                        </article>
                        <article className='greenHoverButton menti_apply'>
                            <input type="button" onClick={()=>{window.location.href = link_list['menti_link']}}/>
                            <div>
                                <span>멘티 신청하기</span>
                            </div>
                        </article>
                        </div>
                    </div> */}
                    {/* <div className='d-block d-sm-none'>
                        <div className='mentoring-mobile'> */}
                    <div className='mentoring'>
                        <article className='greenHoverButton mento_menti_apply'>
                            <input type="button" onClick={()=>{window.location.href = link_list['mento_link']}}/>
                            <div>
                                <span>멘토 멘티 신청하기</span>
                            </div>
                        </article>
                    </div>
                        {/* </div>
                    </div> */}
                    
                    
                    <h1 className='service_introduce_order'>02</h1>
                    <h1 className='service_introduce_title'>관심  분야 별 맞춤 일정</h1>
                    
                    <h1 className='service_introduce_content'>실린더는 관심 분야에 알맞는 창업 관련 정보를 제공합니다.</h1>
                    <h1 className='service_introduce_content'>창업 지원 공모전부터 컨퍼런스, 네트워킹 일정을 확인해보세요.</h1>
                    

                    <h1 className='service_introduce_order'>03</h1>
                    <h1 className='service_introduce_title'>엄선된 일정</h1>
                    <h1 className='service_introduce_content'>유용한 컨퍼런스와 스터디 일정을 사람들과 공유하세요.</h1>
                    <h1 className='service_introduce_content bottom-20'>실린더의 MD를 통해 검수 후 모두에게 알려드릴게요.</h1>
                    <article className='greenHoverButton schedule_report'>
                        <input type="button" onClick={()=>{window.location.href = link_list['report_calendar_link']}}/>
                        <div>
                            <span>일정 제보 하러가기</span>
                        </div>
                    </article>

                    <h1 className='service_introduce_order'>04</h1>
                    <h1 className='service_introduce_title'>공모전 별 팀빌딩</h1>
                    <h1 className='service_introduce_content'>팀 빌딩이 필요하시다면 아래 링크를 통해 </h1>
                    <h1 className='service_introduce_content bottom-20'>같은 직분의 사람들과 이야기를 나누어보세요.</h1>
                    <Row className="justify-content-md-center">
                    {
                        team_building_list.map((team_building)=>(
                            team_building.id !== "col"
                            ?
                            <Col xs="12" md="4" lg="3" className='button-col'>
                                <article className={'greenHoverButton'}>
                                    <input 
                                    type="button" id={team_building.id} 
                                    name="radios" value={team_building.id} onClick={()=>{window.location.href = team_building.link}}/>
                                    <div>
                                        <span>{team_building.name}</span>
                                    </div>
                                </article>
                            </Col>
                            :<Col xs="0" md="2" lg="3"></Col>
                        ))
                    }
                    </Row>
                    

                    <h1 className='service_introduce_order'>05</h1>
                    <h1 className='service_introduce_title'>사업계획서 무료 피드백</h1>
                    <h1 className='service_introduce_content'>스타트업 전문 멘토가 여러분의 사업계획서를 피드백해드립니다.</h1>
                    <h1 className='service_introduce_content bottom-20'> 6월 단 한 달, 무료로 사업 계획서를 검토 받아보세요.</h1>
                    <article className='greenHoverButton schedule_report bottom-63'>
                        <input type="button" onClick={()=>{window.location.href = link_list['feedback_link']}}/>
                        <div>
                            <span>사업계획서 피드백 받기</span>
                        </div>
                    </article>

                    <div className='d-none d-sm-block lineGradientGap'>
                        <motion.div 
                        initial={{ opacity: 0, y: -400}}
                        viewport={{ once:true }}
                        whileInView={{
                            opacity: 1, 
                            scale: 1,
                            transition:{ delay: 0.5, duration: 3},
                            y: 0
                        }}
                        >
                            <div className='lineGradient'></div>
                            <div className='lineGradientCircle'></div>
                        </motion.div>
                    </div>
                    <div className='d-block d-sm-none mobile_lineGradientGap'>
                        <motion.div 
                        viewport={{ once:true }}
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
                      viewport={{ once:true }}
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