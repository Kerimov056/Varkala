import React, { useState, useEffect } from 'react';
import './home.scss'
import Carousel from 'react-bootstrap/Carousel';
import { useSpring, animated } from "react-spring"
import ProducCart from './ProducCart';
import { Homecart } from '../Helpers/Homecart'
import { AiOutlineSearch } from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';
import AOS from "aos";
import "aos/dist/aos.css";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";



const Home = () => {

  useEffect(() => {
    AOS.init({
      offset: 130,
      duration: 1500,
      delay: 60,
    });
    AOS.refresh();
  }, []);


  //filtirlemis cartlari datani yigmaq ucun olan State //------
  const [filter, setFilter] = useState(Homecart)
  //-------------------------------------

  //Price'a gore filterleme //---------
  const [price, setPrice] = useState(1)
  const change = (e) => {
    setPrice(e.target.value);
  }
  //---------------------------

  //name gore filter etmek search mentiq ile //--------
  const filterName = e => {
    const search = e.target.value.toLowerCase()
    const filterName = Homecart.filter(names => names.name.toLowerCase().includes(search))
    setFilter(filterName)
  }
  //---------------------------


  //checkbox'la catageroya gore filter islemi etmek //---------
  const [selected, setSelected] = useState([]);

  const CategoryFilter = (e, category) => {
    const isChecked =e.target.checked  //demeli burda catagoriya gore secdik ve onu
    if(isChecked){                    //uyguladig
      setSelected((prev)=> [...prev, category])
    }
    else{
      setSelected((prev)=> prev.filter((selectedCategory)=> selectedCategory !==category))
    }
  }

  const filterHomeCart = () => { 
    if(selected.length === 0){
      return filter
    }
    else{
      return  filter.filter((item)=> selected.includes(item.category))
       
    }
  }
  //---------------------------------------

  

  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 300,
      config: { mass: 1, tension: 20, friction: 10 },
    });

    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }

  function Number1({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 700,
      config: { mass: 1, tension: 20, friction: 10 },
    });

    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }

  function Number2({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 1000,
      config: { mass: 1, tension: 20, friction: 10 },
    });

    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }

  function Number3({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 1000,
      config: { mass: 1, tension: 20, friction: 10 },
    });

    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }


  return (
    <>
      <div style={{ zIndex: "-99" }} id='ResCoursel'>
        <Carousel variant="dark" style={{ zIndex: "-99" }} id='ResCoursel'>
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
              <div className='Norwegg_text'>
                <div>
                  <h1>
                    Norwegg
                    design
                    chair
                  </h1>
                  <p>$139.90</p>
                  <h3>SHOP NOW</h3>
                </div>
              </div>
              <div className='Norwegg_img'>
                <img src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair-2-sq.jpg'></img>
              </div>
            </div>
          </div>

          <div className='twoimg towtwo'>
            <div className='Norwegg'>
              <div style={{ marginRight: "6px", width: "46%" }} className='Norwegg_text'>
                <div>
                  <h1>
                    Sunn
                    Clock
                  </h1>
                  <p>$89.90</p>
                  <h3>SHOP NOW</h3>
                </div>
              </div>
              <div style={{ width: "90%" }} className='Norwegg_img'>
                <img src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/clock-sq.jpg'></img>
              </div>
            </div>

            <div style={{ marginTop: "120px" }} className='Furniture'>
              <div className='Furniture_img'>
                <img src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/box-sq.jpg'></img>
              </div>
              <div className='Furniture_text'>
                <div>
                  <h1>
                    Accessory
                    boxes
                  </h1>
                  <p> $39.90</p>
                  <h3>SHOP NOW</h3>
                </div>
              </div>
            </div>
          </div>


          <div style={{ marginBottom: "70px", marginTop: "120px" }} className='twoimg towthree'>
            <div style={{ marginLeft: "-30px", marginTop: "-80px" }} className='Furniture'>
              <div style={{ width: "250px", height: "280px", marginLeft: "70px" }} className='Furniture_img'>
                <img src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/clock2-sq.jpg'></img>
              </div>
              <div style={{ marginLeft: "40px", marginTop: "-22px" }} className='Furniture_text'>
                <div>
                  <h1>
                    Swiss
                    Minutes
                    Black
                  </h1>
                  <p>$149.90</p>
                  <h3>SHOP NOW</h3>
                </div>
              </div>
            </div>
            <div className='Norwegg ResNorwegg'>
              <div style={{ width: "70px", marginRight: "200px" }} className='Norwegg_text'>
                <div style={{ width: "100px" }}>
                  <h1>
                    Korona
                    room chair
                  </h1>
                  <p>$39.90</p>
                  <h3>SHOP NOW</h3>
                </div>
              </div>
              <div style={{ height: "120%", width: "100%" }} id='' className='Norwegg_img'>
                <img src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair3-3-sq.jpg'></img>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='time'>
        <div>
          <img src='https://scontent.fgyd20-2.fna.fbcdn.net/v/t39.30808-6/347553610_251744430842981_5232660935622061645_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=X5EgbWAQf2YAX8u9XJD&_nc_ht=scontent.fgyd20-2.fna&oh=00_AfBM4SH802_GnjfvEhFruUtoAk71z5bP--IvIlvXmQ1Fng&oe=6475CBD6'></img>
          <div className='time_in'>
            <div>
              <div>
                <h2>DEAL OF THE WEEK</h2>
                <h1>Black and white Nordegg chairs</h1>
                <p><span className='onespan'>$129.00</span><span>$79.00</span></p>
                <button>$50 off</button>
                <div>
                  <div>
                    <h4><Number n={220} /></h4>
                    <p>days</p>
                  </div>
                  <div>
                    <h4><Number1 n={220} /></h4>
                    <p>Hours</p>
                  </div>
                  <div>
                    <h4><Number2 n={220} /></h4>
                    <p>minutes</p>
                  </div>
                  <div>
                    <h4><Number3 n={220} /></h4>
                    <p>seconds</p>
                  </div>
                </div>

                <button id='btn'>SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='ResTime'>
        <div>
          <h2>DEAL OF THE WEEK</h2>
          <h1>Black and white Nordegg chairs</h1>
          <p><span className='onespan'>$129.00</span><span>$79.00</span></p>
          <button className='ResELL'>%50 off</button>
          <div>
            <div>
              <h4><Number n={220} /></h4>
              <p>days</p>
            </div>
            <div>
              <h4><Number1 n={220} /></h4>
              <p>Hours</p>
            </div>
            <div>
              <h4><Number2 n={220} /></h4>
              <p>minutes</p>
            </div>
            <div>
              <h4><Number3 n={220} /></h4>
              <p>seconds</p>
            </div>
          </div>
          <button id='ResShop'>SHOP NOW</button>
          <img src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair2-transparent.png'></img>
        </div>
      </div>

      <div className='Arrivals'>
        <div>
          <div className='Arrivals_info'>
            <h1>New Arrivals</h1>
            <p>
              One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections
            </p>
          </div>
          <div className='produtss'>
            <ul>
              <li className='oneLi'>All Products</li>
              <li>Chairs</li>
              <li>Books</li>
              <li>Clothes</li>
              <li>Accessories</li>
            </ul>
            <div>ALL PRODUCTS</div>
          </div>
        </div>
      </div>


      <div className='carts'>
        <Accordion id='accordion' allowZeroExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div data-aos="fade-right" className='FilterAccor'><button>Filter</button></div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel data-aos="zoom-in-down">
              <div className='carts_filter'>
                <input type="range" min={1} max={1000} onInput={change} />
                <h4>Price: {price}</h4>
                <hr id='xett' />
                <div>
                  <input type='text' onChange={(e) => filterName(e)} placeholder='Search Name'></input>
                  <span className='FilterSearch'><AiOutlineSearch /></span>
                </div>
                <div style={{display: "block"}}>
                    {
                      Homecart.map((item)=>
                      <label key={item.id}>
                        <input type='checkbox' checked={selected.includes(item.category)}
                          onChange={(e) => CategoryFilter(e, item.category)}
                        />{item.category}
                      </label>
                      )
                    }
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <div className='Productll'>
          {
            filterHomeCart().filter(filterr => { return filterr.price > parseInt(price, 0) }).map((product) => {
              return <ProducCart id={product.id} imgurl={product.img} name={product.name} price={product.price} category={product.category} color={product.color} />
            })
          }
        </div>
      </div>

      <div id='biggest'>
        <div>
          <div className='biggest_text'>
            <h1>Summer Sales</h1>
            <h2>Our biggest sales this year — up to 60% off!</h2>
            <button>START SHOPPING</button>
          </div>
          <img src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair-transparent.png'></img>
        </div>
      </div>


    </>
  )
}

export default Home