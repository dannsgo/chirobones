import React, { useState, useRef } from "react";
import Sidebar from "./Sidebar";
import Aside from "./Aside";

function Main() {
    const [src, setSrc] = useState("");
    const canvasRef = useRef(null);
    const image = new Image();
    const urlReader = new FileReader();
    const onClickUploadButton = ({ target }) => {
        if (!target.files.length) {
            return;
        }
        const uploadedImage = target.files[0];
        urlReader.onload = ({ target: { result: imageUrl } }) => {
            image.src = imageUrl;
            image.onload = () => {
                if (!canvasRef || !canvasRef.current) {
                    return;
                }
                const canvas = canvasRef.current;
                const context = canvas.getContext("2d");
                canvas.width = image.width;
                canvas.height = image.height;
                context.drawImage(image, 0, 0);
                setSrc(canvas.toDataURL());
            };
        };
        urlReader.readAsDataURL(uploadedImage);
    };

    return (
        <div>
            <main>
                <Sidebar onClickUploadButton={onClickUploadButton} />
                <img src={src} alt="" />

                <section className="canvas_area">
                    <canvas id="boneCanvas" className="boneCanvas" ref={canvasRef}></canvas>
                    <div id="mouseXY"></div>
                </section>

                <Aside />
            </main>
        </div>
    );
}

export default Main;
