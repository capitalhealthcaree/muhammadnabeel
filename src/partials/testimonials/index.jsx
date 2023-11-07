import { Col } from 'react-bootstrap'
import SectionWrapper from 'root/src/components/section-wrapper'
import book1Img from 'root/public/partials/publication/book1.jpg'
import book2Img from 'root/public/partials/publication/book2.jpg'

import Image from 'next/image'
import styled from './style'

const About = (props) => (
  <SectionWrapper
    css={styled.About}
    headerData={{ title: 'Testimonials', description: '' }}
    {...props}
  >
    <div className='row align-items-center'>
      {/* Image part - Displays profile image */}
      <Col xs='12' lg='6' className=' _image'>
        <Image
          className='img-thumbnail'
          sizes='
            (max-width: 992px) 250px,
            (min-width: 992px) 41.66vw
          '
          alt='About Picture'
          src={book1Img}
        />
      </Col>

      <Col xs='12' lg='6' className=' _image'>
        <Image
          className='img-thumbnail'
          sizes='
            (max-width: 992px) 250px,
            (min-width: 992px) 41.66vw
          '
          alt='About Picture'
          src={book2Img}
        />
      </Col>
    </div>
  </SectionWrapper>
)

export default About
