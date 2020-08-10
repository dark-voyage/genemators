const Hero = () => {
    return(
        <div className="container-3d">
            <div className="hi">
                <div className="hi__cuboid">
                    <div className="face face--front"><p className="hi__word">Hello</p></div>
                    <div className="face face--back"><p className="hi__word">Hello</p></div>
                    <div className="face face--top"><p className="hi__word">Hello</p></div>
                    <div className="face face--bottom"><p className="hi__word">Hello</p></div>
                </div>
                <div className="hi__cuboid">
                    <div className="face face--front"><p className="hi__word">From</p></div>
                    <div className="face face--back"><p className="hi__word">From</p></div>
                    <div className="face face--top"><p className="hi__word">From</p></div>
                    <div className="face face--bottom"><p className="hi__word">From</p></div>
                </div>
                <div className="hi__cuboid">
                    <div className="face face--front"><p className="hi__word">UZB</p></div>
                    <div className="face face--back"><p className="hi__word">UZB</p></div>
                    <div className="face face--top"><p className="hi__word">UZB</p></div>
                    <div className="face face--bottom"><p className="hi__word">UZB</p></div>
                </div>

            </div>
            <div className="hi__base">
                <div className="hi__base-plate"/>
                <p className="hi__location hi__location--lat">53.3454° N</p>
                <p className="hi__location hi__location--long">-6.3070° E</p>
            </div>
        </div>
    )
}

export default Hero
