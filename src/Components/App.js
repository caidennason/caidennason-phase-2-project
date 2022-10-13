import React, {useEffect, useState} from "react"
import SubmissionForm from "./SubmissionForm"
import Navbar from  "./Navbar"
import WinoaPhotoList from "./WinoaPhotoList"
import WinoaPhotoItem from "./WinoaPhotoItem"
import Home from "./Home"
import RateWinoaPhotos from "./RateWinoaPhotos"
import About from "./About"
import { Route, Switch } from "react-router-dom";

// Where does state live?
  // App will control state for WinoaPhotoItem and SubmissionForm
  // Submission form will have WinoaPhotoItem and WinoaPhotoList???? Or should I just put it all in App
  // WinoaPhotoList will have need access to WinoaPhotoItem state
  // WinoaPhotoItem and WinoaPhotoList will need access to SubmissionForm state
  // Navbar -- refresh on that

function App() {

  const [submittedData, setSubmittedData] = useState([])

  function putOnPage(newItem){
    setSubmittedData([...submittedData, newItem])
}

  // GET REQUEST

  useEffect(() => {
    fetch('http://localhost:3000/winoaResponses')
    .then(res => res.json())
    .then(winoaAnswers => (setSubmittedData(winoaAnswers)))
  }, [])

  // DELETE REQUEST HANDLER

  function handleDeleteQuestion(deletedQuestion){
    const remainingQuestions = deletedQuestion.filter((q) => q.id !== deletedQuestion.id)
    console.log(submittedData)
    setSubmittedData(remainingQuestions)
  }

  return (
    <div className="App">
      <Navbar />
    <Switch>
    <Route exact path="/submissionform">
      <SubmissionForm submittedData={submittedData}putOnPage={putOnPage} handleDeleteQuestion={handleDeleteQuestion}/>
    </Route>
    <Route exact path="about">
      <About />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
    </Switch>
    </div>
  );
}

export default App;