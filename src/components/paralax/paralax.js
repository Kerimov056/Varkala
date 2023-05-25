import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


const Paralax = () => {
    const img = 'https://demo.bootstrapious.com/varkala/1-2-1/img/photo/blog-2.jpg'
  return (
    <div>
        <Parallax pages={1}>
                <ParallaxLayer offset={0} speed={0.5} style={{ top: 'auto', left: 'auto' , backgroundImage: `url(${img})`, backgroundSize: 'cover'} }>
                  <div style={{textAlign: 'center'}}>
                    asd
                  </div>
                </ParallaxLayer>
            </Parallax>
    </div>
  )
}

export default Paralax