import React, { useState, useEffect } from 'react'
import './portal.css'
import Card from '../card.js/Card';
import { db } from '../../firebase';


const Portal = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    db
      .collection('jobs')
      .onSnapshot(snap => {
        console.log(snap);
        setJobs(snap.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })
        ))
      });

  }, []);

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [qualif, setQualif] = useState('');
  const [passout, setPassout] = useState('');
  const updateName = (e) => {
    setName(e.target.value);
  }
  const updatePosition = (e) => {
    setPosition(e.target.value);
  }
  const updateQualif = (e) => {
    setQualif(e.target.value);
  }
  const updatePassout = (e) => {
    setPassout(e.target.value);
  }
  const submit = (e) => {
    e.preventDefault();
    db
      .collection('candidates')
      .doc()
      .set({
        Name: name,
        Position: position,
        Qualif: qualif,
        Passout: passout,
      });
    console.log("pushed to db");
    setName("");
    setPosition("");
    setQualif("");
    setPassout("");
  }


  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid  navbar-fixed">
            <a class="navbar-brand" href="admin">Admin Dashboard</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </div>

      <div class="head">
        <h1>Job Portal</h1>
        <p>Best jobs available matching your skills</p>
      </div>
      
      <div class="cnt">
        <div className='jobs '>
          {jobs.map((job, index) => {
            console.log(job.data, index);
            return <Card position={job.data.position} companyName={job.data.company} jobDesc={job.data.jobDesc} ctc={job.data.ctc} />;
          })}
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Apply for a Job</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="inp">
                <label for="recipient-name" class="col-form-label">Your Name</label>
                <input type="text" class="form-control" id="recipient-name" onChange={updateName} value={name} />
              </div>
              <div class="inp">
                <label for="message-text" class="col-form-label" >Apply Position</label>
                <input class="form-control" id="message-text" onChange={updatePosition} value={position} />
              </div>
              <div class="inp">
                <label for="message-text" class="col-form-label" >Qualification</label>
                <input class="form-control" id="message-text" onChange={updateQualif} value={qualif} />
              </div>
              <div class="inp">
                <label for="message-text" class="col-form-label" >Passout Year</label>
                <input class="form-control" id="message-text" onChange={updatePassout} value={passout} />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary" onClick={submit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Portal