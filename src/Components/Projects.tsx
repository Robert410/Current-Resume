import { useEffect, useRef, useState } from "react";
import Transition from "./Transition";
import videos from "./assets/images";
import "./Projects.css";
import { Tooltip } from "@mui/material";

interface Video {
  id: string;
  videoId: string;
  videoName: string;
  previewImg: string;
  description: string;
  video: string;
}

interface Item {
  id: string;
  rowId: number;
  video?: Video;
}

const Projects = () => {
  const galleryRef = useRef<any>(null);

  const [items, setItems] = useState<Item[][]>([]);
  
  useEffect(() => {
    const generateItems = () => {
      const rows = [
        { id: 1, count: 2 },
        { id: 2, count: 2 },
      ];

      const newItems = rows.map((row) => {
        return Array.from({ length: row.count }, (_, index) => {
          const itemId = `${row.id}-${index}`;
          const video = videos.find((v) => v.id === itemId);
          return {
            id: itemId,
            rowId: row.id,
            video: video,
          };
        });
      });

      setItems(newItems);
    };

    generateItems();

    const handleMouseMove = (e: any) => {
      const { clientX, clientY, currentTarget } = e;
      const { width, height } = currentTarget.getBoundingClientRect();
      const centerX = width / 2;
      const centerY = height / 2;

      const factor = 1;
      const deltaX = (centerX - clientX) / factor;
      const deltaY = (centerY - clientY) / factor;

      galleryRef.current.style.transform = `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px))`;
    };

    const container = document.querySelector(".container");
    container?.addEventListener("mousemove", handleMouseMove);

    return () => {
      container?.removeEventListener("mousemove", handleMouseMove);
    };
  },[])
  
  return (
    <div className="contentPage">
    <div className="container">
      <div className="gallery" ref={galleryRef}>
        {items.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="row">
            {row.map((item) => (
              <div key={item.id} className="item">
                <div className="preview-img">
                  <Tooltip title={item.video?.description}>
                    <a href={item.video?.videoId} target="_blank" >
                  <img src={item.video?.previewImg} alt={item.video?.videoName} className="imagePreview"/></a>
                  </Tooltip>
                </div>
                <p id="videoName">{item.video?.videoName}</p>

                <div className="work-video-wrapper">
                  {item.video && (
                    <>
                  <img src={item.video?.video} alt={item.video?.videoName} className="imagePreview"/>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    </div>

  );
}

export default Transition(Projects);