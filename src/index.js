import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import timelineItems from "./timelineItems.js";
import { assignLanes } from "./assignLanes.js";
import moment from "moment";
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
        {items.map((item, key) => (
          <Fragment key={key}>
            {key < (items.length) && (
              key % 2 === 0 ?
              <div className="timeline-grid">
                <div></div>
                <Circle />
                <div>{moment(item.start).format('MMMM D, YYYY')}</div>
              </div>
              :
              <div className="timeline-grid">
                <div>{moment(item.start).format('MMMM D, YYYY')}</div>
                <Circle />
                <div></div>
              </div>
            )}
            <div className="timeline-grid">
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
          </Fragment>
        ))}

        <div className="timeline-grid">
          <div></div>
          <Circle />
          <div>{moment(items[items.length - 1].end).format('MMMM D, YYYY')}</div>
        </div>
    </div>
  )
}

function App() {
  let newLines = assignLanes(timelineItems)
  return (
    <div >
      <Timeline items={newLines} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);