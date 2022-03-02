import { useState } from "react";

export const useModal = (initialValue = false) => {
    const [ isOpenModal, setIsOpen ] = useState(initialValue);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return [ isOpenModal, openModal, closeModal ];
}