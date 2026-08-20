import { Link } from "react-router-dom"

const Dropdown = ({ data, status, isActivity }) => {
  return (
    <div className={`${status ? "dropdown active" : "dropdown"} ${isActivity ? "activity-dropdown" : ""}`}>
      <ul>
        {data.map(item => (
          <li key={item.id} className={item.subItems ? "has-sub" : ""}>
            {item.subItems ? (
              <>
                <Link to={item.link} className="dropdown-title">{item.title}</Link>
                <ul className="sub-menu">
                  {item.subItems.map((sub, index) => (
                    <li key={index}><Link to={sub.link}>{sub.title}</Link></li>
                  ))}
                </ul>
              </>
            ) : (
              <Link to={item.link}>{item.title}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown