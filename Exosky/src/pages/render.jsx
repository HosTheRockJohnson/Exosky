import { useEffect } from 'react';

export default function Render() { 
    useEffect(() => {
        const root = document.getElementById('root')
        const script = document.createElement('script');
        script.src = '../../finished/main.js';
        script.type = 'module';  
        root.appendChild(script); 
    }, []);

    return ( 
        <> 
            <canvas id="canvas" data-engine="three.js r146"></canvas> 
        </> 
    ); 
}