import React from 'react'
import Header from '../HeaderList/Header';
import IntroImg from './IntroImg';
import BoxList from './BoxList';
import Footer from '../FooterInfo/Footer';

const Final:React.FC<{}> = () =>{
    return(
        <div className='w-full'>
            <Header/>
            <IntroImg/>
            <BoxList/>
            <Footer/>
        </div>
    )
}

export default Final;