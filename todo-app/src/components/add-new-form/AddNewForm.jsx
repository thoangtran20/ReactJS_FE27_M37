import './style.scss'

function AddNewForm() {
  return (
    <div className='container'>
      <h1>ADD NEW FORM</h1>
      <form action="" className="form-container">
        <div className="form-row">
          <label htmlFor="" className='form-label'>Title</label>
          <input
            type="text"
            placeholder="Type title"
            name="title"
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="" className='form-label'>Creator</label>
          <input
            type="text"
            placeholder="Name of creator"
            name="title"
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="" className='form-label'>Description</label>
          <input
            type="text"
            placeholder="Description Details"
            name="title"
            className="form-input"
          />
        </div>
      </form>
      <div>
        <button className="btn-save">Save</button>
      </div>
    </div>
  )
}

export default AddNewForm
