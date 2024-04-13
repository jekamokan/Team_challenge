import MainSlider from "../../components/MainSlider"
import Container from '../../components/Container'
import './style.css'
import BestSellers from "../../components/BestSellers"
import ForBoth from "../../components/ForBoth"
import Sale from "../../components/Sale"
import Form from "../../components/Form"


const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__slider">
        <MainSlider />
      </div>
      <Container>
        <BestSellers/>
        <ForBoth/>
        <Sale/>
        <Form/>
      </Container>
    </div>
  )
}

export default HomePage