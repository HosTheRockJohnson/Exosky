import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import App from './App.jsx'
import * as THREE from 'three'

// Data and visualization
import { CompositionShader} from '../finished/shaders/CompositionShader.js'
import { BASE_LAYER, BLOOM_LAYER, BLOOM_PARAMS, OVERLAY_LAYER } from "../finished/config/renderConfig.js";

// Rendering
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { Galaxy } from '../finished/objects/galaxy.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
