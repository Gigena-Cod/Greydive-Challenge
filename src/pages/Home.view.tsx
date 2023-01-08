import FormComponent from "../components/Form.component"

const HomeView = () => {
    return (
        <div className="background p-8 h-screen home__view">
        <div className="home__container">
          <FormComponent/>
        </div>
      </div>
    )
}

export default HomeView