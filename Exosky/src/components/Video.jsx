export default function Video() {
    return (
        <div style={{ backgroundColor: "black", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw", overflow: "hidden" }}>
            <video autoPlay muted style={{ width: "100%", height: "100%", objectFit: "cover" }}>
                <source src='src/videos/Transition.mp4' type='video/mp4'></source>
            </video>
        </div>

    );
}

