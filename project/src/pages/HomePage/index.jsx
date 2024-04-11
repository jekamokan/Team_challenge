import MainSlider from "../../components/MainSlider"
import Container from '../../components/Container'
import './style.css'
import BestSellers from "../../components/BestSellers"


const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__slider">
        <MainSlider />
      </div>
      <Container>
        <BestSellers/>
      </Container>
    </div>
  )
}

export default HomePage