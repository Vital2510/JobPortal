import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Position</h5>
            <p class="card-text">{props.position}</p>
            <h6 class="company-name">Company Name</h6>
            <p class="card-text">{props.companyName}</p>
            <h6 class="skills-required">Job Description :</h6>
            <p class="SR">{props.jobDesc}</p>
            <h6 class="Job-Location">Job-Location :</h6>
            <p class="JL">Hyderabad</p>
            <h6 class="CTC">CTC :</h6>
            <p class="ctc">{props.ctc}</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
              data-whatever="@fat">Apply Now</button>
          </div>
        </div>
   
  )
}

export default Card