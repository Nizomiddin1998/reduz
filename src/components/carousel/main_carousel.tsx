import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../answers/dots.css"

export function MainCarousel() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            <div className="main-content-info">
                <p> Startup Framework works on devices supporting Retina Display.
                    Feel the clarity in each pixel.</p>
            </div>
            <div className="main-content-info">
                <p> There are a lot of different components that will help you
                    create the perfect look and feel for your startup.</p>
            </div>
            <div className="main-content-info">
                <p> You can easily combine components in a variety ways for
                    different design projects. It’s easy!</p>
            </div>
        </Slider>
    )
}