import React, {useEffect, useState} from "react"
import SubmissionForm from "./SubmissionForm"
import Navbar from  "./Navbar"
import WinoaPhotoList from "./WinoaPhotoList"
import WinoaPhotoItem from "./WinoaPhotoItem"
import Home from "./Home"
import WinoaFoodRater from "./WinoaFoodRater"
import About from "./About"
import { Route, Switch } from "react-router-dom";

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
    const remainingQuestions = submittedData.filter((q) => q.id !== deletedQuestion.id)
    setSubmittedData(remainingQuestions)
  }

  return (
    <div className="App">
      <Navbar />
    <Switch>
    <Route exact path="/submissionform">
      <SubmissionForm submittedData={submittedData}putOnPage={putOnPage} handleDeleteQuestion={handleDeleteQuestion}/>
    </Route>
    <Route exact path="/about">
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
