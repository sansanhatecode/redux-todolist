import React, { useContext } from "react";
import { store } from "../redux/store";
import { deleteJob, markAsDone } from "../redux/Action";

export default function TodoItems(props) {
  const jobs = store.getState().todoList
  
  const handleDelete = (id) => {
    store.dispatch(deleteJob(id))
  }

  const handleDone = (id) => {
    store.dispatch(markAsDone(id))
  }

  const {requestEdit} = props;

  return (
    <div>
      <ul>
        {jobs.map((job, index) => {
          return (
            <div>
              {/* done button */}
              <button 
                onClick={(e) => handleDone(job.id)}
              >
                <i className={`
                        fa-solid fa-check
                        `}>
                </i>
              </button>

              <li
                key={index}
              >
                <p
                >{job.name}
                </p>

                {/* edit button */}
                <button
                  onClick={(e) => requestEdit(job.id, job.name)}
                >
                  <i class="fa-solid fa-pencil"></i>
                </button>

                {/* delete button */}
                <button
                  onClick={(e) => handleDelete(job.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </li>

            </div>
          )
        }
        )}
      </ul>
    </div>
  )
}