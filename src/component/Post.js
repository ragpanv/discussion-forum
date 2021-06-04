import { Avatar, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import '../css/Post.css';
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOneOutlined";
import {LibraryBooks, Link} from "@material-ui/icons";
import Modal from 'react-modal'
import { selectQuestionId, selectQuestionName, setQuestionInfo } from '../features/questionSlice';
import { useDispatch, useSelector } from 'react-redux';
import SaveIcon from "@material-ui/icons/Save";
import { makeStyles } from "@material-ui/core/styles";
import db from '../firebase';
import firebase from 'firebase'
import { selectUser } from '../features/userSlice';
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();
mic.continuous = true
mic.interimResults=true
mic.lang='en-us'
Modal.setAppElement("#root")

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Post({Id, question, image, timestamp, forumUser}){
  const classes = useStyles();

  const dispatch=useDispatch()
  const user=useSelector(selectUser)
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const questionId =useSelector(selectQuestionId);
  const questionName=useSelector(selectQuestionName)
  const [answer, setAnswer]=useState('')
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [isListening, setIsListening] = useState(false);


  const [getAnswers, setGetAnswer]=useState([])
  useEffect(()=>{
    if(questionId){
      db.collection('question')
      .doc(questionId)
      .collection('answers')
      .orderBy('timestamp','desc')
      .onSnapshot((snapshot)=>
        setGetAnswer(
          snapshot.docs.map((doc)=>({id: doc.id, answers: doc.data()}))

        )
      );
    }
  },[questionId]);


  function handleUpvote(qid){
    console.log(qid)
   if(qid){
      const inc=firebase.firestore.FieldValue.increment(1);
      db.collection('question').doc(qid).update({up: inc});
     db.collection("question")
       .doc(qid)
       .get()
       .then((doc) => {
         console.log(doc.data().up);
       });
      }else{
        console.log('check upvote')
      }
  }

  
  function handleDownvote( qid) {
    console.log( qid);
    if(qid){
    const inc = firebase.firestore.FieldValue.increment(1);
    db.collection("question").doc(qid)
      .update({ down: inc });
    db.collection("question")
      .doc(qid)
      .get()
      .then((doc) => {
        console.log(doc.data().down); 
      });
    }else{console.log('check down vote')}
  }

  useEffect(()=>{
    handleinput()
  },[isListening])

  const  handleinput=()=>{
    console.log('hi')
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setAnswer(transcript);
      document.getElementsByClassName("text_area").innerHTML=transcript;
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  }

  const handleAnswer=(e)=>{
    e.preventDefault()
    
    if(questionId){
      db.collection("question").doc(questionId).collection("answers").add({
        user: user,
        web: websiteUrl,
        img: imgUrl,
        pdf: pdfUrl,
        answer: answer,
        questionId: questionId,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      console.log(questionId, questionName);
    }
    
    setAnswer('')
    setIsModalOpen(false)
  }


    return (
      
      <div
        className="post"
        onClick={() =>
          dispatch(
            setQuestionInfo({
              questionId: Id,
              questionName: question,
            })
          )
        }
      >
        <div className="post_info">
          <Avatar src={forumUser.photo} />
          <h5>
            {forumUser.displayName ? forumUser.displayName : forumUser.email}
          </h5>
          <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
        <div className="post_body">
          <div className="post_question">
            <p>{question}</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="post_btnAnswer"
            >
              Answer
            </button>
            <Modal
              isOpen={IsModalOpen}
              onRequestClose={() => setIsModalOpen(false)}
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
              <div className="modal_question">
                <h1>{question}</h1>
                <p>
                  asked by{" "}
                  <span className="name">
                    {forumUser.displayName
                      ? forumUser.displayName
                      : forumUser.email}
                  </span>{" "}
                  on{" "}
                  <span className="name">
                    {new Date(timestamp?.toDate()).toLocaleString()}
                  </span>
                </p>
              </div>

              <div className="modal_answer">
                <textarea
                  className="text_area"
                  required
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Enter your answer"
                  type="text"
                />
              </div>
              <h2>
                Speak the answer
                {isListening ? <span>🎙️</span> : <span>🛑</span>}
                <Button
                  variant="contained"
                  color="default"
                  className={classes.button}
                  onClick={() => setIsListening((prevState) => !prevState)}
                >
                  Start/Stop
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={() => handleinput()}
                >
                  Save{<SaveIcon />}
                </Button>{" "}
              </h2>

              <div className="links">
                <div className="modal_webLink">
                  <Link />
                  <input
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    type="text"
                    placeholder="Optional: include a website link to justify your answer"
                  ></input>
                </div>
                <div className="modal_webLink">
                  <Link />
                  <input
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                    type="text"
                    placeholder="Optional: include a image link to justify your answer"
                  ></input>
                </div>
                <div className="modal_webLink">
                  <Link />
                  <input
                    value={pdfUrl}
                    onChange={(e) => setPdfUrl(e.target.value)}
                    type="text"
                    placeholder="Optional: include a pdf / drive link to justify your answer"
                  ></input>
                </div>
              </div>

              <div className="modal_button">
                <button
                  className="cancel"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button onClick={handleAnswer} className="add">
                  Add Answer
                </button>
              </div>
            </Modal>
          </div>
          <div className="post_answer">
            {getAnswers.map(({ id, answers }) => (
              <p
                key={id}
                style={{ position: "relative", paddingBottom: "5px" }}
              >
                {Id === answers.questionId ? (
                  <div>
                    <span>
                      {answers.answer}
                      <span
                        style={{
                          display: "flex",
                          float: "right",
                          color: "#b92b27",
                        }}
                      >
                        {answers.user.displayName
                          ? answers.user.displayName
                          : answers.user.email}{" "}
                        on{" "}
                        {new Date(answers.timestamp?.toDate()).toLocaleString()}
                      </span>
                      <br />
                      <br />
                      <span
                        style={{
                          color: "gray",
                          fontSize: "small",
                          right: "0px",
                        }}
                      >
                        {answers.img === "" ? (
                          ""
                        ) : (
                          <img
                            className="img_middle"
                            src={answers.img}
                            width="300px"
                            height="200px"
                            alt=""
                          />
                        )}

                        {answers.web === "" ? (
                          ""
                        ) : (
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={answers.web}
                            className="a_style"
                          >
                            WEBSITE LINK
                            <br />
                          </a>
                        )}

                        {answers.pdf === "" ? (
                          ""
                        ) : (
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={answers.pdf}
                            className="a_style"
                          >
                            PDF LINK
                          </a>
                        )}
                        <br></br>
                      </span>
                    </span>
                    <hr style={{ color: "red", bold: "5px" }}></hr>
                  </div>
                ) : (
                  ""
                )}
              </p>
            ))}
            <div className="post_footer">
              <div className="post_footerAction">
                <ArrowUpwardOutlinedIcon
                  onClick={() => {
                    handleUpvote(questionId);
                  }}
                />
                <div id="upvote"></div>
                <ArrowDownwardOutlinedIcon
                  onClick={() => {
                    handleDownvote(questionId);
                  }}
                />
                <div id="downvote"></div>
              </div>
              <RepeatOutlinedIcon />
              {/* <ChatBubbleOutlinedIcon />*/}
              <div className="post_footerLeft">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://ndl.iitkgp.ac.in/"
                >
                  {" "}
                  <LibraryBooks />
                </a>
              </div>
            </div>
            <br></br>
          </div>
          {image === "" ? (
            ""
          ) : (
            <img src={image} width="300px" height="200px" alt="" />
          )}
        </div>
      </div>
    );
}

export default Post;
