/* eslint-disable no-unused-vars */
import '../css/Galaxy.css'

import { useRef, useEffect } from 'react';
import data from '../data/exoplanets.json'

export default function Map() {

    const canvasRef = useRef(null);


    useEffect(() => {
        const canvas = document.getElementById('dotCanvas');
        const ctx = canvas.getContext('2d');
        const container = document.getElementById('canvas-container');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const coordinates = data;

        function drawDots(coords) {
            ctx.fillStyle = 'white';

            coords.forEach(planet => {
                const x = (planet.x + 1) * canvas.width / 2;
                const y = (1 + planet.y) * canvas.height / 2;

                //Create a button element
                const button = document.createElement('button');
                button.style.position = 'absolute';
                button.style.left = `${x}px`;
                button.style.top = `${y}px`;
                button.style.width = '8px';
                button.style.height = '8px';
                button.style.background = 'white';
                button.style.border = 'none';
                button.style.borderRadius = '50%';
                button.style.cursor = 'pointer';
                button.style.padding = '0';
                button.style.border = 'none';
                button.style.display = 'flex';
                button.style.justifyContent = 'center';
                button.style.alignItems = 'center';
                button.style.background = 'transparent';

                button.id = planet.pl_id;

                // Create an image element
                const image = document.createElement('img');
                image.src = './src/imgs/star.png'; // replace with your image URL
                image.style.width = '10px'; // adjust the width and height to your liking
                image.style.height = '10px';
                image.style.borderRadius = '0px';
                image.style.objectFit = 'cover';
                image.style.display = 'block';
                image.style.margin = 'auto';
                image.style.padding = '0';


                // Append the image to the button
                button.appendChild(image);

                // Create a tooltip element
                const tooltip = document.createElement('div');
                tooltip.style.position = 'absolute';
                tooltip.style.background = 'white';
                tooltip.style.border = '1px solid black';
                tooltip.style.padding = '5px';
                tooltip.style.borderRadius = '5px';
                tooltip.style.opacity = '0';
                tooltip.style.transition = 'opacity 0.5s';
                tooltip.style.zIndex = '1';
                tooltip.style.pointerEvents = 'none';
                tooltip.textContent = planet.pl_name;
                tooltip.style.color = 'black';

                // Add the tooltip to the container
                container.appendChild(tooltip);

                // Add event listeners to the button
                button.addEventListener('mouseover', () => {
                    const buttonRect = button.getBoundingClientRect();
                    const tooltipRect = tooltip.getBoundingClientRect();
                    tooltip.style.opacity = '1';
                    tooltip.style.top = `${buttonRect.top - tooltipRect.height - 5}px`;
                    tooltip.style.left = `${buttonRect.left + (buttonRect.width - tooltipRect.width) / 2}px`;
                });

                button.addEventListener('mouseout', () => {
                    tooltip.style.opacity = '0';
                });

                button.addEventListener("click", () => {
                    window.location.replace("http://localhost:5173/planet/" + planet.pl_id);
                })


                // Add the button to the canvas container
                container.appendChild(button);
            });
        }

        drawDots(coordinates);
    }, []);

    return (
        <>
            <div id="canvas-container" style={{ position: 'relative' }}>
                <canvas id="dotCanvas"></canvas>
            </div>
            <div className='bg'></div>
        </>
    )
}