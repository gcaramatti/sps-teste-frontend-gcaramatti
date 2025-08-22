import { Controller } from "react-hook-form";

export function InputText(props) {
    return (
        <div className="w-full flex flex-col items-start">
            <label htmlFor={props.htmlForName} className="text-sm block mb-1 text-gray-700">{props.label}</label>
            <Controller
                name={props.name}
                control={props.control}
                defaultValue={props.defaultValue}
                render={({ field: { onChange, value } }) => (
                <input
                    name={props.name}
                    autoComplete="off"
                    aria-autocomplete="none"
                    disabled={props?.disabled}
                    id={props.htmlForName}
                    type={props.type}
                    placeholder={props.placeholder}
                    value={value}
                    onChange={(e) => {
                        onChange(e);
                    }}
                    onBlur={props?.onBlur}
                    className={`w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                            props?.disabled ? "bg-[#f2f2f2] text-disabled cursor-not-allowed" : ""
                        }`}
                />)}
            />

            <div>
                {(props?.errorMessage && props?.errorMessage !== undefined) && <div className="text-sm m-0 p-0 text-destroy">{props?.errorMessage}</div>}
            </div>
        </div>
    )
}