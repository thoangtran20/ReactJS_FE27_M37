import { useState } from 'react'
import './style.scss'

function AddNewForm(props) {

  const { handleFormSubmit } = props; 

  const [title, setTitle] = useState();
  const [creator, setCreator] = useState();
  const [status, setStatus] = useState();
  const [description, setDescription] = useState();
  
  console.log(creator)
  console.log(title)
  console.log(status)
  console.log(description)

  // e: Synthetic Event
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      creator,
      status,
      description
    }
    handleFormSubmit(newTask);
  }

  return (
    <div className='container'>
      <h1>ADD NEW FORM</h1>
      <form action="" className="form-container">
        <div className="form-row">
          <label htmlFor="" className='form-label'>Title</label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Type title"
            name="title"
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="" className='form-label'>Creator</label>
          <input
            onChange={(e) => {
              setCreator(e.target.value);
            }}
            type="text"
            placeholder="Name of creator"
            name="title"
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="" className='form-label'>Status</label>
          <input
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            type="text"
            placeholder="Status"
            name="title"
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="" className='form-label'>Description</label>
          <input
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
            placeholder="Description Details"
            name="title"
            className="form-input"
          />
        </div>
      </form>
      <div>
        <button onClick={handleSubmit} 
        className="btn-save">
          Save
        </button>
      </div>
    </div>
  )
}

export default AddNewForm
