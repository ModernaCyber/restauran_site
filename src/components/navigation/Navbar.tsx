import React from 'react';
import Logo from './Logo';
import Wrapper from '../content_wrapper/Wrapper';
import { useNavigate } from 'react-router-dom';
import ToggleMode from '../theme/Toggle';

interface MenuItemProps {
    menu: string
}
const MenuItem: React.FC <MenuItemProps> =({menu})=>{
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/${menu}`)
    }
    return(
        <li className='hover:text-[orange] dark:text-white/75 cursor-pointer' onClick={handleNavigate}>{menu}</li>
    )
}
const Navbar: React.FC = () => {
    const menuItems: string[] = [
        "Home",
        "Menu",
        "About Us",
        "Contact",
    ]
  return (
    <div className=''>
      <Wrapper>
        <div className='h-16 flex items-center justify-between w-full'>
          <div className=''><Logo/></div>
          <div className='flex w-full justify-center items-center'>
            <ul className='flex gap-x-2 w-3/4 justify-end '>
                {menuItems.map((item,i)=>(
                    <MenuItem key={i} menu={item}/>
                ))}
            </ul>
            <button className='px-2 sm:px-4 md:px-6 lg:px-8 py-2 bg-[orange] text-white rounded-full ml-8'>Reservation</button>
          </div>
          <div className=''>
                <ToggleMode/>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
