import { motion } from "motion/react"
const SlideBtn = ({handleScroll,className,d}) => {
    const buttonVariant = {
        visible: { scale:1,opacity: 1 },
        hidden: { scale:0,opacity: 0 },
      }
    return(
        <motion.button
         variants={buttonVariant}
         initial="hidden"
         whileInView="visible"
         onClick={handleScroll} className={`${className} lg:h-10 h-12 grid place-items-center w-12 lg:w-10 rounded-full bg-gray-300 `}>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#2e2a2a" d={d}></path></svg>
        </motion.button>
    )
}

export default SlideBtn