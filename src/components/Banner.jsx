import React, { useEffect, useState } from 'react'
import './Banner.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import img1 from '../assests/banner.jpg'
import img2 from '../assests/banner-2.jpg'
import img3 from '../assests/banner-3.jpg'

const Banner = () => {

    const [selectedImg, setSelectedImg] = useState(0);
    const [allImg, setAllImg] = useState([img1, img2, img3]);

    useEffect(() => {
        setInterval(() => {
            // setSelectedImg(selectedImg => selectedImg < 2 ? selectedImg + 1 : 0)
            setSelectedImg((prev) => (prev + 1) % allImg.length)
        }, 3000)

    }, [allImg])

    return (

        <div className="containers">
            <div className="arrow1" onClick={() => {
                if (selectedImg > 0) {
                    setSelectedImg(selectedImg - 1)
                }
            }}>
                <ArrowBackIosIcon />
            </div>
            <div className="wrappers">

                <img src={allImg[selectedImg]} alt="" />
                {/* style={{ transform: `tranlate(${selectedImg * 100}vw)` }} */}
            </div>
            <div className="arrow2" onClick={() => {
                if (selectedImg < allImg.length - 1) {
                    setSelectedImg(selectedImg + 1)
                } else {
                    setSelectedImg(0)
                }
            }}>
                <ArrowForwardIosIcon />
            </div>
        </div>

        // <div className="containers">
        // <div className="arrow1" onClick={() => {
        //     if (selectedImg > 0) {
        //         setSelectedImg(selectedImg - 1)
        //     }
        // }}>
        //         <ArrowBackIosIcon />
        //     </div>
        //     {/* <button onClick={() => {
        //         if (selectedImg > 0) {
        //             setSelectedImg(selectedImg - 1)
        //         }
        //     }}>prev</button> */}

        //     <div className="wrappers">
        //         <div className="slide">
        //             <div className="img-container">
        //                 <img src={allImg[selectedImg]} alt="" />
        //             </div>
        //         </div>
        //     </div>

        //     <div className="arrow1" onClick={() => {
        //         if (selectedImg > 0) {
        //             setSelectedImg(selectedImg - 1)
        //         }
        //     }}>
        //         <ArrowForwardIosIcon />
        //     </div>


        // {/* <button onClick={() => {
        //     if (selectedImg < allImg.length - 1) {
        //         setSelectedImg(selectedImg + 1)
        //     } else {
        //         setSelectedImg(0)
        //     }
        // }}>next</button> */}

        // </div>






        // <div className="hero-banner">

        //     <div className="content">
        //         <div className="text-content">
        //             <h1>Be The Fastest In Delivery Your
        //                 <span>  Food</span>
        //             </h1>
        //             <p>
        //                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, dolor id. Pariatur blanditiis animi quae.
        //             </p>
        //             <div className="ctas">
        //                 <div className="banner-cta">SHOP NOW</div>
        //             </div>
        //         </div>
        //         <img className="banner-img" src={BannerImg} alt="" />
        //     </div>
        // </div>
    )
}

export default Banner
