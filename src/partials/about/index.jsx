import { Col } from 'react-bootstrap'
import SectionWrapper from 'root/src/components/section-wrapper'
import Button from 'root/src/components/button'
import aboutImg from 'root/public/partials/about/picture.jpg'
import Image from 'next/image'
import styled from './style'

const About = (props) => {
  console.log('test')
  return (
    <SectionWrapper
      css={styled.About}
      headerData={{ title: 'About me', description: 'Get to know me' }}
      {...props}
    >
      <div className='row align-items-center'>
        {/* Image part - Displays profile image */}
        <Col xs='12' lg='5' className=' _image'>
          <Image
            className='img-thumbnail'
            sizes='
            (max-width: 992px) 250px,
            (min-width: 992px) 41.66vw
          '
            alt='About Picture'
            src={aboutImg}
          />
        </Col>

        {/* Text part - Displays name, description, contact details */}
        <Col xs='12' lg='7'>
          {/* Information part */}
          {/* <h2 className='_subtitle'>Who am i?</h2> */}

          {/* <h2 className='_title'>
            I&apos;m Alex Smith, a visual UX/UI Designer and Web Developer
          </h2> */}

          <div className='_description mb-3'>
            <p>
              I&apos;m Muhammad Nabeel, a dedicated Pharmacist and Medical
              Writer, currently based in Pakistan. I have extensive experience
              in crafting informative and scientifically accurate medical
              content. My expertise in the healthcare field enables me to
              translate complex medical concepts into comprehensible and
              valuable information for various audiences. As a pharmacist, I
              have an in-depth understanding of pharmaceuticals and their impact
              on patient health. This knowledge is a valuable asset in creating
              content that not only educates but also ensures the well-being of
              readers.
            </p>
            <p>
              My commitment to staying up-to-date with the latest medical
              research and developments allows me to provide accurate and timely
              information. I am skilled at distilling complex data into clear
              and engaging narratives, making health-related topics accessible
              to a broad audience.
            </p>
            <span>
              My ability to stay current with medical advancements, combined
              with my writing proficiency, ensures that I can efficiently
              prioritize tasks, adapt to evolving healthcare topics, and deliver
              high-quality content promptly. I&apos;m here to transform medical
              knowledge into informative and engaging content that serves both
              professionals and the public. I have authored several books and
              research papers aiming to take my research career far ahead with
              passion and discipline.
            </span>
          </div>

          {/* Buttons part */}
          <Button className='_button' href='/partials/about/cv.pdf' download>
            Download CV
          </Button>
        </Col>
      </div>
    </SectionWrapper>
  )
}
export default About
