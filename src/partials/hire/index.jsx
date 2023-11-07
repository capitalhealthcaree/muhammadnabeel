/*
This is the Hire section
*/

import SectionWrapper from 'root/src/components/section-wrapper'
import hireImg from 'root/public/partials/hire/background.jpg'
import { Col, Row } from 'react-bootstrap'
import Button from 'root/src/components/button'
import { Link as ScrollLink } from 'react-scroll'
import styled from './style'

const Hire = (props) => (
  <SectionWrapper
    css={styled.Hire}
    backgroundProps={{
      alt: 'Hire background',
      src: hireImg,
      brightness: '17%',
    }}
    {...props}
  >
    {/* Title and description part */}
    <Row className='_row'>
      <Col className='_wrapper' xs='12' md='8'>
        <h1 className='_title'>Let&apos;s work together!</h1>

        <p className='_description'>
          I am available for freelance projects. Hire me and get your project
          done.
        </p>
      </Col>
      {/* Button part */}
      <Col className='_wrapper' xs='12' md='4'>
        <div className='_button-wrapper'>
          {/* Button component linked to contact section */}
          <Button
            as={ScrollLink}
            to={'contact'}
            spy={true}
            smooth={true}
            duration={600}
            className='_button'
          >
            Hire me
          </Button>
        </div>
      </Col>
    </Row>
  </SectionWrapper>
)

export default Hire
