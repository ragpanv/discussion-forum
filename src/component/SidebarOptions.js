import React from "react";
import "../css/SidebarOptions.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.nesfircroft.com/blog/2019/07/10-books-that-every-engineer-should-read"
        >
          Books
        </a>
      </div>

      <div className="sidebarOption">
        <img
          src="https://pestleanalysis.com/wp-content/uploads/2016/03/business-plan.jpg"
          alt=""
        />
        <a target="_blank" rel="noreferrer" href="https://www.forbes.com">
          Business
        </a>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-RHHW8QX6MgO_Is-84MHLognGQOoXPnCvw&usqp=CAU"
          alt=""
        />
        <a
          target="_blank"
          rel="noreferrer"
          href="http://www.schooleducation.kar.nic.in/index.html"
        >
          Education
        </a>
      </div>

      <div className="sidebarOption">
        <img
          src="https://image.shutterstock.com/image-photo/education-global-world-graduation-cap-260nw-793972774.jpg"
          alt=""
        />
        <a target="_blank" rel="noreferrer" href="https://www.aicte-india.org/">
          Engineering
        </a>
      </div>

      <div className="sidebarOption">
        <img
          src="https://image.shutterstock.com/image-vector/low-poly-science-chemical-glass-260nw-1075200101.jpg"
          alt=""
        />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.sciencedaily.com/"
        >
          Science
        </a>
      </div>

      <div className="sidebarOption">
        <img
          src="https://tech.ebu.ch/files/live/sites/tech/files/shared/groups/fds/Man-holding-globe-networked-media_833x469_web.jpg"
          alt=""
        />
        <a target="_blank" rel="noreferrer" href="https://techcrunch.com/">
          Technology
        </a>
      </div>

      <div className="sidebarOption">
        <img
          src="https://image.shutterstock.com/image-photo/medical-health-care-wood-block-260nw-1937633761.jpg"
          alt=""
        />
        <a target="_blank" rel="noreferrer" href="https://www.mohfw.gov.in/">
          Health
        </a>
      </div>

      <div className="sidebarOption">
        <img
          src="http://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
          alt=""
        />
        <a target="_blank" rel="noreferrer" href="https://mio.to/">
          Music
        </a>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.britannica.com/47/190947-131-FCF3F960/Olympic-torch-illustration-sports-summer-games.jpg"
          alt=""
        />
        <a target="_blank" rel="noreferrer" href="https://sportsauthorityofindia.nic.in/">
          Sports
        </a>
      </div>
    </div>
  );
}

export default SidebarOptions;
