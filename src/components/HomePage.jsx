import Header from "./Header"
import GridTable from "./GridTable"
import { useEffect, useState } from "react"
import SlideShow from "./SlideShow"
const HomePage = ({fetchAnswer,setSearchParam}) => {
    const [itemDetails, setItemDetails] = useState("");
    const [scrollLeft, setScrollLeft] = useState(0);
    const [n, setN] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isShow, setShow] = useState(false);
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        if (isShow) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    },[isShow])
    return(
        <div className={`relative h-auto min-h-[100vh]`}>
            <Header
             setSearchParam={setSearchParam}
             fetchAnswer={fetchAnswer}
            />
            <SlideShow
             fetchAnswer={fetchAnswer}
             itemDetails={itemDetails}
             n={n}
             setN={setN}
             scrollLeft={scrollLeft}
             setScrollLeft={setScrollLeft}
             currentIndex={currentIndex}
             isShow={isShow}
             width={width}
             setShow={setShow}
            />
            <GridTable
             fetchAnswer={fetchAnswer}
             setItemDetails={setItemDetails}
             setScrollLeft={setScrollLeft}
             setCurrentIndex={setCurrentIndex}
             currentIndex={currentIndex}
             setShow={setShow}
             isShow={isShow}
             width={width}
             setWidth={setWidth}
            />
        </div>
    )
}

export default HomePage