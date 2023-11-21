/*
This is the footer section
*/

import { Col, Row } from 'react-bootstrap'
import * as icons from '@swiftcarrot/react-ionicons'
import { css } from '@emotion/react'
import { darken } from 'polished'
import SectionWrapper from 'root/src/components/section-wrapper'
import styled from './style'

// Single block component to display icon and content
const SingleBlock = (props) => {
  const { cols, Icon, content } = props
  return (
    <Col {...cols}>
      <div css={styled.SingleBlock}>
        {/* Icon to display */}
        <Icon className='_icon' />
        {/* Content to display */}
        <p className='_content'>{content}</p>
      </div>
    </Col>
  )
}

// Social icon component
const SocialIcon = (props) => {
  const { url, Icon, color } = props
  return (
    <a
      href={url}
      css={css`
        background-color: ${color};
        &:focus,
        &:hover {
          background-color: ${darken(0.08, color)};
        }
        ${styled.SocialIcon}
      `}
    >
      {/* Icon to display */}
      <Icon className='_icon' />
    </a>
  )
}

// Footer component
const Footer = (props) => {
  const datas = props?.aboutData?.data[0]

  return (
    <SectionWrapper css={styled.Footer} {...props}>
      {/* List contact information blocks */}
      <Row className='_contact'>
        <SingleBlock
          Icon={icons.MapSharp}
          content={<span>{datas.address}</span>}
          cols={{ xs: '12', sm: '4' }}
        />
        <SingleBlock
          Icon={icons.CallSharp}
          content={<a href={`tel:${datas.phone}`}> {datas.phone}</a>}
          cols={{ xs: '12', sm: '4' }}
        />
        <SingleBlock
          Icon={icons.SendSharp}
          content={<a href={`mailto:${datas.mail}`}>{datas.mail}</a>}
          cols={{ xs: '12', sm: '4' }}
        />
      </Row>
      {/* List social media icons and copyright notice */}
      <Row className='_row _mini'>
        <Col xs='12' lg='5' className='_socials'>
          <SocialIcon
            url='https://x.com/KhubaibAli26?t=hGYhf3rABES1xkO3_dKpbw&s=08'
            Icon={icons.LogoTwitter}
            color='#1DA1F2'
          />
          <SocialIcon
            url='https://instagram.com/khubaibalii?igshid=OGQ5ZDc2ODk2ZA=='
            Icon={icons.LogoInstagram}
            color='#C32361'
          />
          <SocialIcon
            url='https://www.linkedin.com/in/khubaib-ali?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            Icon={icons.LogoLinkedin}
            color='#0077B5'
          />
          {/* <SocialIcon url='#0' Icon={icons.LogoYoutube} color='#c33a38' />
        <SocialIcon url='#0' Icon={icons.LogoGithub} color='#6e5494' /> */}
          <SocialIcon
            url='https://www.facebook.com/khubaibalii?mibextid=ZbWKwL'
            Icon={icons.LogoFacebook}
            color='#3B5998'
          />
        </Col>
        <Col as='p' xs='12' lg='7' className='_copyright-notice'>
          Copyright © 2023 , all rights reserved. Developed by{' '}
          <a
            href='https://www.linkedin.com/in/muhammad-hassan-sadiq-a902941a1'
            target='_blank'
          >
            Muhammad Hasssan
          </a>
          .
        </Col>
      </Row>
    </SectionWrapper>
  )
}

export default Footer
