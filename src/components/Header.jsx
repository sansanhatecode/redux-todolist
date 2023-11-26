import React, { useState, useRef, useImperativeHandle, } from "react";
import { store } from "../redux/store";
import { addJob, editJob, markAllAsDone } from "../redux/Action";

const Header = React.forwardRef((props, ref) => {
  const [currentJob, setCurrentJob] = useState('');
  const inputRef = useRef();
  const editId = useRef(null);
  const jobs = store.getState().todoList
  console.log(jobs)

  // Focus vao the input
  useImperativeHandle(ref, () => ({
    changeUpdate(id) {
      editId.current = id;
      const jobToEdit = jobs.find(job => job.id === id)
      setCurrentJob(jobToEdit.name)
      inputRef.current.focus();
    },
  }));

  const onChangeInput = (e) => {
    const { value } = e.target;
    setCurrentJob(value);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (currentJob.trim() !== "") {
        const addItem = currentJob;
        if(editId.current) handleEdit(editId.current, addItem)
        else handleAdd(addItem);
        setCurrentJob('');
      }

    }
  }

  const handleEdit = (editId, addItem) => {
    store.dispatch(editJob(editId, addItem))
  }

  const markAllAsDone = () => {
    let jobsCheck = jobs;
    const isNotDone = jobsCheck.some(job => !(job.done))
    store.dispatch(markAllAsDone(isNotDone))
  }

  const handleAdd = (addItem) => {
    store.dispatch(addJob(addItem))
  }

  return (
    <div>
      <button
      onClick={markAllAsDone}
      >
        <i className={`fa-solid fa-chevron-down`}></i>
      </button>
      <input
        type="text"
        ref={inputRef}
        value={currentJob}
        placeholder="What needs to be done?"
        onChange={onChangeInput}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
})

export default Header;
