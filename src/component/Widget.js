import React from "react";
import WidgetOptions from "./WidgetOptions";
import "../css/Widget.css";
 
function Widget() {
  return (
    <div className="widget">
      <div className="widget_header">
        <h5>You may look for...</h5>
      </div>

      <div className="widget_contents">
        <WidgetOptions />
      </div>
    </div>
  );
}
export default Widget;
