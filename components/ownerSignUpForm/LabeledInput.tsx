import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface LabeledInputProps  {
    label:string,
    id:string,
    placeholder:string,
    type:string,
    autoCapitalize:string,
    autoComplete:string,
    autoCorrect:string,
    disabled:boolean,
    name:string,
    value:any,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    showPassword: boolean;
    
}

const LabeledInput = ({
    label,
    id,
    placeholder,
    type,
    autoCapitalize,
    autoComplete,
    autoCorrect,
    disabled,
    name,
    value,
    onChange,
    
  }:LabeledInputProps ) => {

    const handlePasswordVisibility = () => {
        // Utilisez la fonction onChange pour transmettre un événement factice pour gérer l'état showPassword
        onChange({
          target: { value, name }, // Vous pouvez ajuster ces valeurs selon vos besoins
        } as React.ChangeEvent<HTMLInputElement>);
      };

      const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative grid gap-1 mx-2">
        <Label htmlFor={id}>{label}</Label>
        <Input
          id={id}
          placeholder={placeholder}
          type={showPassword ? 'text' : type}
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete}
          autoCorrect={autoCorrect}
          disabled={disabled}
          name={name}
          value={value}
          onChange={onChange}
        />
        {type === 'password' && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible className="h-5 w-5 mt-5 text-black" />
          ) : (
            <AiOutlineEye className="h-5 w-5 text-black mt-5" />
          )}
        </button>
      )}
      </div>
    );
  };
  
  export default LabeledInput;