import React, { useState, useEffect } from "react"
import { getAllCandidates } from "./api/apiCore"

const CandidatesPage = () => {

const [jobsList, setJobsList] = useState()
const [error, setError] = useState(false)

const init = () => {
  getAllCandidates().then((data) => {
    if (data.error) {
      setError(data.error)
    } else {
      setJobsList(data)
    }
  })
}

useEffect(() => {
    init()
  }, [])


  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}
export default CandidatesPage


/*      {jobsList.map((candidates) => (
        <div className="candidate-box">
            <ul>
              <li>{candidates.candidateId}</li>
              <li>{candidates.corporationId}</li>
              <li>{candidates.firstName}</li>
            </ul>
        </div>
      ))}  */
