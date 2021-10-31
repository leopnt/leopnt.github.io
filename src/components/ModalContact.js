import "../styles/Modal.css";
import "../styles/Buttons.css";
import closeIcon from "../assets/close-button.png";

const ModalContact = ({ showContact, setShowContact }) => {
  if (!showContact) {
    return null;
  }

  return (
    <div
      className="modal"
      onClick={() => {
        // outside click close modal
        setShowContact(false);
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => {
          // block outside click action
          e.stopPropagation();
        }}
      >
        <button
          className="close-button"
          onClick={(e) => {
            setShowContact(false);
          }}
        >
          <img src={closeIcon} alt="close icon" />
        </button>
        <h3>Contact</h3>
        <h4>📧 E-Mail</h4>
        <a href="mailto:leopnt.dev@gmail.com">leopnt.dev@gmail.com</a>
        <h4>📞 Mobile</h4>
        <a href="tel:+33605310120">+336 05 31 01 20</a>
      </div>
    </div>
  );
};

export default ModalContact;
