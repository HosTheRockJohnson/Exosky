export default function Video() {


    return (
            <div style={{backgroundColor: "black", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                <video autoPlay muted width="auto">
                    <source src= 'src\videos\Transition.mp4' type='video/mp4'></source>
                </video>
            </div>
    )
}