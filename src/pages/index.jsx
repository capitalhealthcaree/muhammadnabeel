import ScrollWrapper from 'root/src/components/scroll-wrapper'
import Hero from 'root/src/partials/hero'
import About from 'root/src/partials/about'
import Services from 'root/src/partials/services'
import Hire from 'root/src/partials/hire'
import Publication from 'root/src/partials/publications'
import Testimonial from 'root/src/partials/testimonials'
import Blog from 'root/src/partials/blog'
import Contact from 'root/src/partials/contact'
import Scholarly from 'root/src/partials/scholarly'
import Footer from 'root/src/partials/footer'
import Metadata from 'root/src/metadata'

const HomeVideo = () => (
  <ScrollWrapper>
    <Metadata />
    <Hero nav='Home' id='home' variant='video' />
    <About nav='About' id='about' />
    <Services nav='expertise' id='expertise' />
    <Hire id='hire' />
    <Scholarly nav='Scholarly Work' id='scholarly' />
    <Publication nav='Boooks' id='publication' />
    <Blog nav='Blog' id='blog' />
    <Testimonial nav='Testimonial' id='testimonial' />
    <Contact nav='Contact' id='contact' />
    <Footer id='footer' />
  </ScrollWrapper>
)

export default HomeVideo
