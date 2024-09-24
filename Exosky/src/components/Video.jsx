export default function Video() {


    return (
        <div style={{
            backgroundColor: "black",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box"
        }}>
            <video autoPlay muted width="100%" height="100%">
                <source src='src\videos\Transition.mp4' type='video/mp4'></source>
            </video>
        </div>

    )
}