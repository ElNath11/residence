// Layout component that triggers the modal
class Layout extends React.Component {
  state = {
    showModal: false,
  }
  
  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <div>
        { /* Modal trigger */ }
        <span
          onClick={() => this.toggleModal()}
          className="trigger-btn"
        >
          Click me!
        </span>
        
        { /* Show modal with custom title + message */ }
        { this.state.showModal && (
          <Modal
            toggleModal={this.toggleModal}
            title="This is a pop-up modal!"
            message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum illum ducimus tempora voluptas excepturi asperiores, maxime facere sint. In obcaecati eum ex delectus totam fuga corporis vero cupiditate distinctio vitae."
          />
        )}
      </div>
    )
  }
}

// Modal component
const Modal = ({ title, toggleModal, message }) => (
  <div className="modal-background">
    { /* Modal box */ }
    <div className="modal-box">
      { /* Heading */ }
      <div className="heading-modal">
        <h1 className="title-modal">{title}</h1>
        <i
          onClick={() => toggleModal()}
          className="fas fa-times closeBtn-modal">
        </i>
      </div>
      
      { /* Content */ }
      <div className="content-modal">
        {message}
      </div>
    </div>
  </div>
)

ReactDOM.render(<Layout />, document.getElementById("root"))