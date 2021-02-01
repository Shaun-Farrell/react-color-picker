import React, { useRef, useEffect, useState } from "react";
import { setTargetColor, addGradient, setNewHex } from "../utils/pickerHelper";
import "../App.css";
const SQ_SIDE = 350;

export default function Picker() {
  const canvasRef = useRef(null);
  const canvasPanelRef = useRef(null);
  const [hex, setHex] = useState("#FF0000");
  const [mouseDown, setMouseDown] = useState({ main: false, panel: false });
  const [target, setTarget] = useState([255, 0, 0]);
  const [cursor, setCursor] = useState({ x: SQ_SIDE - 10, y: -10 });
  const [cursorPnl, setCursorPnl] = useState({ y: -10 });
  const resetCursor = () => setCursor({ x: SQ_SIDE - 10, y: -10 });

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const context: CanvasRenderingContext2D = canvas?.getContext("2d");
    const orig = [255, 255, 255];
    const diff = [
      orig[0] - target[0],
      orig[1] - target[1],
      orig[2] - target[2],
    ];
    const width = context.canvas.width;
    for (let x = 0; x <= width; x++) {
      addGradient(context, x, diff, width);
    }
    const canvasPanel: any = canvasPanelRef.current;
    const contextSmall = canvasPanel?.getContext("2d");
    let gradient = context.createLinearGradient(
      0,
      0,
      0,
      contextSmall.canvas.height
    );

    gradient.addColorStop(0, "rgb(255, 0, 0)");
    gradient.addColorStop(0.15, "rgb(255, 0, 255)");
    gradient.addColorStop(0.3, "rgb(0, 0, 255)");
    gradient.addColorStop(0.45, "rgb(0, 255, 255)");
    gradient.addColorStop(0.6, "rgb(0, 255, 0)");
    gradient.addColorStop(0.75, "rgb(255, 255, 0)");
    gradient.addColorStop(1, "rgb(255, 0, 0)");

    contextSmall.fillStyle = gradient;
    contextSmall.fillRect(
      0,
      0,
      contextSmall.canvas.width,
      contextSmall.canvas.height
    );
  }, [target]);

  return (
    <>
      <div className="container">
        <div className="relative-container">
          <canvas
            onMouseDown={(e) => {
              e.preventDefault();
              const x = e.nativeEvent.offsetX;
              const y = e.nativeEvent.offsetY;
              setMouseDown((prevState) => ({ ...prevState, main: true }));
              setNewHex({ x, y }, setHex, setCursor, target, SQ_SIDE, SQ_SIDE);
            }}
            onMouseUp={() =>
              setMouseDown((prevState) => ({ ...prevState, main: false }))
            }
            onMouseOut={() =>
              setMouseDown((prevState) => ({ ...prevState, main: false }))
            }
            onMouseMove={(e) => {
              if (mouseDown.main) {
                setNewHex(
                  { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY },
                  setHex,
                  setCursor,
                  target,
                  SQ_SIDE,
                  SQ_SIDE
                );
              }
            }}
            className="canvas"
            ref={canvasRef}
          />
          <div className="circle" style={{ top: cursor.y, left: cursor.x }} />
        </div>
        <div className="relative-container">
          <canvas
            onMouseDown={(e) => {
              e.preventDefault();
              setMouseDown((prevState) => ({ ...prevState, panel: true }));
              setTargetColor(
                e.nativeEvent.offsetY,
                setTarget,
                setHex,
                setCursorPnl,
                resetCursor,
                SQ_SIDE
              );
            }}
            onMouseUp={() =>
              setMouseDown((prevState) => ({ ...prevState, panel: false }))
            }
            onMouseOut={() =>
              setMouseDown((prevState) => ({ ...prevState, panel: false }))
            }
            onMouseMove={(e) => {
              if (mouseDown.panel) {
                setTargetColor(
                  e.nativeEvent.offsetY,
                  setTarget,
                  setHex,
                  setCursorPnl,
                  resetCursor,
                  SQ_SIDE
                );
              }
            }}
            className="canvasSmall"
            ref={canvasPanelRef}
          />
          <div className="circle" style={{ top: cursorPnl.y, left: 30 }} />
        </div>
      </div>
      <div className="container">
        <div className="label">HEX: </div>
        <div className="hex">{hex}</div>
        <div className="current" style={{ backgroundColor: hex }}></div>
      </div>
    </>
  );
}
