import { Modal } from '../Modal/Modal';
import './ConfirmDeleteModal.less';

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  campaignName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDeleteModal = ({
  isOpen,
  campaignName,
  onConfirm,
  onCancel,
}: ConfirmDeleteModalProps) => (
  <Modal isOpen={isOpen} onClose={onCancel}>
    <h2 className="confirm-delete-modal__title">Usuń kampanię</h2>
    <p className="confirm-delete-modal__message">
      Czy na pewno chcesz usunąć kampanię <strong>{campaignName}</strong>?
      Budżet zostanie zwrócony na konto Emerald.
    </p>
    <div className="confirm-delete-modal__actions">
      <button className="confirm-delete-modal__btn--confirm" onClick={onConfirm}>
        Usuń
      </button>
      <button className="confirm-delete-modal__btn--cancel" onClick={onCancel}>
        Anuluj
      </button>
    </div>
  </Modal>
);
