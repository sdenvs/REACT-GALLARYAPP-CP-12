// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {details, changeActive, isActive} = props
  const {thumbnailUrl, id, thumbnailAltText} = details

  const triggerActive = () => {
    changeActive(id)
  }

  return (
    <li className={`thumbnailItem ${isActive ? '' : 'opacityImg'}`}>
      <button>
        <img
          onClick={triggerActive}
          className="thumbnailImage"
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
