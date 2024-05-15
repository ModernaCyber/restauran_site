import React from 'react';
import { useNavigate } from 'react-router-dom';
import fresco from '../../assets/fresco-free-logo.svg'
const Logo: React.FC = () => {
    const navigate = useNavigate();
    
    const handleHome = () => {
        navigate('/');
    };
  
    return (
        <div className='text-[black] dark:text-neutral-200 flex cursor-pointer text-2xl font-bold h-full items-center' onClick={handleHome}>
           <img src={fresco} alt='logo' className='h-16 dark:bg-white/50 dark:px-6 rounded-full'/>
        </div>
    );
};

export default Logo;
