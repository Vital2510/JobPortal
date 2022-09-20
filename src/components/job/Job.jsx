import React from 'react'
import './job.css'

function Job(props) {
    return (
        <div className='job'>
            <div>
                {props.sno}
            </div>
            <div>
                {props.company}
            </div>
            <div>
                {props.position}
            </div>
            <div>
                {props.ctc}
            </div>
        </div>
    )
}

export default Job;