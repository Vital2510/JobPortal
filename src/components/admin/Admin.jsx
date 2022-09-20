import React, { useState, useEffect } from 'react'
import './admin.css'
import Job from '../job/Job'
import { db } from '../../firebase'
import { Link, useHistory } from "react-router-dom";

const Admin = () => {
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


    let i = 0;
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [jobDesc, setJob] = useState('');
    const [ctc, setCTC] = useState('');
    const updateCompany = (e) => {
        setCompany(e.target.value);
    }
    const updatePosition = (e) => {
        setPosition(e.target.value);
    }
    const updateJob = (e) => {
        setJob(e.target.value);
    }
    const updateCtc = (e) => {
        setCTC(e.target.value);
    }
    const submit = async (e) => {
        e.preventDefault();
        db
            .collection('jobs')
            .doc()
            .set({
                company: company,
                position: position,
                jobDesc: jobDesc,
                ctc: ctc
            });
        console.log("pushed to db");
        setCompany("");
        setPosition("");
        setJob("");
        setCTC("");
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

            <div class="sidebar">
                <Link to="/admin">
                    <div>Jobs</div>
                </Link>
                
                <Link to={"/candidate"}>
                    <div>Candidates applied</div>
                </Link>
                <Link to={"/portal"}>
                    Portal
                </Link>
            </div>

            <div class="content">
                <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Post Job
                    </a>
                </p>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        <div class="mb-3">
                            <label for="exampleInputCompany" class="form-label">Company Name</label>
                            <input type="text" class="form-control" id="exampleInputCompany" onChange={updateCompany} value={company} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPosition" class="form-label">Position</label>
                            <input type="text" class="form-control" id="exampleInputPosition" onChange={updatePosition} value={position} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputJobDesc" class="form-label">Job Description</label>
                            <textarea type="text" class="form-control" id="exampleInputJobDesc" onChange={updateJob} value={jobDesc} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputCTC" class="form-label">CTC</label>
                            <input type="text" class="form-control" id="exampleInputCTC" onChange={updateCtc} value={ctc} />
                        </div>
                        <div><button type="submit" class="btn btn-primary" onClick={submit}>Submit</button ></div>
                    </div>

                </div>

                <div className='spl'>
                    <div>
                        S.No
                    </div>
                    <div>
                        Company
                    </div>
                    <div>
                        Position
                    </div>
                    <div>
                        CTC
                    </div>
                </div><hr />

                <div>
                    {jobs.map((job, index) => {
                        console.log(job.data, index);
                        return <Job sno={index + 1} position={job.data.position} company={job.data.company} ctc={job.data.ctc} />;
                    })}
                </div>


            </div>
        </div>

    )
}

export default Admin