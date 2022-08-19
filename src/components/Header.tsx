import { FC } from 'react';

import headerUrl from '@/assets/header.png';
import {Link} from "react-router-dom";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

type Props = {};

const Header: FC<Props & JSX.IntrinsicElements['div']> = ({ children }) => {
    return (
        <div className={'mb-5'}>
            <h1 className={'text-xl uppercase bold text-green-500 text-center mb-5'}>Welcome to ReactPokedex</h1>
            <BottomNavigation>
                <Link to={'/'}>
                    <BottomNavigationAction label="Home"icon={<HomeIcon />} />
                </Link>

            </BottomNavigation>
            <div className={'h-[300px]'} style={{ background: `url(${headerUrl}) top no-repeat`, backgroundSize: 'cover'}}></div>
        </div>
    )
}

export default Header;