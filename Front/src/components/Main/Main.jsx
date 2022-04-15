import React, { useState, useRef } from "react";
import Sidebar from "./Sidebar";
import Aside from "./Aside";
import { Tooltip } from "@mui/material";
import "./Main.css";

let bool = false;

function Main({ patient_info }) {
  const canvasRef = useRef(null); // 캔버스 참조
  const contextRef = useRef(null);
  const [src, setSrc] = useState("");
  const [ctx, setCtx] = useState("");

  const [isDrawing, setIsDrawing] = useState(false);

  const image = new Image();
  const urlReader = new FileReader();

  /* 이미지 업로드 */
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

        contextRef.current = context;
        setCtx(contextRef.current);
      };
    };
    urlReader.readAsDataURL(uploadedImage);
  };

  /* xy좌표 */
  let [XYCoor, setXYCoor] = useState("");
  const Coordinates = () => {
    img.addEventListener("mousemove", function (event) {
      let rect = img.getBoundingClientRect();
      let divtooltip = document.querySelectorAll("#jangjang");
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;
      let xyCoordinates = "x : " + Math.floor(x) + " | y : " + Math.floor(y);
      setXYCoor((XYCoor = xyCoordinates));
    });
  };

  /* point */
  const startDrawing = () => {
    bool = false;
    setIsDrawing(bool);
  };

  const finishDrawing = ({ nativeEvent }) => {
    //console.log(bool);
    setIsDrawing(bool);
    const { clientX, clientY } = nativeEvent;

    if (bool === true) {
      ctx.beginPath();
      ctx.moveTo(clientX, clientY);
      console.log(clientX, clientY);
      ctx.arc(clientX, clientY, 2, 0, Math.PI * 2, false);
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.strokeStyle = "red";
      ctx.stroke();
      ctx.closePath();
    }
  };

  const startDrawing2 = () => {
    bool = true;
  };

  /* ZoomIn/Out */
  let img = document.getElementById("boneCanvas");

  const [scale, setScale] = useState(1);
  const pixelRatio = window.devicePixelRatio || 1;

  const ClickZoomInButton = () => {
    setScale((current) => current + 0.1);
    ctx.width = scale * img.width * pixelRatio;
    ctx.height = scale * img.height * pixelRatio;
    console.log("img.width : " + img.width);
    console.log("ctx.width : " + ctx.width);
    img.style.width = `${scale * ctx.width}px`;
    img.style.height = `${scale * ctx.height}px`;
    ctx.scale(scale * pixelRatio, scale * pixelRatio);
  };

  const ClickZoomOutButton = () => {
    setScale((current) => current - 0.1);
    ctx.width = scale * img.width * pixelRatio;
    ctx.height = scale * img.height * pixelRatio;
    console.log("img.width : " + img.width);
    console.log("ctx.width : " + ctx.width);
    img.style.width = `${scale * ctx.width}px`;
    img.style.height = `${scale * ctx.height}px`;
    ctx.scale(scale * pixelRatio, scale * pixelRatio);
  };

  const ClickLightBulb = () => {
    const leftIcon = document.getElementById("i_lightRange");
    if (leftIcon.style.display === "none") {
      leftIcon.style.display = "block";
    } else {
      leftIcon.style.display = "none";
    }
  };

  const applyfilter = (e) => {
    const rrrange = (e.type, ":", e.target.value);
    console.log("rrrange : " + rrrange);
    document.documentElement.style.setProperty("--inputRange", rrrange + "%");
  };

  return (
    <main>
      <Sidebar
        onClickUploadButton={onClickUploadButton}
        ClickZoomInButton={ClickZoomInButton}
        ClickZoomOutButton={ClickZoomOutButton}
        ClickLightBulb={ClickLightBulb}
        applyfilter={applyfilter}
        startDrawing2={startDrawing2}
      />
      <section className="canvas_area">
        <Tooltip
          className="jang"
          title={`${XYCoor}`}
          followCursor
          id="jangjang"
        >
          <canvas
            src={src}
            id="boneCanvas"
            className="boneCanvas"
            ref={canvasRef}
            onMouseMove={Coordinates}
            onMouseUp={finishDrawing}
            onMouseLeave={startDrawing}
          ></canvas>
        </Tooltip>
      </section>
      <Aside2 patient_info={patient_info} />
    </main>
  );
}

export default Main;
