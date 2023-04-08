import React, { useEffect, useState, useRef, useCallback } from "react";
import Nav from "../Shared/Nav/Nav";
import './gallery.css'
import Footer from "../Shared/Footer/Footer";


function Gallery(){
    const [photos,setPhoto]= useState([]);
    const [error,setError] = useState((null));
    const [page,setPage] = useState(1);

    const observer = useRef();
    const lastPhotoRef = useCallback(
      (lastPhoto) => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver ((entries) => {
          if (entries[0].isIntersecting) setPage((prevPage) => prevPage + 1);
        });
        if (lastPhoto) observer.current.observe(lastPhoto); 
      },[]
    )

    async function fetchPhoto(){
      try {
          const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=acbd46df0a302f9681841a05bf2e89a9&tags=bikerace%2C+BoulderBikeTour&format=json&nojsoncallback=1&page=${page}&per_page=40`)

          if (!response.ok){
              throw new Error(
                  `This is an HTTP Error: The status is ${response.status}`
              );
          }
          let currentData = await response.json();

          if (currentData.photos && currentData.photos.photo) {
            setPhoto((prevPhotos) => [...prevPhotos,...currentData.photos.photo]);
            setError(null);
          }
          else {
            console.warn('Invalid data received from API:', currentData);
          }
      } catch (error) {
          setError(error)      
      }
  }
    

    useEffect(()=>{
        fetchPhoto();
       
    },[page])

    if (error){
        return(
            <div>Error: {error.message}</div>
        )
    }


    return(
        <>
        <Nav/>
        <div className="gallery__container">
          <h1 className="gallery__title"> Gallery </h1>
          <div className="gallery__grid">

            {
                photos.map((p, index)=>{
                  if (photos.length - 1 === index) {
                    return (
                    <div key={p.id} className="gallery__card">
                      <img 
                      ref={lastPhotoRef}
                      src={`https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`} 
                      alt={p.title} 
                      className="gallery__img" 
                      onLoad={(e) => e.target.classList.add('loaded')}
                      />
                    </div> 
                );
              } else {
                  return(
                    <div key={p.id} className="gallery__card">
                    <img 
                    src={`https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`} 
                    alt={p.title} 
                    className="gallery__img" 
                    onLoad={(e) => e.target.classList.add('loaded')}
                    />
                  </div> 
                  );
                }
                       
                  })}
        </div> 
        </div>
        <Footer/>    
        </>
        
    )
}
export default Gallery