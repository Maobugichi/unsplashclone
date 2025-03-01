import { useEffect , useRef, useLayoutEffect } from "react"
import { motion , AnimatePresence } from "motion/react"
import Skeleton from "react-loading-skeleton"
const Modal = ({src,alt,id,itemDetails,fetchAnswer,setN,x,onClick}) => {
    const slideRef = useRef(null)
    useEffect(() => {
        const index = fetchAnswer.findIndex(item => item.id == itemDetails)
        const slides = Array.from(document.querySelectorAll(".slide"));
        console.log(itemDetails)
        if (slides[index]) {
            slides[index].classList.remove("hidden")
            slides[0].src = fetchAnswer[index].urls.raw
            setN(index)
        } 
    },[itemDetails])
    const modalVariant = {
        visible: { scale:1,opacity: 1 },
        hidden: { scale:0,opacity: 0 },
      }
    return(
            <motion.img 
             onClick={onClick}
             ref={slideRef}
             variants={modalVariant}
             delay={0.1}
             className="slide w-[90%] mx-auto h-full  rounded-2xl "
             animate={{x}}
             src={src} alt={alt} 
             />
    )
}

export default Modal