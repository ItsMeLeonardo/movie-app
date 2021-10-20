import './style.css'

export default function Stats({ title, data }) {
  return (
    <div className="statsContainer">
      <header className="statsTitle" >{title}</header>
      <p className="statsDataContent">
        <i className={`statsIcon ${title.toLowerCase()}`}></i>
        <span className="statsData">{data}</span>
      </p>
    </div>
  )
}