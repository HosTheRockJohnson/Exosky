import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import planetData from '../data/exoplanets.json';
export default function Planet() {
    const planetId = useParams().planetId;
    const planet = planetData.find((planet) => planet.pl_id === planetId);

    return (
        <>
            <Link to='/map'><div className="back-to-map"></div></Link>
            <div className="container1">
                <h2 className="description-label-1">{planet.pl_name}</h2>
                <hr />
                <div className="brief-description">
                    <img src={planet['img-path']} alt={planet.pl_name} className="planet-image" />
                    <div className="planet-info">
                        <div className="info-box">
                            <p><span className="info-label">DISCOVERED: </span>
                                {planet.disc_year}</p>
                            <p>
                                <span className="info-label">PLANET TYPE: </span>
                                {planet.planet_type}
                            </p>
                            <p>
                                {planet.description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="orbit">
                    <div className="orbit-info">
                        <span className="info-label block">ORBITAL RADIUS</span>
                        <p className="orbit-info-value">{planet.pl_orbsmax} AU</p>
                    </div>
                    <div className="orbit-info">
                        <span className="info-label block">ORBITAL PERIOD</span>
                        <p className="orbit-info-value">{planet.pl_orbper} days</p>
                    </div>
                    <div className="orbit-info">
                        <span className="info-label block">ORBITAL ECCENTRICITY</span>
                        <p className="orbit-info-value">{planet.pl_orbeccen}</p>
                    </div>
                </div>

                <div className="comparison">
                    <div className="comparison-box">
                        <h3 className="description-label-3">Planet Comparison</h3>
                        <p><span className="info-label-planet">HD_21520 b </span> <span className="info-value-planet">  Jupiter</span></p>
                        <div className="circle planet-circle"></div>
                        <p>
                            <span className="info-label">MASS</span> {planet.pl_masse} Earths<br />
                            <span className="info-label">RADIUS</span> {planet.pl_radj} x Jupiter
                        </p>
                    </div>
                    <div className="comparison-box">
                        <h3 className="description-label-3">Star Comparison</h3>
                        <p><span className="info-label-star">HD_21520</span> <span className="info-value-star">  Our Sun</span></p>
                        <div className="circle star-circle"></div>
                        <p>
                            <span className="info-label">MASS</span> {planet.st_mass} x Our Sun<br />
                            <span className="info-label">RADIUS</span> {planet.st_rad} x Our Sun
                        </p>
                    </div>
                </div>
                <div className="detection-method">
                    <p className='detection-method-headline'>Detection Method: </p>
                    <p className='detection-method-headline'>{planet.discoverymethod}</p>
                    <p className="detection-method-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab iure exercitationem explicabo distinctio unde magni. A ipsa delectus distinctio, adipisci fugit ducimus consequuntur, nam magnam quas assumenda cum est earum.</p>
                </div>
                <div className="observed-by">
                    <p className='observed-by-label'>Observed By:</p>
                    <img className='observed-by-img' src='../src/imgs/tess.webp' alt='obs'></img>
                    <p className="observed-by-value">{planet.disc_facility}</p>
                </div>
            </div>
        </>
    );
}