const TextInput = ({ label, placeholder, inputRef, err }) => {
  return (
    <div>
      <div className="font-semibold text-orange-700">{label}:</div>
      <input
        className={`border w-full ${err ? "border-red-400" : "border-orange-300"} bg-orange-50 rounded-sm p-1 px-2`}
        placeholder={placeholder}
        ref={inputRef}
      />
      <div className='h-2 text-xs text-red-500 px-2'></div>
    </div>
  );
};

export default TextInput;