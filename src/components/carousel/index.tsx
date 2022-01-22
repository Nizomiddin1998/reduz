import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../answers/dots.css"

export default function SlickCarousel() {
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
    <div className="question-info">
        <article>How the RedUz project works?</article>
        <p>The Generator App is an online tool that helps you to
            export ready-made templates ready to work as your future
            website. It helps you to combine slides, panels and other
            components and export it as a set of static files: HTML/CSS/JS.</p>
    </div>
    <div className="question-info">
        <article>How the RedUz project works?</article>
        <p>The Generator App is an online tool that helps you to
            export ready-made templates ready to work as your future
            website. It helps you to combine slides, panels and other
            components and export it as a set of static files: HTML/CSS/JS.</p>
    </div>
    <div className="question-info">
        <article>How the RedUz project works?</article>
        <p>The Generator App is an online tool that helps you to
            export ready-made templates ready to work as your future
            website. It helps you to combine slides, panels and other
            components and export it as a set of static files: HTML/CSS/JS.</p>
    </div>
    <div className="question-info">
        <article>How the RedUz project works?</article>
        <p>The Generator App is an online tool that helps you to
            export ready-made templates ready to work as your future
            website. It helps you to combine slides, panels and other
            components and export it as a set of static files: HTML/CSS/JS.</p>
    </div>
    <div className="question-info">
        <article>How the RedUz project works?</article>
        <p>The Generator App is an online tool that helps you to
            export ready-made templates ready to work as your future
            website. It helps you to combine slides, panels and other
            components and export it as a set of static files: HTML/CSS/JS.</p>
    </div>
    <div className="question-info">
        <article>How the RedUz project works?</article>
        <p>The Generator App is an online tool that helps you to
            export ready-made templates ready to work as your future
            website. It helps you to combine slides, panels and other
            components and export it as a set of static files: HTML/CSS/JS.</p>
    </div>
</Slider>
  )
}
