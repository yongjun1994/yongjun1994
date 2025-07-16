type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, title, children }: Props) {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="py-4">{children}</div>
        <div className="modal-action">
          <button className="btn btn-sm btn-error" onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}