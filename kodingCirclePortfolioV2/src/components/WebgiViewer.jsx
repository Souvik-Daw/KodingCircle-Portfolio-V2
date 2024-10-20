import React, {
    useRef,
    useState,
    useCallback,
    forwardRef,
    useImperativeHandle,
    useEffect
} from 'react';
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    GammaCorrectionPlugin,
    BloomPlugin,
    mobileAndTabletCheck
} from "webgi";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollAnimation } from '../lib/scroll-animation';

gsap.registerPlugin(ScrollTrigger);


function WebgiViewer() {
    const canvasRef = useRef(null);
    const [isMobile,setIsMobile] = useState(null);

    const memoizedScrollAnimation = useCallback(
        (position, target,isMobileOrTablet, onUpdate) => {
            if (position && target && onUpdate) {
                scrollAnimation(position, target,isMobileOrTablet,onUpdate);
            }
        },[])
        

    const setupViewer = useCallback(async () => {
            // Initialize the viewer
            const viewer = new ViewerApp({
                canvas: canvasRef.current,
            })

            const isMobileOrTablet = mobileAndTabletCheck()
            setIsMobile(isMobileOrTablet)

            const manager = await viewer.addPlugin(AssetManagerPlugin)

            const camera = viewer.scene.activeCamera;
            const position = camera.position;
            const target = camera.target;

            // Add plugins individually.
            await viewer.addPlugin(GBufferPlugin)
            await viewer.addPlugin(new ProgressivePlugin(32))
            await viewer.addPlugin(new TonemapPlugin(true))
            await viewer.addPlugin(GammaCorrectionPlugin)
            await viewer.addPlugin(SSRPlugin)
            await viewer.addPlugin(SSAOPlugin)
            await viewer.addPlugin(BloomPlugin)

            viewer.renderer.refreshPipeline()

            // Import and add a GLB file.
            await manager.addFromPath("scene-black.glb")

            viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

            viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false })

            if(isMobileOrTablet){
                position.set(-16.7,1.17,11.7)
                target.set(0,1.80,0)
                
            }

            window.scrollTo(0, 0)

            let needsUpdate = true;

            const onUpdate = () =>{
                needsUpdate = true;
                viewer.setDirty();
            }

            viewer.addEventListener("preFrame", () => {
                if (needsUpdate) {
                    camera.positionTargetUpdated(true)
                    needsUpdate = false;
                }
            });

            memoizedScrollAnimation(position,target,isMobileOrTablet,onUpdate)

        }, []);



    useEffect(() => {
        setupViewer();
    }, [])


    return (
        <div id="webgi-canvas-container">
            <canvas id="webgi-canvas" ref={canvasRef} />
        </div>
    );
}


export default WebgiViewer;

