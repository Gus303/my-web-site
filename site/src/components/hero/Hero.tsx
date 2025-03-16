import "./Hero.css"
function Hero() {
    return (
        <div className="hero">
            <div className="hSection left">
                <h1 className="hTitle">
                    Hello,
                    <br/>
                    <span>Be Welcome</span>
                </h1>
                <div className="social">
                    <h2>How to reach me</h2>
                    <div className="socialList">
                        <a href="#"><img src="/github.svg" alt="Github" /></a>
                        <a href="#"><img src="/linkedin.svg" alt="LinkedIn" /></a>
                        <a href="#"><img src="/instagram.svg" alt="Instagram" /></a>
                        <a href="#"><img src="/dribbble.svg" alt="Dribbble" /></a>
                    </div>
                </div>
                <a href="#services" className="scroll">
                    <svg 
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="https://www.w3.org/2000/svg">
                        <path d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                        stroke="white"
                        strokeWidth="1"/>
                        <path d="M12 5V8" 
                        stroke="white"  
                        strokeWidth="1" 
                        strokeLinecap="round"/>
                    </svg>
                </a>
            </div>
            <div className="hSection right">
                <a href="/#contacts" className="contactLink">
                <div className="contactButton">
                    <svg viewBox="0 0 200 200" width="150" height="150">
                        <circle cx="100" cy="100" r="90" fill="white" />
                        <path
                        id="innerCirlePath"
                        fill="none"
                        d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                        />
                        <text className="circleText">
                            <textPath href="#innerCirlePath">Contact me</textPath>
                        </text>
                        <text className="circleText">
                            <textPath href="#innerCirlePath" startOffset="91%">•</textPath>
                        </text>
                        <text className="circleText">
                            <textPath href="#innerCirlePath" startOffset="41%">•</textPath>
                        </text>
                        <text className="circleText">
                            <textPath href="#innerCirlePath" startOffset="50%">Contact me</textPath>
                        </text>
                    </svg>
                    
                    <div className="arrow">
                    <svg
                          xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24"
                         width="50"
                         height="50"
                         fill="none"
                         stroke="black"
                        strokeWidth="2"
                    >
                    <line x1="6" y1="18" x2="18" y2="6" />
                    <polyline points="9 6 18 6 18 15" />
                    </svg>
                 </div>

                </div>
                </a>
            </div>
            <div className="bg">
                <div className="hImg">
                    <img src="/mebg.png" alt="my as a draw" />
                </div>
            </div>
        </div>
    )
}
export default Hero