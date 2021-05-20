import React, { useState } from 'react'
import HomeIcon from '@material-ui/icons/Home'
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, Button,  Input } from '@material-ui/core';
import LanguageIcon from "@material-ui/icons/Language"
import "../css/Navbar.css"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db, {auth} from '../firebase'
import firebase from 'firebase'
import Modal from 'react-modal'
import { ExitToApp, ExpandMore ,Link } from '@material-ui/icons';

function Navbar(){
  const user=useSelector(selectUser)
  const [openModal, setOpenModal]=useState(false)
  const [input, setInput]=useState("")
  const [inputUrl, setInputUrl]=useState("")

  const handleQuestion=(e)=>{
    e.preventDefault()
    setOpenModal(false)

    db.collection("question").add({
      question: input,
      imageUrl: inputUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user,
      up: 0,
      down: 0,
    });

    setInput('')
    setInputUrl('')
  };

    return (
      <div className="qHeader">
        <div className="Header_logo">
          <img 
            src="https://th.bing.com/th/id/OIP.-MxYaS4J1SySsb0msl-oMgHaDF?w=350&h=145&c=7&o=5&dpr=1.25&pid=1.7"
            alt=""
            width="100px"
          />
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
        </div>

        <div className="qHeader_input">
          <SearchIcon />
          <input type="text" placeholder="Search and know it" />
        </div>

        <div className="qHeader_Rem">
          <div className="qHeader_avatar">
            <Avatar
              src={
                user.photo
                  ? user.photo
                  : "https://images.unsplash.com/photo-1552168324-d612d77725e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
            />
          </div>
          <ExitToApp onClick={() => auth.signOut()} />
          <LanguageIcon onClick={()=> ("www.google.com")}/>
          <Button onClick={() => setOpenModal(true)}>Add Question</Button>
          <Modal
            isOpen={openModal}
            onRequestClose={() => setOpenModal(false)}
            shouldCloseOnOverlayClick={false}
            style={{
              overlay: {
                width: 700,
                height: 600,
                backgroundColor: "rgba(90 34 34 / 50%)",
                zIndex: "1000",
                top: "10%",
                left: "20%",
              },
            }}
          >
            <div className="modal_title">
              <h5>Add Question</h5>
              <h5>Share Link</h5>
            </div>
            <div className="modal_info">
              <Avatar
                className="avatar"
                src={
                  user.photo
                    ? user.photo
                    : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
                }
              />
              <p>{user.displayName ? user.displayName : user.mail} asked</p>
              <div className="modal_scope">
                <PeopleAltOutlinedIcon />
                <p>Public</p>
                <ExpandMore />
              </div>
            </div>
            <div className="modal_field">
              <Input
                required
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Start your question with WH words etc..."
              />
              <div className="modal_fieldLink">
                <Link />
                <input
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  type="text"
                  placeholder="Optional: include a link that gives context"
                ></input>
              </div>
            </div>
            <div className="modal_buttons">
              <button className="cancel" onClick={() => setOpenModal(false)}>
                Close
              </button>
              <button onClick={handleQuestion} className="add">
                Add Question
              </button>
            </div>
          </Modal>
        </div>
      </div>
    );
}

export default Navbar;
