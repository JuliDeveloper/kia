import React from 'react';
import css from './Logo.module.css';
import { ReactComponent as SvgIconLogo } from '../../images/logo_kia.svg';


const Logo = () => {
    return <SvgIconLogo className={css.image} width='100px' height='50px' />
}

export default Logo;