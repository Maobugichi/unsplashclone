import Overlay from "./Overlay";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from "react";

const GridItem = ({id,src,alt,username,location,height,onClick,style,width,setWidth}) => {
   const [isStyle,setIsStyle] = useState(style)
   useEffect(() => {
     const handleResize = () => {
       setWidth(window.innerWidth)
     }
     window.addEventListener('resize', handleResize)
     return () => {
       window.removeEventListener('resize', handleResize)
     }
   }, [])
 
   useEffect(() => {
     if (width >= 1024) {
        setIsStyle(style)
     } else {
        setIsStyle({})
     }
   },[width,style])
    return(
        <div onClick={onClick}  id={id}  style={isStyle}  className={` ${height} relative rounded-xl `}>
           <Overlay/>
            {<img className={`rounded-2xl h-full w-full`} src={src} alt={alt} /> || <Skeleton/>}
            <div className="absolute left-7 bottom-6 text-white z-40 font-bold">
                <p>{username || <Skeleton/>}</p>
                <p>{location || <Skeleton/>}</p>
            </div>
        </div>
    )
}

export default GridItem