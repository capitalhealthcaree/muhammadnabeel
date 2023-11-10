import { useContext, createContext, useReducer, useState } from 'react'
import SectionWrapper from 'root/src/components/section-wrapper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { cx } from '@emotion/css'
import Lightbox from 'root/src/components/lightbox'
import styled from './style'

// Create a Context for passing data between components
const Context = createContext({})

// Renders a preview card for each blog post
const Post = ({ data }) => {
  const { dispatch } = useContext(Context)
  // Populates the data state with content, causing the lightbox to show
  const clickEvent = () => {
    dispatch({ type: 'data', data })
  }

  // Destructure passed data
  const { title, images } = data

  // Format passed plain text date

  return (
    <Card css={styled.Post}>
      {/* Blog post card image */}
      <span onClick={clickEvent} className='_image-wrapper'>
        <Image
          className='card-img-top'
          style={{
            width: '100%',
            objectFit: 'cover',
          }}
          fill
          sizes='
            (max-width: 767.98px) 100vw,
            (min-width: 768px) and (max-width: 991.98px) 50vw,
            (min-width: 992px) 33.33vw
          '
          src={images}
          alt='Blog post thumbnail'
        ></Image>
        {/* <span className='_date'>{dateToText(createdAt)}</span> */}
      </span>
      {/* Blog post card body */}
      <Card.Body className='_content'>
        <Card.Title onClick={clickEvent} className='_title'>
          {title}
        </Card.Title>
        {/* <Card.Text className='_summary'>{summary}</Card.Text> */}
      </Card.Body>
    </Card>
  )
}

/*
Renders a swiper component to display blog post cards
Handles navigation between posts
*/
const PostsList = () => {
  // Get fetched data from context
  const { fetchedData } = useContext(Context)

  // State to store Swiper instance and slide edge status
  const [swiperInstance, setSwiperInstance] = useState(null)
  const [slideEdge, setSlideEdge] = useState([null, null])

  // Handle navigation clicks
  const handleNav = (action) => {
    // Check if Swiper instance exists
    if (!swiperInstance) return

    // Switch on action to call prev/next methods
    switch (action) {
      case 'PREV':
        // Go to previous slide
        swiperInstance.slidePrev()
        break
      case 'NEXT':
        // Go to next slide
        swiperInstance.slideNext()
        break
      default:
        break
    }
  }

  return (
    <div css={styled.PostsList}>
      <Row>
        {/* Navigation buttons */}
        <div className='_nav'>
          <span
            className={cx({
              '--active': !slideEdge[0],
            })}
            onClick={() => handleNav('PREV')}
          >
            PREV
          </span>
          <span
            className={cx({
              '--active': !slideEdge[1],
            })}
            onClick={() => handleNav('NEXT')}
          >
            NEXT
          </span>
        </div>

        {/* Swiper component */}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          onSlideChange={(swiper) => {
            // Update slide edge status
            setSlideEdge([swiper.isBeginning, swiper.isEnd])
          }}
          onInit={(swiper) => {
            // Set initial swiper instance and slide edge
            setSwiperInstance(swiper)
            setSlideEdge([swiper.isBeginning, swiper.isEnd])
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        >
          {/* Map over each blog post and embed it in slider */}
          {fetchedData?.map((mdxItem, i) => (
            <SwiperSlide key={i}>
              <Post data={mdxItem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Row>
    </div>
  )
}

/*
Layout for post content in lightbox modal
*/
const PostLightboxLayout = () => {
  // Get context from Context provider
  const { state } = useContext(Context)
  // Destructure Frontmatter data
  const { title, images, content } = state.data

  return (
    <Row css={styled.PostLightboxLayout} className='justify-content-center'>
      {/* Render content within a column for responsiveness */}
      <Col xs='12' lg='9'>
        <div className='_post-wrapper'>
          <h1 className='_title'>{title}</h1>
          <Image
            className='_post-thumbnail'
            src={images}
            width={1000}
            height={1000}
            sizes='
          (max-width: 991.98px) 100vw,
          (min-width: 992px) 75vw
        '
            alt='Blog post thumbnail'
          />

          <div
            className='_content'
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </Col>
    </Row>
  )
}

/*
Main lightbox modal component
Renders selected post content
*/
const PostLightbox = () => {
  // Get state and dispatch from context
  const { state, dispatch } = useContext(Context)

  return (
    <Lightbox
      css={styled.PostLightbox}
      show={state.show}
      onClose={() => {
        // Close lightbox
        dispatch({ type: 'data', data: false })
      }}
    >
      <Container>
        {/* Check for post data */}
        {state.data && (
          // Render MDX content
          <PostLightboxLayout />
        )}
      </Container>
    </Lightbox>
  )
}

/*
Main Blog component page.
Handles data fetching, context and lightbox state.
*/
const Blog = (props) => {
  const { data, ...otherProps } = props

  const testmonialDtata = props?.testmonialDtata?.data

  // Initial state
  const initialState = {
    show: false,
    data: false,
  }

  // State reducer
  const stateReducer = (state, action) => {
    switch (action.type) {
      // Set data and show lightbox
      case 'data':
        if (action.data) return { ...state, show: true, data: action.data }
        return { ...state, show: false }

      // Toggle lightbox show
      case 'show':
        return { ...state, show: action.show }

      default:
        return state
    }
  }

  // State and dispatch from useReducer
  const [state, dispatch] = useReducer(stateReducer, initialState)
  // Context data
  const contextData = {
    fetchedData: testmonialDtata,
    state,
    dispatch,
  }

  return (
    <SectionWrapper
      headerData={{
        title: 'My Testimonials',
        description: '',
      }}
      altBg={false}
      {...otherProps}
    >
      <Row>
        <Col xs='12'>
          {/* Provide context */}
          <Context.Provider value={contextData}>
            <PostsList />
            <PostLightbox />
          </Context.Provider>
        </Col>
      </Row>
    </SectionWrapper>
  )
}

export default Blog
