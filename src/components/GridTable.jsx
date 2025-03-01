import GridItem from "./GridItem"

const GridTable = ({fetchAnswer,setItemDetails,setScrollLeft,setCurrentIndex,setShow,isShow,width,setWidth}) => {
    const handleImageClick = (index) => {
        setCurrentIndex(index);
        //const newScrollLeft = index * 500; 
        setScrollLeft(0);
        setShow(true)
      };
    
  const items = fetchAnswer && fetchAnswer.slice(0,8).map((answer,index) => {
    const heights = ["h-[390px]", "h-[500px]" , "h-[430px]","h-[430px]","h-[550px]","h-[450px]","h-[430px]"]
    const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500", "bg-orange-500"];
    let height = heights[index];
    let style = {}

    const topOffsets = {
        3: -30,
        5: -10,
        6: -32,
        8: -17
      };
      
      if (index in topOffsets) {
        style = {
          position: 'relative',
          top: `${topOffsets[index] * index}px`
        };
      }
        return(
            <GridItem
             key={answer.id}
             id={answer.id}
             src={answer.urls.small}
             alt={answer.alt_description}
             username={answer.user.name}
             location={answer.user.location}
             height={height} 
             setItemDetails={setItemDetails}
             className={colors[index % colors.length]}
             style={style}
             onClick={() => handleImageClick(index)}
             width={width}
             setWidth={setWidth}
            />
        )
    })
    return(
        <div className={` grid grid-auto-flow-column grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 relative top-[-25px] left-10 lg:left-32 w-[80%] `}> 
            {items}
        </div>
    )
}

export default GridTable