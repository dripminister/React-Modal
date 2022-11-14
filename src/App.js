import { useState } from "react"
import Modal from "./Modal"


function App() {

  const [showModal, setShowModal] = useState(false)

  return (
    <div className="App">
      <h1>Test Modal</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit alias dicta quibusdam cumque ipsa ipsum reiciendis animi, officia provident veniam quis delectus minima earum suscipit ea, beatae vitae ipsam nemo.</p>
      <p>Alias, architecto sapiente nostrum id, sed explicabo numquam aspernatur ratione qui excepturi repellat porro culpa molestiae? Culpa dolorem commodi cupiditate, eos deleniti similique repellendus nam velit natus a soluta et.</p>
      <p>Fugiat ratione impedit officiis? Eligendi sapiente culpa tenetur esse quo reiciendis illum vero nisi ullam consequatur illo molestiae, nihil eaque. Esse asperiores tenetur natus! Quo asperiores molestias sed assumenda alias.</p>
      <p>Sequi quo animi, nostrum laboriosam veritatis consequatur. Eos cumque unde porro explicabo provident, possimus alias magni pariatur quis consequuntur voluptatum? Debitis necessitatibus facilis fugiat repudiandae nobis neque nam, vel odio?</p>
      <button className="button open-button" onClick={() => setShowModal(true)}>open modal</button>
      {showModal && <Modal setShowModal={setShowModal}/>}
    </div>
  )
}

export default App