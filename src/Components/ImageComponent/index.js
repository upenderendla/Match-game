import './index.css'

const ImageComponent = props => {
  const {eachImage, matchThumbnailWithRandomImage} = props
  const {thumbnailUrl, imageUrl} = eachImage
  const onClickingThumbnail = () => {
    matchThumbnailWithRandomImage(imageUrl)
  }
  return (
    <li className="li-image-container">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickingThumbnail}
      >
        <img src={thumbnailUrl} className="each-image" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageComponent
