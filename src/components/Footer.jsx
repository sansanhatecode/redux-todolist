import React from "react";
import { store } from "../redux/store";

export default function Footer () {
    const jobs = store.getState().todoList
    const count = jobs.reduce((acc, job) => {
        if (!(job.done)) {
          return acc + 1;
        }
        return acc;
      }, 0)
    return (
        <div>
          {/* count undone */}
          <div>
            <p>{count} items left</p>
          </div>
          <div>
            <button
            //   onClick={(e) => handleAllButtonClick()}
            >
              All
            </button>
            <button
            //   onClick={(e) => handleActiveButtonClick()}
            >
              Active
            </button>
            <button
            //   onClick={(e) => handleCompletedButtonClick()}
            >
              Completed
            </button>
          </div>
          <button
            // onClick={handleClearButtonClick}
          >
            Clear Completed
          </button>
        </div>
      )
}