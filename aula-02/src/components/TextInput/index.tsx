import { forwardRef, useImperativeHandle, useState } from "react";

export interface TextInputRef {
  setValue: (value: string) => void
  getValue: () => string | undefined;
}

export interface TextInputProps {
}

export const TextInput: React.ForwardRefRenderFunction<TextInputRef, TextInputProps> =
  (props, ref) => {
    const [value, setValue] = useState<string>();

    useImperativeHandle(ref, () => ({
      setValue: (newValue: string) => {
        setValue(newValue);
      },
      getValue: () => value
    }));


    return (
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    );
  }

export default forwardRef(TextInput);