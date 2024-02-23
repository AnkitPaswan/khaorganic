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
                {/* style={{ transform: `translateX(-${selectedImg * 100}vw)` }} */}
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
    )
}

export default Banner
