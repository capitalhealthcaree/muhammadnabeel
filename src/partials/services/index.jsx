import { Row, Col } from 'react-bootstrap'
import SectionWrapper from 'root/src/components/section-wrapper'
import styled from './style'

// Services component
const Services = (props) => {
  const data = [
    {
      title: 'Clinical Cancer Research',
      description:
        'Expert in analyzing and applying Clinical Cancer Research for innovative oncological therapies and translational medicine studies.',
    },
    {
      title: 'Scientific and Medical writing',
      description:
        'Skilled in crafting detailed, evidence-based scientific and medical documents, emphasizing clarity and comprehensive research integration.',
    },
    {
      title: 'MultidisciplInary collaborations',
      description:
        'Engages across various disciplines to foster comprehensive approaches, integrating diverse expertise for innovative problem-solving and research advancements.',
    },
    {
      title: 'Healthcare Projects and Communications',
      description:
        'Facilitates effective dialogue and project execution within healthcare settings, ensuring clear messaging and collaborative teamwork for successful outcomes.',
    },
    {
      title: 'Peer-Reviewer for cancer journals',
      description:
        'Provides critical evaluations of research manuscripts in oncology, contributing to the advancement of cancer knowledge and scholarly integrity.',
    },
  ]
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
          {data.map((item, key) => (
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
