import { Col } from 'react-bootstrap'
import SectionWrapper from 'root/src/components/section-wrapper'
import Button from 'root/src/components/button'
import Image from 'next/image'
import styled from './style'

const About = (props) => {
  const data = props.aboutData.data[0]
  return (
    <SectionWrapper
      css={styled.About}
      headerData={{ title: 'About me', description: 'Get to know me' }}
      {...props}
    >
      <div className='row align-items-center'>
        <Col xs='12' lg='5' className=' _image'>
          <Image
            className='img-thumbnail'
            sizes='
            (max-width: 992px) 250px,
            (min-width: 992px) 41.66vw
          '
            alt='About Picture'
            src={data.imgUrl}
            width={540}
            height={675}
          />
        </Col>
        <Col xs='12' lg='7'>
          <h2 className='_subtitle'>Who am i?</h2>

          <h2 className='_title'>{data.title}</h2>

          <div className='_description mb-3'>
            <p>{data.paragraph1}</p>
            <p>{data.paragraph2}</p>
          </div>
          <Button className='_button' href={data.cvUrl} download>
            Download CV
          </Button>
        </Col>
      </div>
    </SectionWrapper>
  )
}
export default About
