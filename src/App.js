import React,{useState, useEffect} from 'react'
import Carousel from './components/Carousel'
import { getPixaImages } from './helper/getPixaImages'
import Nav from './components/Nav'
import './App.css'

function App() {

const [imagesInfo, setImagesInfo] = useState([])

const [search, setSearch] = useState('flower')
const [loading, setLoading] = useState(true)
const [autoSlide, setAutoSlide] = useState(false)

const resultImages = async () => {
  setLoading(true)
  const result =  await getPixaImages(search)
  setImagesInfo(result)
  setLoading(false)
}

useEffect(()=>{
  resultImages()
},[])

  return (
    <>
      <Nav resultImages = {resultImages} setSearch={setSearch} setAutoSlide={setAutoSlide} autoSlide={autoSlide}/>
      <section className='carousel-wrapper'>
        <Carousel 
          imagesInfo={imagesInfo} 
          loading={loading} 
          search={search} 
          autoSlide={autoSlide}
        />
      </section>
      <footer>
        <p>Norvillie Villaruel</p>
        <p>React Custom Carousel Powered by pixabay</p>
        <p>norvillie.villaruel@gmail.com</p>
        <p>Full Stack Web Developer 2021</p>
      </footer>
    </>
  )
}

export default App
