import React,{useState,useEffect} from 'react'
import './carousel.css'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"

function Carousel({imagesInfo, search, loading, autoSlide}) {

  const [cindex, setCindex] = useState(0)
  const [images, setImages] = useState([])
  const [timer, setTimer] = useState(4)
  
  useEffect(()=>{
    setImages(imagesInfo.hits)
  },[imagesInfo])

  const prevSlide = () => {
    if(cindex <= 0){
      return setCindex(images.length - 1)
    }
    setCindex((index)=> index - 1)
  }

  const nextSlide = () => {
    if(cindex === images.length -1 ){
      return setCindex(0)
    }
    setCindex((index)=> index + 1)
  }

  useEffect(()=>{
    setTimeout(()=>{
        if(timer < 5){
          setTimer((prev)=> prev + 1)
        }else{
          setTimer((prev)=> prev = 0)
            if(autoSlide){
              nextSlide()
            }
        }
      },1000)
    },[timer])
 
  if(!images){ return null}

  if(images.length === 0){
     return (
       <div className='carousel'>
         <h1>No Images Found...</h1>
       </div>
     )}

 if(loading){
   return(
     <div className='carousel'>
       <h1>Loading...</h1>
     </div>
   )
 }

  return (
    <>
      <h3 className='carousel-title' style={{textAlign: 'center', margin: '5px'}} >{images && `Beautiful ${images[cindex].tags}`}</h3>   
      <div className='carousel'>
    
        <div className="btn prev" onClick={prevSlide}><FaArrowAltCircleLeft/></div>
        
        <div className="carousel-items">
          {images.map((image,index)=>{
            
            let position = 'carousel-item carousel-next'

            if(cindex === index){
              position = 'carousel-item carousel-active'
            }

            if( index === cindex - 1 ){
              position = 'carousel-item carousel-prev'
            }

            return(
              <>
                <div className={ position }>
                  <img loading='eager' key={image.id} src={image.largeImageURL} alt={image.tags} />
                </div>
              </>
            )
          })}
        </div>

        <div className="btn next" onClick={nextSlide}><FaArrowAltCircleRight/></div>
      </div>

      <div className="btn-container-points">
          {images.map((image,index)=>{
            return(
              <div key={image.id} 
                  className={
                  index === cindex ? 'btn-circle  btn-circle-active' : 'btn-nav' } onClick={()=>{setCindex(index)}} ></div>
            )
          })}
        </div>    

    </>
  )
}

export default Carousel
