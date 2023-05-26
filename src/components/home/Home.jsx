import React from 'react';
import './home.scss'
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {

  return (
    <>
      <div>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://scontent.fgyd20-2.fna.fbcdn.net/v/t39.30808-6/347598641_775093680665745_2516128797343770866_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=PmdgsltIcsQAX_lKDuX&_nc_ht=scontent.fgyd20-2.fna&oh=00_AfBdySAIzEvrC7ssfJboE0efKWN807eDVzyV97Oaj9i7JQ&oe=64755C52"
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://scontent.fgyd20-1.fna.fbcdn.net/v/t39.30808-6/347282188_738241081425635_5349158080061922307_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=gQFrtRqR1IIAX8beixe&_nc_ht=scontent.fgyd20-1.fna&oh=00_AfCBFb4CLNkGVWNXndnVmf1fDyG2JaDPuV_PuAAWSXMXuQ&oe=64756924"
              alt="Second slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://scontent.fgyd20-1.fna.fbcdn.net/v/t39.30808-6/347243466_1580583325805464_8964389742207058880_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=0dfdZwlHXScAX86Tt5n&_nc_ht=scontent.fgyd20-1.fna&oh=00_AfBe4wZALej60yIrcp9-6v-fzjG29f2oHkoHlI8nAukFWQ&oe=64761D8D"
              alt="Third slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className='CHOICES'>
        <div>

          <div className='onne'>
            <h2>TOP CHOICES</h2>
            <h1>Popular this week</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className='twoimg'>
            <div className='Furniture'>
              <div className='Furniture_img'>
                <img src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/book-sq.jpg'></img>
              </div>
              <div className='Furniture_text'>
                <div>
                  <h1>
                    Furniture
                    source
                    book
                  </h1>
                  <p>$39.90</p>
                  <h3>SHOP NOW</h3>
                </div>
              </div>
            </div>
            <div className='Norwegg'>
              {/* <img src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair-2-sq.jpg'></img> */}
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Home