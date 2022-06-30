import Modal from "react-modal";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal(props: NewTransactionModalProps) {
  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
    >
      <h2>Cadastrar transação</h2>
    </Modal>
  );
}