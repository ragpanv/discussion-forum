import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, Button } from '@material-ui/core';
import LanguageIcon from "@material-ui/icons/Language"
import "../css/Navbar.css"

function Navbar(){
    return (
      <div className="qHeader">
        <div className="Header_logo">
          <img
            src="https://th.bing.com/th/id/OIP.-MxYaS4J1SySsb0msl-oMgHaDF?w=350&h=145&c=7&o=5&dpr=1.25&pid=1.7"
            alt=""
            width="100px"
          />
          {/*https://www.google.com/imgres?imgurl=https%3A%2F%2Fknowmore.org.au%2Fwp-content%2Fuploads%2F2020%2F07%2Fknowmore-logo-social-1.jpg&imgrefurl=https%3A%2F%2Fknowmore.org.au%2Ffor-service-providers%2F&tbnid=zvIiYOLuXqZR2M&vet=10CHEQMyibAWoXChMI6OX12sS_7wIVAAAAAB0AAAAAEAI..i&docid=zfP4DVOHoHDHCM&w=842&h=596&q=know%20more&ved=0CHEQMyibAWoXChMI6OX12sS_7wIVAAAAAB0AAAAAEAI */}
          {/*https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.logolynx.com%2Fimages%2Flogolynx%2F5f%2F5ff879c5deef9c4d714d2f00b2d9d8dc.jpeg&imgrefurl=https%3A%2F%2Fwww.logolynx.com%2Ftopic%2Fthe%2Bmore%2Byou%2Bknow&tbnid=odA0LR6NTjfERM&vet=12ahUKEwj80YK2xb_vAhUy3XMBHQD1AuAQMygHegUIARCkAQ..i&docid=5OxUNVlEhY5tEM&w=1008&h=1008&q=know%20more%20logo&ved=2ahUKEwj80YK2xb_vAhUy3XMBHQD1AuAQMygHegUIARCkAQ */}
        </div>

        {/*for icons */}
        <div className="qHeader_icons">
          <div className="qHeader_icon">
            <HomeIcon />
          </div>
          <div className="qHeader_icon">
            <FeaturedPlayListOutlinedIcon />
          </div>
          <div className="qHeader_icon">
            <AssignmentTurnedInOutlinedIcon />
          </div>
          <div className="qHeader_icon">
            <PeopleAltOutlinedIcon />
          </div>
          <div className="qHeader_icon">
            <NotificationsOutlinedIcon />
          </div>
        </div>

        <div className="qHeader_input">
          <SearchIcon />
          <input type="text" placeholder="Search and know it" />
        </div>

        <div className="qHeader_Rem">
          <div className="qHeader_avatar">
            <Avatar />
          </div>
          <LanguageIcon />
          <Button>Add Question</Button>
        </div>
      </div>
    );
}

export default Navbar;