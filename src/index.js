import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM, { render } from "react-dom";
import { Pannellum, viewer } from "pannellum-react";
import { img1, img2, img3, img4, img5 } from "./images/index";

import "./styles.css";

const ImageThumb = ({ imgList, setImg }) => {
  return (
    <div className="img-thumb-wrapper">
      {imgList.map((img, i) => (
        <div
          onClick={() => {
            setImg(img);
          }}
        >
          <img className="thumbnail" src={img.img}></img>
        </div>
      ))}
    </div>
  );
};

const innitImgList = [
  {
    id: 1,
    img: img1,
    hotspots: [
      {
        subid: 12,
        type: "custom",
        name: "test",
        pitch: 14.1,
        yaw: 1.5,
        cssClass: "custom-hotspot",
        createTooltipFunc: hotspot,
        createTooltipArgs: "Baltimore Museum of Art",
      },
      {
        subid: 13,
        type: "custom",
        name: "test",
        pitch: -9.4,
        yaw: 222.6,
        cssClass: "custom-hotspot",
        createTooltipFunc: hotspot,
        createTooltipArgs: "Art Museum Drive",
      },
      {
        subid: 14,
        type: "custom",
        name: "test",
        pitch: -0.9,
        yaw: 144.4,
        cssClass: "custom-hotspot",
        createTooltipFunc: hotspot,
        createTooltipArgs: "North Charles Street",
      },
    ],
  },
  {
    id: 2,
    img: img2,
    hotspots: [
      {
        subid: 15,
        type: "custom",
        name: "test",
        pitch: 14.1,
        yaw: 1.5,
        cssClass: "custom-hotspot",
        createTooltipFunc: hotspot,
        createTooltipArgs: "Baltimore Museum of Art",
      },
      {
        subid: 16,
        type: "custom",
        name: "test",
        pitch: -9.4,
        yaw: 222.6,
        cssClass: "custom-hotspot",
        createTooltipFunc: hotspot,
        createTooltipArgs: "Art Museum Drive",
      },
      {
        subid: 17,
        type: "custom",
        name: "test",
        pitch: -0.9,
        yaw: 144.4,
        cssClass: "custom-hotspot",
        createTooltipFunc: hotspot,
        createTooltipArgs: "North Charles Street",
      },
    ],
  },
  {
    id: 3,
    img: img3,
    hotspots: [
      {
        subid: 18,
        type: "custom",
        name: "test",
        pitch: 14.1,
        yaw: 1.5,
        cssClass: "custom-hotspot",
        createTooltipFunc: hotspot,
        createTooltipArgs: "Baltimore Museum of Art",
      },
      {
        subid: 19,
        type: "custom",
        name: "test",
        pitch: -9.4,
        yaw: 222.6,
        cssClass: "custom-hotspot",
        createTooltipFunc: hotspot,
        createTooltipArgs: "Art Museum Drive",
      },
      {
        subid: 20,
        type: "custom",
        name: "test",
        pitch: -0.9,
        yaw: 144.4,
        cssClass: "custom-hotspot",
        createTooltipFunc: hotspot,
        createTooltipArgs: "North Charles Street",
      },
    ],
  },
  {
    id: 4,
    img: img4,
    hotspots: [
      {
        subid: 21,
        type: "custom",
        name: "test",
        pitch: 14.1,
        yaw: 1.5,
        cssClass: "custom-hotspot",
        createTooltipFunc: hotspot,
        createTooltipArgs: "Baltimore Museum of Art",
      },
      {
        subid: 22,
        type: "custom",
        name: "test",
        pitch: -9.4,
        yaw: 222.6,
        cssClass: "custom-hotspot",
        createTooltipFunc: hotspot,
        createTooltipArgs: "Art Museum Drive",
      },
      {
        subid: 23,
        type: "custom",
        name: "test",
        pitch: -0.9,
        yaw: 144.4,
        cssClass: "custom-hotspot",
        createTooltipFunc: hotspot,
        createTooltipArgs: "North Charles Street",
      },
    ],
  },
  {
    id: 5,
    img: img5,
    hotspots: [
      {
        subid: 24,
        type: "custom",
        name: "test",
        pitch: 14.1,
        yaw: 1.5,
        cssClass: "custom-hotspot",
        createTooltipFunc: hotspot,
        createTooltipArgs: "Baltimore Museum of Art",
      },
      {
        subid: 25,
        type: "custom",
        name: "test",
        pitch: -9.4,
        yaw: 222.6,
        cssClass: "custom-hotspot",
        createTooltipFunc: hotspot,
        createTooltipArgs: "Art Museum Drive",
      },
      {
        subid: 26,
        type: "custom",
        name: "test",
        pitch: -0.9,
        yaw: 144.4,
        cssClass: "custom-hotspot",
        createTooltipFunc: hotspot,
        createTooltipArgs: "North Charles Street",
      },
    ],
  },
];

// console.log();

function hotspot(hotSpotDiv, args) {
  console.log(hotSpotDiv);
  hotSpotDiv.classList.add("custom-tooltip");
  var span = document.createElement("span");
  span.innerHTML = args;
  // hotSpotDiv.appendChild(span);
  ReactDOM.render(
    <div style={{ width: 50, height: 50, background: "red" }}>test</div>,
    hotSpotDiv
  );
  span.style.width = span.scrollWidth - 20 + "px";
  span.style.marginLeft =
    -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + "px";
  span.style.marginTop = -span.scrollHeight - 12 + "px";
}

const HotspotList = ({ img, setImgList }) => {
  const [showEdit, setShowEdit] = useState(false);

  const editTemplate = () => {
    return <div>Uni</div>;
  };

  const addTemplate = () => {
    return (
      <div className="add-form">
        <div className="form-row">
          <p>Hotspot name</p>
          <input type="text" />
        </div>
        <div className="form-row jst-space-btw">
          <p>Type</p>
          <div className="radio-block">
            <input type="radio" id="html" name="fav_language" value="info" />
            <p>Info</p>
            <input type="radio" id="css" name="fav_language" value="custom" />
            <p>Custom</p>
          </div>
        </div>
        <div className="form-row"></div>
      </div>
    );
  };
  return (
    <div className="list-wrapper">
      <div className="hotspot-row">
        <h3>Hotspot List </h3>
        <button
          onClick={() => setShowEdit((prev) => !prev)}
          className="btn-green"
        >
          Add Hotspot
        </button>
      </div>
      {showEdit && addTemplate()}
      {img.hotspots.map((hotSpot) => (
        <div className="hotspot-row">
          <p>{hotSpot.name}</p>
          <div className="btn-wrapper">
            <button>Edit</button>
            <button className="btn-remove">Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const renderHotspots = (img, setImg) => {
  return img.hotspots.map((el) => (
    <Pannellum.Hotspot
      type={el.type}
      pitch={el.pitch}
      yaw={el.yaw}
      handleClick={(evt, name) => {
        setImg(innitImgList[3]);
      }}
      name="hs1"
      // tooltip={hotspot}
      tooltipArg={"test"}
    />
  ));
};

function App() {
  const [imgList, setImgList] = useState(innitImgList);
  const [img, setImg] = useState(imgList[0]);
  const viewerRef = useRef(null);
  const handleMouseClick = (e, img) => {
    const viewer = viewerRef.current.getViewer();
    console.log(viewer.mouseEventToCoords(e));
    const pitch = viewer.mouseEventToCoords(e)[0];
    const yaw = viewer.mouseEventToCoords(e)[1];
    const newHotspot = {
      pitch: pitch,
      yaw: yaw,
      type: "info",
      text: "New hotspot",
    };

    console.log(newHotspot);
    viewer.addHotSpot(newHotspot);
    // setHotspots([...hotspots, newHotspot]);
  };
  // useEffect(() => {
  //   console.log(viewerRef.current.getViewer());
  //   // console.log(viewer.mouseEventToCoords(e));

  //   viewer.on("click", handleMouseClick);
  // }, [viewerRef]);

  return (
    <div className="App">
      <div className="screen-wrapper">
        <Pannellum
          ref={viewerRef}
          width="100%"
          height="500px"
          image={img.img}
          pitch={10}
          yaw={180}
          hfov={110}
          autoLoad={true}
          showZoomCtrl={false}
          onLoad={() => {
            console.log("panorama loaded");
          }}
          doubleClickZoom={false}
          // handleClick={(a, b) => {
          //   console.log(a, b);
          // }}
          // getHfov={(e) => {
          //   console.log(e);
          // }}
          onMousedown={(e) => handleMouseClick(e, img)}
        >
          {renderHotspots(img, setImg)}
        </Pannellum>
        <HotspotList setImgList={setImgList} img={img} />
      </div>
      <ImageThumb setImg={setImg} imgList={imgList} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
