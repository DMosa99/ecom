interface Props {
  onChangeText: (value: string) => void;
  onBlur: () => void;
  error?: string;
  placeholder: string;
  defaultValue?: string;
}

function Input({
  onChangeText,
  onBlur,
  error,
  placeholder,
  defaultValue,
}: Props) {
  return (
    <div className="flex w-full flex-1 flex-col gap-2">
      <input
        defaultValue={defaultValue}
        className={`font-poppins box-border w-full border-1 border-gray-500 p-3 text-sm font-light focus:border-b-2 ${error ? `border-b-2 border-b-red-600` : `border-b-black hover:border-black focus:border-black`} focus:outline-none`}
        placeholder={placeholder}
        onChange={(e) => onChangeText(e.target.value)}
        onBlur={onBlur}
      />
      {error && (
        <p className="font-poppins text-xs font-light tracking-wide text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;
