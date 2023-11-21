import ScrollWrapper from 'root/src/components/scroll-wrapper'
import Hero from 'root/src/partials/hero'
import About from 'root/src/partials/about'
import Services from 'root/src/partials/services'
import Hire from 'root/src/partials/hire'
import Testimonial from 'root/src/partials/testimonial'
import Blog from 'root/src/partials/blog'
import Contact from 'root/src/partials/contact'
import Scholarly from 'root/src/partials/scholarly'
import Certification from 'root/src/partials/certification'
import Footer from 'root/src/partials/footer'
import Metadata from 'root/src/metadata'
import Book from 'root/src/partials/book'
import api from 'root/utils/api'

const HomeVideo = ({
  aboutData,
  expertiseDtata,
  scholarlyWorkDtata,
  blogsDtata,
  booksDtata,
  testmonialDtata,
  certificationDtata,
}) => (
  <ScrollWrapper>
    <Metadata />
    <Hero nav='Home' id='home' variant='video' />
    <About nav='About Me' id='about' aboutData={aboutData} />
    <Services
      nav='My Expertise'
      id='expertise'
      expertiseDtata={expertiseDtata}
    />
    <Hire id='hire' />
    <Scholarly
      nav='My Scholarly Work'
      id='scholarly'
      scholarlyWorkDtata={scholarlyWorkDtata}
    />
    <Book nav='My Books' id='publication' booksDtata={booksDtata} />
    <Certification
      nav='My Certifications'
      id='certification'
      testmonialDtata={certificationDtata}
    />
    <Blog nav='My Blogs' id='blog' scholarlyWorkDtata={blogsDtata} />
    <Testimonial
      nav='My Testimonials'
      id='testimonial'
      testmonialDtata={testmonialDtata}
    />
    <Contact nav='Contact' id='contact' />
    <Footer id='footer' aboutData={aboutData} />
  </ScrollWrapper>
)

export default HomeVideo

export const getServerSideProps = async () => {
  const about = await api.get('getAbout/')
  const expertise = await api.get('getExpertise/')
  const scholarlyWork = await api.get('getAllWorks/')
  const blogs = await api.get('getAllBlogs/')
  const books = await api.get('getAllBooks/')
  const testmonials = await api.get('getAllTestmonials/')
  const certification = await api.get('getAllCertification/')

  return {
    props: {
      aboutData: about.data,
      expertiseDtata: expertise.data,
      scholarlyWorkDtata: scholarlyWork.data,
      blogsDtata: blogs.data,
      booksDtata: books.data,
      testmonialDtata: testmonials.data,
      certificationDtata: certification.data,
    },
  }
}
