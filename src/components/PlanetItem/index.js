import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  return (
    <div className="slider-cont">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="title">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}
export default PlanetItem
