import React from "react";
import "../css/SidebarOptions.css";
import {Add} from '@material-ui/icons';
import{
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom'

const Child=({match})=>console.log('match', match)||(
  <div>
    <h3>ID:  </h3>
  </div>
)


function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <Router>
        <div className="sidebarOption">
          <img
            src="https://thumbs.dreamstime.com/b/history-magnifying-glass-focused-word-36388781.jpg"
            alt=""
          />
          <a>History</a>
        </div>
        <div className="sidebarOption">
          <img
            src="https://pestleanalysis.com/wp-content/uploads/2016/03/business-plan.jpg"
            alt=""
          />
          <a>
            <Link to="https://www.forbes.com/">Business</Link>
          </a>
        </div>
        <div className="sidebarOption">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-RHHW8QX6MgO_Is-84MHLognGQOoXPnCvw&usqp=CAU"
            alt=""
          />
          <a>
            <Link to="http://www.schooleducation.kar.nic.in/index.html">
              Education
            </Link>
          </a>
        </div>
        <div className="sidebarOption">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-RHHW8QX6MgO_Is-84MHLognGQOoXPnCvw&usqp=CAU"
            alt=""
          />
          <a>
            <Link to="https://www.aicte-india.org/">Engineering</Link>
          </a>
        </div>
        <div className="sidebarOption">
          <img
            src="https://image.shutterstock.com/image-vector/low-poly-science-chemical-glass-260nw-1075200101.jpg"
            alt=""
          />
          <a>
            <Link to="https://www.sciencedaily.com/">Science</Link>
          </a>
        </div>
        <div className="sidebarOption">
          <img
            src="https://tech.ebu.ch/files/live/sites/tech/files/shared/groups/fds/Man-holding-globe-networked-media_833x469_web.jpg"
            alt=""
          />
          <a>
            <Link to="https://techcrunch.com/">Technology</Link>
          </a>
        </div>
        <div className="sidebarOption">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkRO1GUnRzRt-R_C_EFsTKjpcUozhvcdBc_Q&usqp=CAU"
            alt=""
          />
          <a>
            <Link to="https://www.mohfw.gov.in/">Health</Link>
          </a>
        </div>
        <div className="sidebarOption">
          <img
            src="http://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
            alt=""
          />
          <a>
            <Link to="https://mio.to/">Music</Link>
          </a>
        </div>
        <div className="sidebarOption">
          <img
            src="https://cdn.britannica.com/47/190947-131-FCF3F960/Olympic-torch-illustration-sports-summer-games.jpg"
            alt=""
          />
          <a>
            <Link to="https://sportsauthorityofindia.nic.in/">Sports</Link>
          </a>
        </div>

        <div className="sidebarOption">
          <Add />
          <a className="text">
            <Link to="www.google.com">Discover Spaces</Link>
          </a>
        </div>

        <Link to="www.google.com"></Link>

      </Router>
    </div>
  );
}

export default SidebarOptions;
