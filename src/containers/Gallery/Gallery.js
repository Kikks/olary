import React, {Component} from 'react'
import Top from '../../hoc/Top'
import Backdrop from '../../components/UI/Backdrop'
import GalleryShow from '../../components/GalleryShow/GalleryShow'
import ImageSlider from '../../components/GalleryShow/ImageSlider/ImageSlider'
import Header from '../../components/Header'
import Svg from '../../components/UI/Svg'

import header from '../../assets/img/galleryHeader.jpg'
import Image1 from '../../assets/img/image1.jpg'
import Image2 from '../../assets/img/image2.jpg'
import Image3 from '../../assets/img/image3.jpg'
import Image4 from '../../assets/img/image4.jpg'
import Image5 from '../../assets/img/image5.jpg'
import Image6 from '../../assets/img/image6.jpg'
import Image7 from '../../assets/img/image7.jpg'
import Image8 from '../../assets/img/image8.jpg'
import Image9 from '../../assets/img/image9.jpg'
import Image10 from '../../assets/img/image10.jpg'
import Image11 from '../../assets/img/image11.jpg'
import Image12 from '../../assets/img/image12.jpg'
import Image13 from '../../assets/img/image13.jpg'
import Image14 from '../../assets/img/image14.jpg'
import Image15 from '../../assets/img/image15.jpg'
import Image16 from '../../assets/img/image16.jpg'
import Image17 from '../../assets/img/image17.jpg'
import Image18 from '../../assets/img/image18.jpg'
import Image19 from '../../assets/img/image19.jpg'
import Image20 from '../../assets/img/image20.jpg'
import Image21 from '../../assets/img/image21.jpg'
import Image22 from '../../assets/img/image22.jpg'
import Image23 from '../../assets/img/image23.jpg'
import Image24 from '../../assets/img/image24.jpg'
import Image25 from '../../assets/img/image25.jpg'
import Image26 from '../../assets/img/image26.jpg'
import Image27 from '../../assets/img/image27.jpg'
import Image28 from '../../assets/img/image28.jpg'
import Image29 from '../../assets/img/image29.jpg'
import Image30 from '../../assets/img/image30.jpg'
import Image31 from '../../assets/img/image31.jpg'
import Image32 from '../../assets/img/image32.jpg'
import Image33 from '../../assets/img/image33.jpg'
import Image34 from '../../assets/img/image34.jpg'
import Image35 from '../../assets/img/image35.jpg'
import Image36 from '../../assets/img/image36.jpg'
import Image37 from '../../assets/img/image37.jpg'
import Image38 from '../../assets/img/image38.jpg'
import Image39 from '../../assets/img/image39.jpg'
import Image40 from '../../assets/img/image40.jpg'
import Image41 from '../../assets/img/image41.jpg'
import Image42 from '../../assets/img/image42.jpg'
import Image43 from '../../assets/img/image43.jpg'
import Image44 from '../../assets/img/image44.jpg'
import Image45 from '../../assets/img/image45.jpg'
import Image46 from '../../assets/img/image46.jpg'
import Image47 from '../../assets/img/image47.jpg'
import Image48 from '../../assets/img/image48.jpg'
import Image49 from '../../assets/img/image49.jpg'
import Image50 from '../../assets/img/image50.jpg'
import Image51 from '../../assets/img/image51.jpg'
import Image52 from '../../assets/img/image52.jpg'
import Image53 from '../../assets/img/image53.jpg'
import Image54 from '../../assets/img/image54.jpg'
import Image55 from '../../assets/img/image55.jpg'
import Image56 from '../../assets/img/image56.jpg'
import Image57 from '../../assets/img/image57.jpg'
import Image58 from '../../assets/img/image58.jpg'
import Image59 from '../../assets/img/image59.jpg'
import Image60 from '../../assets/img/image60.jpg'
import Image61 from '../../assets/img/image61.jpg'
import Image62 from '../../assets/img/image62.jpg'
import Image63 from '../../assets/img/image63.jpg'
import Image64 from '../../assets/img/image64.jpg'
import Image65 from '../../assets/img/image65.jpg'
import Image66 from '../../assets/img/image66.jpg'
import Image67 from '../../assets/img/image67.jpg'
import Image68 from '../../assets/img/image68.jpg'
import Image69 from '../../assets/img/image69.jpg'
import Image70 from '../../assets/img/image70.gif'
import Image71 from '../../assets/img/image71.jpg'
import Image72 from '../../assets/img/image72.jpg'
import Image73 from '../../assets/img/image73.jpg'
import Image74 from '../../assets/img/image74.jpg'
import Image75 from '../../assets/img/image75.jpg'
import Image76 from '../../assets/img/image76.jpg'
import Image77 from '../../assets/img/image77.jpg'
import Image78 from '../../assets/img/image78.jpg'
import Image79 from '../../assets/img/image79.jpg'
import Image80 from '../../assets/img/image80.jpg'
import Image81 from '../../assets/img/image81.jpg'
import Image82 from '../../assets/img/image82.jpg'

const sliderImages = [Image1, Image2, Image3, Image4, Image5,
    Image6, Image7, Image8, Image9, Image10,
    Image11, Image12,Image13,Image14,Image15,Image16,Image17,Image18,Image19,Image20,Image21,Image22,Image23,Image24,Image25,Image26,Image27,Image28,Image29,Image30,Image31,Image32,Image33,Image34,Image35,Image36,Image37,Image38,Image39,Image40,Image41,Image42,Image43,Image44,Image45,Image46,Image47,Image48,Image49,Image50,Image51,Image52,Image53,Image54,Image55,Image56,Image57,Image58,Image59,Image60,Image61,Image62,Image63,Image64,Image65,Image66,Image67,Image68,Image69,Image70,Image71,Image72,Image73,Image74,Image75,Image76,Image77,Image78,Image79,Image80,Image81,Image82]

class Gallery extends Component{
    state = {
        images: {
            image1: {
                style: {backgroundImage: 'url(' + Image1 + ')'},
                class: "image--tall image--wide",
                index: 0
            },
            image2: {
                style: {backgroundImage: 'url(' + Image2 + ')'},
                class: "image--tall",
                index: 1
            },
            image3: {
                style: {backgroundImage: 'url(' + Image3 + ')'},
                class: "",
                index: 2
            },
            image4: {
                style: {backgroundImage: 'url(' + Image4 + ')'},
                class: "",
                index: 3
            },
            image5: {
                style: {backgroundImage: 'url(' + Image5 + ')'},
                class: "",
                index: 4
            },
            image6: {
                style: {backgroundImage: 'url(' + Image6 + ')'},
                class: "image--tall",
                index: 5
            },
            image7: {
                style: {backgroundImage: 'url(' + Image7 + ')'},
                class: "image--tall image--wide",
                index: 6
            },
            image8: {
                style: {backgroundImage: 'url(' + Image8 + ')'},
                class: "",
                index: 7
            },
            image9: {
                style: {backgroundImage: 'url(' + Image9 + ')'},
                class: "",
                index: 8
            },
            image10: {
                style: {backgroundImage: 'url(' + Image10 + ')'},
                class: "image--wide image--tall",
                index: 9
            },
            image11: {
                style: {backgroundImage: 'url(' + Image11 + ')'},
                class: "image--tall",
                index: 10
            },
            image12: {
                style: {backgroundImage: 'url(' + Image12 + ')'},
                class: "",
                index: 11
            },
            image13: {
                style: {backgroundImage: 'url(' + Image13 + ')'},
                class: "image--tall image--wide",
                index: 12
            },
            image14: {
                style: {backgroundImage: 'url(' + Image14 + ')'},
                class: "image--tall",
                index: 13
            },
            image15: {
                style: {backgroundImage: 'url(' + Image15 + ')'},
                class: "",
                index: 14
            },
            image16: {
                style: {backgroundImage: 'url(' + Image16 + ')'},
                class: "",
                index: 15
            },
            image17: {
                style: {backgroundImage: 'url(' + Image17 + ')'},
                class: "",
                index: 16
            },
            image18: {
                style: {backgroundImage: 'url(' + Image18 + ')'},
                class: "image--tall",
                index: 17
            },
            image19: {
                style: {backgroundImage: 'url(' + Image19 + ')'},
                class: "image--tall image--wide",
                index: 18
            },
            image20: {
                style: {backgroundImage: 'url(' + Image20 + ')'},
                class: "",
                index: 19
            },
            image21: {
                style: {backgroundImage: 'url(' + Image21 + ')'},
                class: "",
                index: 20
            },
            image22: {
                style: {backgroundImage: 'url(' + Image22 + ')'},
                class: "image--tall image--wide",
                index: 21
            },
            image23: {
                style: {backgroundImage: 'url(' + Image23 + ')'},
                class: "image--tall",
                index: 22
            },
            image24: {
                style: {backgroundImage: 'url(' + Image24 + ')'},
                class: "",
                index: 23
            },
            image25: {
                style: {backgroundImage: 'url(' + Image25 + ')'},
                class: "image--tall image--wide",
                index: 24
            },
            image26: {
                style: {backgroundImage: 'url(' + Image26 + ')'},
                class: "image--tall",
                index: 25
            },
            image27: {
                style: {backgroundImage: 'url(' + Image27 + ')'},
                class: "",
                index: 26
            },
            image28: {
                style: {backgroundImage: 'url(' + Image28 + ')'},
                class: "",
                index: 27
            },
            image29: {
                style: {backgroundImage: 'url(' + Image29 + ')'},
                class: "",
                index: 28
            },
            image30: {
                style: {backgroundImage: 'url(' + Image30 + ')'},
                class: "image--tall",
                index: 29
            },
            image31: {
                style: {backgroundImage: 'url(' + Image31 + ')'},
                class: "image--tall image--wide",
                index: 30
            },
            image32: {
                style: {backgroundImage: 'url(' + Image32 + ')'},
                class: "",
                index: 31
            },
            image33: {
                style: {backgroundImage: 'url(' + Image33 + ')'},
                class: "",
                index: 32
            },
            image34: {
                style: {backgroundImage: 'url(' + Image34 + ')'},
                class: "image--wide image--tall",
                index: 33
            },
            image35: {
                style: {backgroundImage: 'url(' + Image35 + ')'},
                class: "image--tall",
                index: 34
            },
            image36: {
                style: {backgroundImage: 'url(' + Image36 + ')'},
                class: "",
                index: 35
            },
            image37: {
                style: {backgroundImage: 'url(' + Image37 + ')'},
                class: "image--tall image--wide",
                index: 36
            },
            image38: {
                style: {backgroundImage: 'url(' + Image38 + ')'},
                class: "image--tall",
                index: 37
            },
            image39: {
                style: {backgroundImage: 'url(' + Image39 + ')'},
                class: "",
                index: 38
            },
            image40: {
                style: {backgroundImage: 'url(' + Image40 + ')'},
                class: "",
                index: 39
            },
            image41: {
                style: {backgroundImage: 'url(' + Image41 + ')'},
                class: "",
                index: 40
            },
            image42: {
                style: {backgroundImage: 'url(' + Image42 + ')'},
                class: "image--tall",
                index: 41
            },
            image43: {
                style: {backgroundImage: 'url(' + Image43 + ')'},
                class: "image--tall  image--wide",
                index: 42
            },
            image44: {
                style: {backgroundImage: 'url(' + Image44 + ')'},
                class: "",
                index: 43
            },
            image45: {
                style: {backgroundImage: 'url(' + Image45 + ')'},
                class: "",
                index: 44
            },
            image46: {
                style: {backgroundImage: 'url(' + Image46 + ')'},
                class: "image--wide image--tall",
                index: 45
            },
            image47: {
                style: {backgroundImage: 'url(' + Image47 + ')'},
                class: "image--tall",
                index: 46
            },
            image48: {
                style: {backgroundImage: 'url(' + Image48 + ')'},
                class: "",
                index: 47
            },
            image49: {
                style: {backgroundImage: 'url(' + Image49 + ')'},
                class: "image--tall image--wide",
                index: 48
            },
            image50: {
                style: {backgroundImage: 'url(' + Image50 + ')'},
                class: "image--tall",
                index: 49
            },
            image51: {
                style: {backgroundImage: 'url(' + Image51 + ')'},
                class: "",
                index: 50
            },
            image52: {
                style: {backgroundImage: 'url(' + Image52 + ')'},
                class: "",
                index: 51
            },
            image53: {
                style: {backgroundImage: 'url(' + Image53 + ')'},
                class: "",
                index: 52
            },
            image54: {
                style: {backgroundImage: 'url(' + Image54 + ')'},
                class: "image--tall",
                index: 53
            },
            image55: {
                style: {backgroundImage: 'url(' + Image55 + ')'},
                class: "image--tall image--wide",
                index: 54
            },
            image56: {
                style: {backgroundImage: 'url(' + Image56 + ')'},
                class: "",
                index: 55
            },
            image57: {
                style: {backgroundImage: 'url(' + Image57 + ')'},
                class: "",
                index: 56
            },
            image58: {
                style: {backgroundImage: 'url(' + Image58 + ')'},
                class: "image--wide image--tall",
                index: 57
            },
            image59: {
                style: {backgroundImage: 'url(' + Image59 + ')'},
                class: "image--tall",
                index: 58
            },
            image60: {
                style: {backgroundImage: 'url(' + Image60 + ')'},
                class: "",
                index: 59
            },
            image61: {
                style: {backgroundImage: 'url(' + Image61 + ')'},
                class: "image--tall image--wide",
                index: 60
            },
            image62: {
                style: {backgroundImage: 'url(' + Image62 + ')'},
                class: "image--tall",
                index: 61
            },
            image63: {
                style: {backgroundImage: 'url(' + Image63 + ')'},
                class: "",
                index: 62
            },
            image64: {
                style: {backgroundImage: 'url(' + Image64 + ')'},
                class: "",
                index: 63
            },
            image65: {
                style: {backgroundImage: 'url(' + Image65 + ')'},
                class: "",
                index: 64
            },
            image66: {
                style: {backgroundImage: 'url(' + Image66 + ')'},
                class: "image--tall",
                index: 65
            },
            image67: {
                style: {backgroundImage: 'url(' + Image67 + ')'},
                class: "image--tall image--wide",
                index: 66
            },
            image68: {
                style: {backgroundImage: 'url(' + Image68 + ')'},
                class: "",
                index: 67
            },
            image69: {
                style: {backgroundImage: 'url(' + Image69 + ')'},
                class: "",
                index: 68
            },
            image70: {
                style: {backgroundImage: 'url(' + Image70 + ')'},
                class: "image--wide image--tall",
                index: 69
            },
            image71: {
                style: {backgroundImage: 'url(' + Image71 + ')'},
                class: "image--tall",
                index: 70
            },
            image72: {
                style: {backgroundImage: 'url(' + Image72 + ')'},
                class: "",
                index: 71
            },
            image73: {
                style: {backgroundImage: 'url(' + Image73 + ')'},
                class: "image--tall image--wide",
                index: 72
            },
            image74: {
                style: {backgroundImage: 'url(' + Image74 + ')'},
                class: "image--tall",
                index: 73
            },
            image75: {
                style: {backgroundImage: 'url(' + Image75 + ')'},
                class: "",
                index: 74
            },
            image76: {
                style: {backgroundImage: 'url(' + Image76 + ')'},
                class: "",
                index: 75
            },
            image77: {
                style: {backgroundImage: 'url(' + Image77 + ')'},
                class: "",
                index: 76
            },
            image78: {
                style: {backgroundImage: 'url(' + Image78 + ')'},
                class: "image--tall",
                index: 77
            },
            image79: {
                style: {backgroundImage: 'url(' + Image79 + ')'},
                class: "image--tall image--wide",
                index: 78
            },
            image80: {
                style: {backgroundImage: 'url(' + Image80 + ')'},
                class: "",
                index: 79
            },
            image81: {
                style: {backgroundImage: 'url(' + Image81 + ')'},
                class: "",
                index: 80
            },
            image82: {
                style: {backgroundImage: 'url(' + Image82 + ')'},
                class: "image--wide image--tall",
                index: 81
            }
        },
        backdropShown: false,
        index: 0,
        urlIndex: 0
    }

    onBackdropClickedHandler = () => {
        const newState = {...this.state}
        newState.backdropShown = false
        this.setState({backdropShown: newState.backdropShown})
        
    }

    imageClickedHandler = () => {
        const newState = {...this.state}
        newState.backdropShown = true
        this.setState({
            backdropShown: newState.backdropShown
        })        
    }

    indexChangedHandler = (index) => {
        const newState = {...this.state}
        newState.urlIndex = index
        this.setState({
            index: newState.urlIndex
        })
        
    }

    nextImageHandler = () => {
        const newState = {...this.state}
        let n = newState.index
        n++
        if(n > (sliderImages.length - 1)){
            n = 0
        }     
        this.setState({index: n})   
        window.location.href = window.location.href.split('/')[0] + "/" + window.location.href.split('/')[1] + "/" + window.location.href.split('/')[2] + "/gallery#" + n
    }

    previousImageHandler = () => {
        const newState = {...this.state}
        let n = newState.index
        n--
        if(n < 0){
            n = (sliderImages.length - 1)
        }
        this.setState({index: n})
        window.location.href = window.location.href.split('/')[0] + "/" + window.location.href.split('/')[1] + "/" + window.location.href.split('/')[2] + "/gallery#" + n
    }

    render() {
        const galleryImagesArray = []

        for(let content in this.state.images){
            galleryImagesArray.push({
                id: content,
                 config: this.state.images[content]
            })
        }

        return(
            <Top>
                <Backdrop show = {this.state.backdropShown} clicked = {this.onBackdropClickedHandler}/>
                {this.state.backdropShown ? <ImageSlider clicked = {this.onBackdropClickedHandler} sliderImage = {sliderImages[this.state.index]} sliderImages = {sliderImages} rightClick = {this.nextImageHandler} leftClick = {this.previousImageHandler} index = {this.state.index}/> : "" }
                <main className = "main">
                    <Header image={header}>
                        <div className="header__container">
                            <h1 className="header__heading" data-aos="fade-left" data-aos-delay="2000">Gallery</h1>
                        </div>
                        <a href="#pictures" className="header__svg-box">
                            <Svg class="header__svg" src="chevron-down" />
                        </a> 
                    </Header>
                    <GalleryShow array = {galleryImagesArray} imageClicked = {this.imageClickedHandler} index = {this.indexChangedHandler}/>
                </main> 
            </Top>
        )
        
    }
}

export default Gallery