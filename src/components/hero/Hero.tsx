import React from 'react';
import bg from '../../assets/fresco-pizza-top.jpg'

const Hero: React.FC = () => {
  return (
    <div className='w-full h-[600px] ' style={{
        backgroundImage:`url(${bg})`
    }}>

    </div>
  )
}

export default Hero