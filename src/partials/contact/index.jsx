/*
This is the Contact section. The contact form uses EmailJS API
to send emails: https://www.emailjs.com
*/

import React, { useRef, useReducer } from 'react'
import emailjs from '@emailjs/browser'
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import * as z from 'zod'
import { css } from '@emotion/react'
import SectionWrapper from 'root/src/components/section-wrapper'
import Button from 'root/src/components/button'
import styled from './style'

// Define schema for EmailJS configuration
export const emailjsParamsSchema = z.object({
  serviceId: z.string().min(1),
  templateId: z.string().min(1),
  publicKey: z.string().min(1),
})

/*
Define EmailJS configuration
Make sure the values are replaced with your own EmailJS credentials.
Read the documentation for more information
*/
const emailjsParams = {
  serviceId: "your_service_id",
  templateId: "your_template_id",
  publicKey: "your_public_key",
}

// Define initial state
const initialState = {
  submit: {
    children: 'Send message',
    css: css``,
    disabled: false,
  },
  feedback: {
    css: css`
      display: none !important;
    `,
  },
}

const stateReducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      // Return loading state
      return {
        submit: {
          children: 'Wait...',
          css: css`
            background-color: #222 !important;
            border-color: #222 !important;
          `,
          disabled: true,
        },
        feedback: {
          css: css`
            display: none !important;
          `,
        },
      }

    case 'success':
      // Return success state
      return {
        submit: {
          children: 'Success',
          css: css`
            background-color: #28a745 !important;
            border-color: #28a745 !important;
          `,
          disabled: true,
        },
        feedback: {
          children: 'Thank you for your message. It has been sent.',
          css: css`
            color: #28a745;
            display: block !important;
          `,
        },
      }
    case 'failure':
      // Return failure state
      return {
        submit: {
          children: 'Error',
          css: css`
            background-color: #dc3545 !important;
            border-color: #dc3545 !important;
          `,
          disabled: true,
        },
        feedback: {
          children: 'Error occurred. Please check the console log.',
          css: css`
            color: #dc3545;
            display: block !important;
          `,
        },
      }
    default:
      return initialState
  }
}

const Contact = (props) => {
  // Ref to store form DOM element
  const form = useRef()

  // State management with reducer
  const [state, dispatch] = useReducer(stateReducer, initialState)

  // Validate EmailJS params
  emailjsParamsSchema.parse(emailjsParams)

  const sendEmail = (e) => {
    // Prevent default form submit behavior
    e.preventDefault()

    // Set state to loading
    dispatch({ type: 'loading' })

    // Send email via EmailJS
    emailjs
      .sendForm(
        emailjsParams.serviceId,
        emailjsParams.templateId,
        form.current,
        emailjsParams.publicKey,
      )
      .then(
        () => {
          // Set state to success
          dispatch({ type: 'success' })

          // Reset form
          form.current.reset()

          // Clear state after a delay
          setTimeout(() => {
            dispatch({ type: null })
          }, 6000)
        },
        (error) => {
          // eslint-disable-next-line no-console
          console.error(error)

          // Set state to failure
          dispatch({ type: 'failure' })

          // Clear state after a delay
          setTimeout(() => {
            dispatch({ type: null })
          }, 6000)
        },
      )
  }

  return (
    <SectionWrapper
      css={styled.Contact}
      altBg={true}
      headerData={{
        title: 'Get in Touch',
        description: 'Feel free to contact me anytime',
      }}
      {...props}
    >
      <Row>
        <Col xs='12'>
          {/* Form */}
          <Form onSubmit={sendEmail} ref={form}>
            <Row>
              {/* Form fields */}
              <Form.Group
                className='_group'
                as={Col}
                md='6'
                xs='12'
                controlId='formName'
              >
                <Form.Control
                  type='text'
                  placeholder='Name'
                  name='name'
                  required
                />
              </Form.Group>

              <Form.Group
                className='_group'
                as={Col}
                md='6'
                xs='12'
                controlId='formEmail'
              >
                <Form.Control
                  type='email'
                  placeholder='Email'
                  name='email'
                  required
                />
              </Form.Group>

              <Form.Group
                className='_group'
                as={Col}
                xs='12'
                controlId='formSubject'
              >
                <Form.Control
                  type='text'
                  placeholder='Subject'
                  name='subject'
                  required
                />
              </Form.Group>

              <Form.Group
                className='_group'
                as={Col}
                xs='12'
                controlId='formMessage'
              >
                <Form.Control
                  as='textarea'
                  rows='5'
                  placeholder='Message'
                  name='message'
                  required
                />
              </Form.Group>

              <Col xs='12'>
                {/* Submit button */}
                <Button className='_submit' type='submit' {...state.submit} />

                {/* Submission Feedback */}
                <p className='_feedback' {...state.feedback} />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </SectionWrapper>
  )
}

export default Contact
