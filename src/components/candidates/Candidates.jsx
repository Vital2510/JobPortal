import React, { useState, useEffect } from 'react'
import Job from '../job/Job';
import { db } from '../../firebase';
import '../admin/admin.css';
import { Link, useHistory } from "react-router-dom";

const Candidates = () => {
    const [candidates, setCandidates] = useState([]);
    useEffect(() => {
        db
            .collection('candidates')
            .onSnapshot(snap => {
                console.log(snap);
                setCandidates(snap.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })
                ))
            });

    }, []);

    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid  navbar-fixed">
                        <a class="navbar-brand" href="admin">Admin Dashboard</a>
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
                <div className='spl'>
                    <div>
                        Name of Candidate
                    </div>
                    <div>
                        Passout Year
                    </div>
                    <div>
                        Position
                    </div>
                    <div>
                        Qualifications
                    </div>
                </div>
                <div className='candidates'>
                    {candidates.map((cad, index) => {
                        console.log(cad.data, index);
                        return <Job sno={cad.data.Name} company={cad.data.Passout} position={cad.data.Position} ctc={cad.data.Qualif} />;
                    })}
                </div>

            </div>


        </div>
    )
}

export default Candidates