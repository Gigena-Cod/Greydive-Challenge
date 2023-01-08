import FormComponent from "../components/Form.component"

const HomeView = () => {
  return (
    <div className="background p-8 h-screen home__view">
      <div className="mt-12 home__container">
        <FormComponent />
      </div>
    </div>
  )
}

export default HomeView