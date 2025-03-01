import { useEffect, useRef, useState , useLayoutEffect } from "react";
import Modal from "./Modal";
import SlideBtn from "./SlideBtn";
import {motion} from "motion/react";
import Exit from "./Exit";
import _ from "lodash";
import { AnimatePresence } from "motion/react";

const SlideShow = ({fetchAnswer,itemDetails,setShow,setN,scrollLeft,setScrollLeft,currentIndex,isShow,width}) => {   
    const [x,setX] = useState(0);
    const containerRef = useRef(null);
    const [isClick , setIsClick] = useState(false);
    const [xValue, setXValue] = useState(40)
    const slide = fetchAnswer &&  fetchAnswer
    .slice(0,8).map((item, index) => ({ item, index }))
    .sort((a, b) => Math.abs(a.index - currentIndex) - Math.abs(b.index - currentIndex))
    .map(({ item, index }) => (
      <Modal
        key={item.id}
        id={item.id}
        src={item.urls.small}
        alt={item.alt_description}
        itemDetails={itemDetails}
        fetchAnswer={fetchAnswer}
        setN={setN}
        scrollLeft={scrollLeft}
        x={x}
       
      />
    ))

    const debounceHandleScroll = _.debounce((e) => {
        setScrollLeft(containerRef.current.scrollLeft)
        setIsClick(false)
    },100)

    useLayoutEffect(() => {
        const handleScroll = (e) => {
            !isClick &&  setX(0)
            debounceHandleScroll(e);
          };
          containerRef.current.addEventListener("scroll",handleScroll);
          return () => {
            containerRef.current.removeEventListener("scroll",handleScroll)
          }
    },[isClick])

    useEffect(() => {
        if (width <= 500) {
            setXValue(30)
        }
    },[width])

    useEffect(() => {
        if (scrollLeft > 2660 && x < -280) {
            setScrollLeft(0)
            setX(0)
        } else if (scrollLeft < -200 && x >  20) {
            setScrollLeft(0)
            setX(0)
        }
        containerRef.current.scrollTo({
            left:scrollLeft,
            behaviour:"smooth"
        })

        console.log(scrollLeft)
        console.log(x)

    },[scrollLeft])

    function handleScroll() {
        setX(prev => prev - xValue)
        setScrollLeft(prev => prev + 360)
        setIsClick(true)
    }

    function handleScrollRight() {
        setX(prev => prev + xValue)
        setScrollLeft(prev => prev - 380)
        setIsClick(true)
    }
    const variants = {
        visible: { scale:1,opacity: 1,transition: {
            when: "beforeChildren",
          }, },
        hidden: { scale:0,opacity: 0, transition: {
            when: "afterChildren",
          },},
      }

    
    return(
        <AnimatePresence>
        <motion.div
         variants={variants}
         initial="hidden"
         animate={isShow ? "visible" : "hidden"}
         exit="hidden"
         className={`fixed ${isShow ? "block" : "hidden"} z-50 w-full  h-auto min-h-[100vh] bg-[rgba(51,51,51,0.2)] top-0 flex`}>
            <Exit
             setShow={setShow}
            />
            <SlideBtn
             handleScroll={handleScroll}
             className="absolute lg:left-[200px] left-32 lg:top-[300px] top-[620px]"
             d="M15.287 18.693A.75.75 0 0 0 15.75 18V6a.75.75 0 0 0-1.28-.53l-6 6a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 .817.163"
            />
             <motion.div 
             ref={containerRef}
             transition={{ duration: 0.3, type:"tween", ease: "linear" }}
             style={{
                overflowX:'scroll',
                scrollSnapType:"x mandatory"
             }} className="lg:w-[30%] w-[90%] flex mx-auto h-full relative lg:top-[10px] top-[80px] slide-container gap-10">
                
              {slide} 
             </motion.div>
             <SlideBtn
             handleScroll={handleScrollRight}
             className="absolute right-32 lg:right-[200px] lg:top-[300px] top-[620px]"
             d="M8.713 18.693A.75.75 0 0 1 8.25 18V6a.75.75 0 0 1 1.28-.53l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-.817.163"
            />
                 
        </motion.div>
        </AnimatePresence>   
    )
}

export default SlideShow