import React from 'react'
import './about.scss'
import { homeList } from '../Helpers/List'
import Aboutapi from './aboutapi'
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import AliceCarousel from 'react-alice-carousel';


const handleDragStart = (e) => e.preventDefault();

const items = [
  <img style={{width: "95%", height: "230px", objectFit: "contain"}} src="https://scontent.fgyd9-1.fna.fbcdn.net/v/t39.30808-6/347230310_930038604778680_3875398452423418734_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=pJpy8Ubc7X8AX-Aik_9&_nc_ht=scontent.fgyd9-1.fna&oh=00_AfBbjsoIGy6-T4GAvBAQxznxJvQeZ0gJL7WGd4XHq4HeHw&oe=6475F1AD" onDragStart={handleDragStart} role="presentation" />,
  <img style={{width: "95%", height: "230px", objectFit: "contain"}} src="https://scontent.fgyd9-1.fna.fbcdn.net/v/t39.30808-6/347230310_930038604778680_3875398452423418734_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=pJpy8Ubc7X8AX-Aik_9&_nc_ht=scontent.fgyd9-1.fna&oh=00_AfBbjsoIGy6-T4GAvBAQxznxJvQeZ0gJL7WGd4XHq4HeHw&oe=6475F1AD" onDragStart={handleDragStart} role="presentation" />,
  <img style={{width: "95%", height: "230px", objectFit: "contain"}} src="https://scontent.fgyd9-1.fna.fbcdn.net/v/t39.30808-6/347230310_930038604778680_3875398452423418734_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=pJpy8Ubc7X8AX-Aik_9&_nc_ht=scontent.fgyd9-1.fna&oh=00_AfBbjsoIGy6-T4GAvBAQxznxJvQeZ0gJL7WGd4XHq4HeHw&oe=6475F1AD" onDragStart={handleDragStart} role="presentation" />,
];

const Abouts = () => {


  return (
    <>
      <div className='about'>
        <div className='about_in'>

          <div className='aboutUS'>
            <div className='line'>
              <p></p>
            </div>
            <div className='varkala'>
              <h2>ABOUT US</h2>
              <h1>We are Varkala</h1>
              <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</p>
            </div>
          </div>

          <div className='THEOLDTIMES'>
            <div className='line'>
              <p></p>
            </div>
            <div className='varkala'>
              <h2>THE OLD TIMES</h2>
              <h1>History of Varkala</h1>
            </div>
          </div>

          <div className='started'>
            <div className='started_img'>
              <img src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/photo/raoul-ortega-2JtF6pYAOOI-unsplash.jpg'></img>
            </div>
            <div className='started_text'>
              <h2>HUMBLE BEGINNINGS</h2>
              <h1>We started as little</h1>
              <p>The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream.</p>
            </div>
          </div>

          <div className='grew'>
            <div className='grew_text'>
              <h2>VARKALA TODAY</h2>
              <h1>And then we grew a bit</h1>
              <p>The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream.</p>
            </div>
            <div className='grew_img'>
              <img src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/photo/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg'></img>
            </div>
          </div>

        </div>
      </div>


      <div className='Milestones'>
        <div className='Milestones_in'>
          <div className='Milestones_left'>
            <div>
              <h1>Varkala's Milestones</h1>
              <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</p>
            </div>
          </div>
          <div className='Milestones_right'>
            <div>
              <h2>1995</h2>
              <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin</p>
            </div>
            <div>
              <h2>2000</h2>
              <p>The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared</p>
            </div>
            <div>
              <h2>2010</h2>
              <p>His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection</p>
            </div>
            <div>
              <h2>2018</h2>
              <p>Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magaz</p>
            </div>
          </div>
        </div>
      </div>

      <div className='people'>
        <div className='people_in'>
          <div className='samsa'>
            <div className='samsa_up'>
              <div>
                <img src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/avatar/avatar-0.jpg'></img>
              </div>
            </div>
            <div className='samsa_low'>
              <div>
                <h5>Samsa was a travelling salesman - and</h5><h5> above it there hung a picture that he had</h5><h5> recently cut out of an illustrated magazine</h5><h5>and housed in a nice, gilded frame.</h5>
                <h2>— FRANKIE KAFKA, FOUNDER</h2>
                <p>Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
              </div>
            </div>
          </div>

          <div className='team'>
            <div className='line'>
              <p></p>
            </div>
            <div className='ourteam'>
              <div className='ourteam_info'>
                <h2>OUR TEAM</h2>
                <h1>People</h1>
                <p>He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before.</p>
              </div>
              <div className='jobs'>
                <div className='jobs_in'>
                  {
                    homeList.map((item) => {
                      return <Aboutapi imgurl={item.img} name={item.name} job={item.job} />
                    })
                  }
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/*  <div className='sponsor'>
        <div className='sponsor_in'>
          <AliceCarousel mouseTracking items={items} />
        </div>
      </div>
 */}

      
    </>
  )
}

export default Abouts