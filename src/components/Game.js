import React, { useState } from "react";
import Board from "./Board";
import GameChat from "./GameChat";
// import { connect } from "react-redux";
// import { getUser } from "../Actions/actions";
import Modal from 'react-modal';
// import { Modal } from 'react-responsive-modal';
import "../styles/tictactoe.css";

// class Game extends Component {

//   state = {

//     open: false
//   }

//   onOpenModal = () => {
//     this.setState({ open: true });
//   };

//   onCloseModal = () => {
//     this.setState({ open: false });
//   };

//   render() {

//     const {open} = this.state
//     return (
//       <>
//         <div >
//             <Board /> 

//             <button onClick={this.onOpenModal}>Game Chat</button>

//             <Modal open={open} onClose={this.onCloseModal} center>
//                 <GameChat/>
//             </Modal> 

//         </div>

//       </>
//     );
//   }
// }
// const mSTP = (state) => ({ user: state });

// export default connect(mSTP, { getUser })(Game);
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    // right                 : '50%',
    // bottom                : '50%',
    // marginRight           : '-50%',
    marginLeft            :'17%',
    
    transform             : 'translate(-210%, -30%)',
    backgroundColor       : 'white'
  }
};


function Game (){
  const [modalIsOpen,setModalIsOpen] = useState(false);

  const setModalTrue =()=>{
    setModalIsOpen(true)
  }

  const setModalFalse =()=>{
    setModalIsOpen(false)
  }

  return(
    <div>
      <div><Board /> </div>
      <button className='gameChatBTN'onClick={setModalTrue}>Game Chat</button>
      <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={true} onRequestClose={()=> setModalIsOpen(false)} style={customStyles}>
          <button onClick={setModalFalse}>x</button>
          <GameChat/>
      </Modal>

    </div>
  )
}

export default Game;
