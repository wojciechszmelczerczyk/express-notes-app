import "../custom.css";
import { Container } from "reactstrap";
import { getTokenOrRefresh } from "../tokenUtil";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import NoteService from "../services/noteService.js";
import React from "react";
import Buffer from "../components/Buffer";
import axios from "axios";
const speechsdk = require("microsoft-cognitiveservices-speech-sdk");

export default function SaveNoteComponent() {
  const [text, setText] = useState("Listening on changes...");
  const [redirect, setRedirect] = useState(false);
  const [recognizingText, setRecognizingText] = useState("");
  let [noteTitle, setNoteTitle] = useState("");
  let [isListening, setListening] = useState(false);
  let [stopRecognizing, setStopRecognizing] = React.useState(() => noop);

  function noop() {}

  let at = localStorage.getItem("at");

  useEffect(() => {
    // // check for valid speech key/region
    const tokenRes = getTokenOrRefresh().then((res) => res);
    if (tokenRes.authToken === null) {
      setText(`FATAL_ERROR: ${tokenRes.error}`);
    }

    // get current note title
    let noteId = localStorage.getItem("note_id");

    axios
      .get(`http://localhost:3000/note/${noteId}`, {
        headers: { Authorization: `Bearer ${at}` },
        withCredentials: true,
      })
      .then((res) => setNoteTitle(res["data"]["title"]));
  }, []);

  async function createRecognizer() {
    const tokenObj = await getTokenOrRefresh();
    const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(
      tokenObj.authToken,
      tokenObj.region
    );
    const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
    const recognizer = new speechsdk.SpeechRecognizer(
      speechConfig,
      audioConfig
    );
    return recognizer;
  }

  async function saveNote() {
    const noteId = localStorage.getItem("note_id");
    const savedNote = await NoteService.saveNote(at, text, noteId);
    if (savedNote) {
      localStorage.removeItem("note_id");
      setRedirect(true);
    } else {
      // some handler
    }
  }

  function handleText(e) {
    console.log(e.target.value);
  }

  async function mic() {
    if (!isListening) {
      setText("speak into your microphone...");
      let text = "";
      const recognizer = await createRecognizer();
      recognizer.startContinuousRecognitionAsync(
        () => {
          console.log("start listening");
          document.querySelector(".fa-microphone").className =
            "fas fa-microphone-slash";

          // toggle listening to true
          setListening(true);
        },
        (err) => {
          console.log(err);
        }
      );

      recognizer.recognizing = (s, e) => {
        setRecognizingText(e.result.text);
      };

      recognizer.recognized = (s, e) => {
        setRecognizingText("");
        if (e.result.reason === speechsdk.ResultReason.RecognizedSpeech) {
          text += e.result.text;
          console.log(text);
          setText(text);
        } else if (e.result.reason === speechsdk.ResultReason.NoMatch) {
          setText(text);
        }
      };

      recognizer.canceled = (s, e) => {
        if (e.reason === speechsdk.CancellationReason.Error) {
          console.log(`"CANCELED: ErrorCode=${e.errorCode}`);
          console.log(`"CANCELED: ErrorDetails=${e.errorDetails}`);
          console.log(
            "CANCELED: Did you set the speech resource key and region values?"
          );
        }
      };

      setStopRecognizing(() => () => {
        recognizer.stopContinuousRecognitionAsync();
        recognizer.close();
      });
    } else {
      stopRecognizing();
      setListening(false);
      document.querySelector(".fa-microphone-slash").className =
        "fas fa-microphone fa-lg mr-2";
      setStopRecognizing(() => noop);
    }
  }
  return (
    <Container className='app-container'>
      {!redirect ? (
        <>
          <h1 className='display-4 mb-3'>{noteTitle}</h1>

          <div className='row main-container'>
            <div className='col-6'>
              <i className='fas fa-microphone fa-lg mr-2' onClick={mic}></i>
              Convert speech to text from your mic.
            </div>

            <textarea rows='10' cols='50' value={text} onChange={handleText} />
            <Buffer text={recognizingText} />
          </div>
          <button onClick={saveNote}>Save note</button>
        </>
      ) : (
        <Navigate to='/' />
      )}
    </Container>
  );
}
