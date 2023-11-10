import { Row, Col } from 'react-bootstrap'
import SectionWrapper from 'root/src/components/section-wrapper'
import styled from './style'

const Services = (props) => {
  const expertiseDtata = props.expertiseDtata.data

  return (
    <>
      <SectionWrapper
        css={styled.Services}
        altBg={true}
        headerData={{
          title: 'My Expertise',
          description: '',
        }}
        {...props}
      >
        {/* List of services */}
        <Row>
          {expertiseDtata.map((item, key) => (
            <Col xs='12' md='6' lg='4' key={key}>
              <div css={styled.Service}>
                <h6 className='_title'>{item.title}</h6>
                <p className='_description'>{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </SectionWrapper>
    </>
  )
}
export default Services
