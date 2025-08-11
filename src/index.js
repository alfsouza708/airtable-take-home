import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import timelineItems from "./timelineItems.js";
import './app.css'

function Circle() {
  return (
    <div className="timeline-circle">
    </div>
  )
}

function Pillar() {
  return (
    <div className="timeline-pillar">
    </div>
  )
}

function TimelineItem({data}) {
  return(
    <div className="timeline-box">
      <div className="timeline-item">{data.name}</div>
    </div>
  )
}

function Timeline({items}) {
  return (
    <div className="timeline-container">
        <Circle />

        {items.map((item, key) => (
          <Fragment key={key}>
            <div className="timeline-fragment">
              {key % 2 === 0 ? 
                <>
                  <TimelineItem data={item} />
                  <Pillar />
                  <div></div>
                </>
                 : 
                 <>
                  <div></div>
                  <Pillar />
                  <TimelineItem data={item} />
                </>
                }
            </div>
            {key < (items.length - 1) && <Circle />}
          </Fragment>
        ))}

        <Circle />
    </div>
  )
}

function App() {
  return (
    <div >
      <Timeline items={timelineItems} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);