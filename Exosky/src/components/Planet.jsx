import { Link } from 'react-router-dom';
export default function Planet() {
    return (
        <>
            <Link to='/map'><div className="back-to-map"></div></Link>
            <div className="container">
                <h2 className="description-label-2">HD_21520 b</h2>
                <h1 className="description-label-1">A Neptune-like giant planet</h1>
                <hr />
                <div className="brief-description">
                    <img src="src/imgs/planet.webp" alt="HD 21520 b" className="planet-image" />
                    <div className="planet-info">
                        <div className="info-box">
                            <p><span className="info-label">DISCOVERED: </span>
                                2024</p>
                            <p>
                                <span className="info-label">PLANET TYPE: </span>
                                Neptune-like
                            </p>
                            <p>
                                HD 21520 b is a Neptune-like exoplanet that orbits a G-type star. Its mass is 17.7
                                Earths, it takes 25.1 days to complete one orbit of its star, and is 0.1726 AU from its
                                star. Its discovery was announced in 2024.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="orbit">
                    <div className="orbit-info">
                        <span className="info-label block">ORBITAL RADIUS</span>
                        <p className="orbit-info-value">0.1726 AU</p>
                    </div>
                    <div className="orbit-info">
                        <span className="info-label block">ORBITAL PERIOD</span>
                        <p className="orbit-info-value">25.1 days</p>
                    </div>
                    <div className="orbit-info">
                        <span className="info-label block">ORBITAL ECCENTRICITY</span>
                        <p className="orbit-info-value">0</p>
                    </div>
                </div>

                <div className="comparison">
                    <div className="comparison-box">
                        <h3 className="description-label-3">Planet Comparison</h3>
                        <p><span className="info-label-planet">HD_21520 b </span> <span className="info-value-planet">  Jupiter</span></p>
                        <div className="circle planet-circle"></div>
                        <p>
                            <span className="info-label">MASS</span> 17.7 Earths<br />
                            <span className="info-label">RADIUS</span> 0.241 x Jupiter
                        </p>
                    </div>
                    <div className="comparison-box">
                        <h3 className="description-label-3">Star Comparison</h3>
                        <p><span className="info-label-star">HD_21520</span> <span className="info-value-star">  Our Sun</span></p>
                        <div className="circle star-circle"></div>
                        <p>
                            <span className="info-label">MASS</span> 1.09 x Our Sun<br />
                            <span className="info-label">RADIUS</span> 1.04 x Our Sun
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}