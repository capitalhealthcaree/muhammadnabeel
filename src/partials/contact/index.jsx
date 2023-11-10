import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import SectionWrapper from 'root/src/components/section-wrapper'
import { ToastContainer, toast } from 'react-toastify'
import api from 'root/utils/api'
import styled from './style'

const Contact = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [loader, setLoader] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()

    const finalData = {
      name,
      email,
      subject,
      message,
    }
    setLoader(true)
    const res = await api.post('/createContact', finalData)
    if (res.status === 200) {
      toast('Thank you! Your message is successfully received')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      setLoader(false)
    }
  }

  return (
    <>
      <ToastContainer />

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
            <Form onSubmit={sendEmail}>
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
                    required
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
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
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
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
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value)
                    }}
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
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value)
                    }}
                  />
                </Form.Group>

                <Col xs='12'>
                  {/* Submit button */}
                  <Button
                    className='_submit'
                    type='submit'
                    css={styled.Button}
                    disabled={loader}
                  >
                    {loader && (
                      <div
                        className='spinner-border'
                        role='status'
                        style={{
                          color: 'white',
                          width: '0.7rem',
                          height: '0.7rem',
                          borderWidth: '0.2em',
                          marginRight: '0.5rem',
                        }}
                      ></div>
                    )}
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </SectionWrapper>
    </>
  )
}

export default Contact
