import React, { useEffect, useMemo, useRef, useState } from "react";
import { Input } from "antd";

type OtpInputProps = {
  length?: number;                       
  value?: string;                        
  defaultValue?: string;                 
  onChange?: (code: string) => void;     
  onComplete?: (code: string) => void;   
  autoFocus?: boolean;
  disabled?: boolean;
  error?: boolean;                       
  inputMode?: "numeric" | "text";        
  className?: string;                    
  inputClassName?: string;               
};

const OtpInput: React.FC<OtpInputProps> = ({
  length = 6,
  value,
  defaultValue = "",
  onChange,
  onComplete,
  autoFocus = true,
  disabled = false,
  error = false,
  inputMode = "numeric",
  className = "",
  inputClassName = "",
}) => {
  const [internal, setInternal] = useState<string>(defaultValue.slice(0, length));
  const isControlled = typeof value === "string";
  const code = (isControlled ? value : internal).padEnd(length, " ").slice(0, length);

  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (autoFocus && inputsRef.current[0]) {
      inputsRef.current[0].focus();
      inputsRef.current[0].select?.();
    }
  }, [autoFocus]);

  const setCode = (next: string) => {
    const trimmed = next.replace(/\s/g, "").slice(0, length);
    if (!isControlled) setInternal(trimmed);
    onChange?.(trimmed);
    if (trimmed.length === length) onComplete?.(trimmed);
  };

  const handleChange = (idx: number, ch: string) => {
   
    const digit = ch.replace(/\D/g, "").slice(0, 1);
    if (!digit) return;

    const arr = code.split("");
    arr[idx] = digit;
    const joined = arr.join("").replace(/\s/g, "");
    setCode(joined);

    if (idx < length - 1) {
      inputsRef.current[idx + 1]?.focus();
      inputsRef.current[idx + 1]?.select?.();
    }
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;

    if (key === "Backspace") {
      e.preventDefault();
      const arr = code.split("");
      if (arr[idx].trim() === "") {
        
        if (idx > 0) {
          inputsRef.current[idx - 1]?.focus();
          const prevArr = code.split("");
          prevArr[idx - 1] = " ";
          setCode(prevArr.join("").replace(/\s/g, ""));
        }
      } else {
        arr[idx] = " ";
        setCode(arr.join("").replace(/\s/g, ""));
      }
      return;
    }

    if (key === "ArrowLeft" && idx > 0) {
      e.preventDefault();
      inputsRef.current[idx - 1]?.focus();
    }
    if (key === "ArrowRight" && idx < length - 1) {
      e.preventDefault();
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handlePaste = (idx: number, e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "");
    if (!pasted) return;

    const arr = code.split("");
    let j = 0;
    for (let i = idx; i < length && j < pasted.length; i += 1, j += 1) {
      arr[i] = pasted[j];
    }
    setCode(arr.join("").replace(/\s/g, ""));

    const focusIdx = Math.min(idx + pasted.length - 1, length - 1);
    inputsRef.current[focusIdx]?.focus();
  };

  const commonInputClasses =
    `h-11 w-10 text-center rounded-md border ` +
    `${error ? "border-red-500" : "border-gray-300"} ` +
    `focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ` +
    `${disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : ""} ` +
    `${inputClassName}`;

  const boxes = useMemo(
    () =>
      Array.from({ length }).map((_, i) => (
        <Input
          key={i}
          ref={(el) => (inputsRef.current[i] = el?.input ?? null)}
          value={code[i] === " " ? "" : code[i]}
          size="large"
          maxLength={1}
          disabled={disabled}
          inputMode={inputMode}
          pattern={inputMode === "numeric" ? "[0-9]*" : undefined}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={(e) => handlePaste(i, e)}
          className={commonInputClasses}
        />
      )),
    [code, disabled, error, inputClassName, inputMode, length]
  );

  return (
    <div
      className={`flex items-center justify-center gap-2 select-none ${className}`}
      aria-label="One-time code input"
      role="group"
    >
      {boxes}
    </div>
  );
};

export default OtpInput;
