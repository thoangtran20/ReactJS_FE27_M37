import './style.scss'

function AddNewForm() {
  return (
    <div className="AddNewForm">
      <input type="text" placeholder="Input todo item..." className="form-input" />
      <button className="btn-submit">Submit</button>
    </div>
  )
}

export default AddNewForm
