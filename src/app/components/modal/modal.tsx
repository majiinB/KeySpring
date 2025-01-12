import styles from './modal.module.css'
import { Krub } from 'next/font/google'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?:string,
  message?:string
}

const krub = Krub({
    subsets: ['latin'],
    weight: '500',
});

export default function Modal({ isOpen, onClose, title, message}: ModalProps){
    if(!isOpen) return null

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
          <div className={styles.modalBorder}>
            <div className={`${styles.modalContent} ${krub.className}`} onClick={(e) => e.stopPropagation()}>
              <h2>{title}</h2>
              <p>{message}</p>
              <button className={krub.className} onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      );
}