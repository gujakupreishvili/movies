
import SignUp from "./Pages/SingUp"
import Content from "./components/Content/Content"
import Header from "./components/header/Header"

function App() {


  return (
    <>
    {<SignUp /> ? <Content /> :<SignUp /> }
    {/* <SignUp />
    <Content /> */}
    </>
  )
}

export default App
