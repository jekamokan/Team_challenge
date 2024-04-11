import MainSlider from "../../components/MainSlider"
import Container from '../../components/Container'
import './style.css'


const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__slider">
        <MainSlider />
      </div>
      <Container>

      </Container>
    </div>
  )
}

export default HomePage