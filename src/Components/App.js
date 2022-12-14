import React, {useEffect, useState} from "react"
import SubmissionForm from "./SubmissionForm"
import Navbar from  "./Navbar"
import Home from "./Home"
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

  function handleDeleteSubmission(deletedSubmission){
    const remainingSubmissions = submittedData.filter((q) => q.id !== deletedSubmission.id)
    setSubmittedData(remainingSubmissions)
  }

  return (
    <div className="App">
      <Navbar />
    <Switch>
    <Route exact path="/submissionform">
      <SubmissionForm submittedData={submittedData} putOnPage={putOnPage} handleDeleteSubmission={handleDeleteSubmission}/>
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
