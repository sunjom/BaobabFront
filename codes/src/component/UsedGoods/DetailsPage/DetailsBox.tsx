import React from 'react'
import SildImg from './ImgSilder/SildImg'
import UserIntro from '../UserPart/UserIntro'

const DetailsBox:React.FC<{}> = ()=>{

    return(
        <div className='flex justify-center'>
            <div className='flex flex-col items-center w-[70%] h-[85rem] bg-white rounded-2xl mt-10'>
                <SildImg/>
                <UserIntro/>
            </div>
        </div>
    )
}

export default DetailsBox