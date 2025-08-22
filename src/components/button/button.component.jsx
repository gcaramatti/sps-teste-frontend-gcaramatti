export function Button(props) {
  const BG_MAP = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    destroy: 'bg-destroy',
    destroylight: 'bg-destroylight',
    openstatus: 'bg-openstatus',
    openstatuslight: 'bg-openstatuslight',
    inprogress: 'bg-inprogress',
    inprogresslight: 'bg-inprogresslight',
    success: 'bg-success',
    successlight: 'bg-successlight',
    black: 'bg-black',
    disabled: 'bg-disabled',
  };

  const TEXT_MAP = {
    white: 'text-white',
    primary: 'text-primary',
    text: 'text-text',
    black: 'text-black',
  };

  const bgColorToken = props.customButton?.bgColor || props.bgColor;
  const textColorToken = props.customButton?.color || props.textColor;

  const bgClass = BG_MAP[bgColorToken] || bgColorToken || 'bg-primary';
  const textClass = TEXT_MAP[textColorToken] || textColorToken || 'text-white';

  const isDisabled = !!props.disabled;

  return (
    <button
      type={props.type}
      onClick={(e) => {
        if (isDisabled) return;
        props.onClick && props.onClick(e);
      }}
      disabled={isDisabled}
      className={`flex items-center px-[15px] gap-[5px] w-fit ${bgClass} ${textClass} py-2 rounded text-sm font-semibold hover:opacity-90 transition ${isDisabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:opacity-90'} ${props.className ?? ''}`}
    >
      {props.icon && props.icon}
      {props.label ?? 'Acessar'}
    </button>
  );
}