import ReactModal from 'react-modal';
import { Button } from '../button/button.component';

export function Modal({
  isOpen,
  onClose,
  children,
  title,
  contentAboveForm,
  onSubmit,
  hideSaveButton
}) {
  return (
    <ReactModal isOpen={isOpen} ariaHideApp={false}>
      <div className='mb-12 text-left text-primary'>
        <h2 className='className="text-2xl"'>{title}</h2>
      </div>

      {contentAboveForm ? <>{contentAboveForm}</> : ''}

      {onSubmit ? (
        <form onSubmit={onSubmit}>
          <div>{children}</div>
          <div className='flex justify-end gap-2.5 mt-8'>
            <Button onClick={onClose} type='button' customButton={{ color: 'white', bgColor: 'destroy' }} label='Fechar' />
            {!hideSaveButton && <Button type='submit' customButton={{ color: 'white', bgColor: 'primary' }} label='Salvar' />}
          </div>
        </form>
      ) : (
        <>
          <div>{children}</div>
          <div className='flex justify-end gap-2.5 mt-8'>
            <Button onClick={onClose} label='Fechar' type={'button'} customButton={{ bgColor: 'destroy', color: 'white' }} />
          </div>
        </>
      )}
    </ReactModal>
  );
}