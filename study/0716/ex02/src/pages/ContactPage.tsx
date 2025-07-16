import { useState } from "react";
import Button from "../theme/daisyui/Button";
import Input from "../theme/daisyui/Input";
import Modal from "../theme/daisyui/Modal";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen p-6 flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold mb-4">✉️ 문의하기</h1>

      <Input label="이름" value={name} onChange={setName} placeholder="홍길동" />
      <Input label="메시지" value={message} onChange={setMessage} placeholder="내용을 입력하세요" />

      <Button onClick={() => setModalOpen(true)} className="mt-4">
        제출하기
      </Button>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="확인">
        <p>이름: <strong>{name}</strong></p>
        <p>메시지: <strong>{message}</strong></p>
      </Modal>
    </div>
  );
}