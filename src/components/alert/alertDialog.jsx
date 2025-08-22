import React from 'react';
import ReactModal from 'react-modal';
import { Button } from '../button/button.component';

export function AlertDialog({ isOpen, title, message, onCancel, onConfirm }) {
  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      contentLabel={title || 'Alert dialog'}
      onRequestClose={onCancel}
      overlayClassName={"fixed inset-0 bg-black/40 flex items-center justify-center z-50"}
      className={"w-fit px-[100px] mx-4 bg-white p-6 rounded shadow-lg"}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
      </div>
      <div className="mb-6 text-sm text-text">
        {message}
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" onClick={onCancel} customButton={{ bgColor: 'secondary', color: 'text' }} label="Cancelar" />
        <Button type="button" onClick={onConfirm} customButton={{ bgColor: 'destroy', color: 'white' }} label="Confirmar" />
      </div>
    </ReactModal>
  );
}

export default AlertDialog;
