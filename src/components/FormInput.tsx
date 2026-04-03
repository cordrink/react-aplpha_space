import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import type {ReactNode} from "react";

type FormInputProps = {
    label: string,
    name: string,
    type: string,
    defaultValue: string,
    placeholder: string,
}

export const FormInput = ({label, name, type, defaultValue, placeholder}: FormInputProps): ReactNode => {
    const displayLabel = label || name;

    return (
        <div className={"flex flex-col gap-1"}>
            <Label htmlFor={name} className={"capitalize text-xl"}>{displayLabel}</Label>
            <Input
                id={name}
                type={type}
                aria-label={displayLabel}
                defaultValue={defaultValue}
                placeholder={placeholder}
            />
        </div>
    );
};
