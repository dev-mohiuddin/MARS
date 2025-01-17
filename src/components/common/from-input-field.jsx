
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from 'lucide-react';

function FormInputField({ name, label, placeholder, type = "text", form=null, selectOption = [], radioOption = [] }) {
 
    const [showPassword, setShowPassword] = useState(false);

    return (
        <FormField
            control={form?.control}
            name={name}
            render={({ field }) => {
                return (
                    <FormItem className="flex flex-col space-y-1.5 relative">
                        {(() => {
                            switch (type) {
                                case "select":
                                    return (
                                        <>
                                            <FormLabel htmlFor={name}>{label}</FormLabel>
                                            <FormControl>
                                                <Select id={name} {...field}>
                                                    <SelectTrigger >
                                                        <SelectValue placeholder={placeholder || "select"} />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {selectOption && selectOption?.map((option) => (
                                                            <SelectItem key={option.value} value={option.value}>
                                                                {option.label}
                                                            </SelectItem >
                                                        ))}
                                                    </SelectContent>

                                                </Select>
                                            </FormControl>
                                        </>
                                    );

                                case "textarea":
                                    return (
                                        <>
                                            <FormLabel htmlFor={name}>{label}</FormLabel>
                                            <FormControl>
                                                <Textarea id={name} placeholder={placeholder || "Input your notes"} {...field} rows="4" />
                                            </FormControl>
                                        </>
                                    );

                                case "checkbox":
                                    return (
                                        <div className="flex items-center gap-1">
                                            <FormControl>
                                                <Checkbox type={type} id={name} {...field} />
                                            </FormControl>
                                            <FormLabel htmlFor={name}>{label}</FormLabel>
                                        </div>
                                    );

                                case "radio":
                                    return (
                                        <FormControl>
                                            <RadioGroup >
                                                <FormLabel htmlFor={name}>{label}</FormLabel>
                                                {radioOption && radioOption?.map((option) => (
                                                    <div key={option.value} className="flex items-center">
                                                        <RadioGroupItem id={option.value} value={option.value} {...field} />
                                                        <Label htmlFor={option.value} className="ml-2">{option.label}</Label>
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                        </FormControl>
                                    );

                                case "password":
                                    return (
                                        <>
                                            <FormControl>
                                                <Input
                                                    id={name}
                                                    placeholder={placeholder || "Password"}
                                                    type={showPassword ? "text" : "password"}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-1.5"
                                            >
                                                {showPassword ? <EyeOff className="text-foreground" /> : <Eye className="text-foreground" />}
                                            </button>
                                        </>
                                    );

                                case 'number':
                                    return (
                                        <FormControl>
                                            <>
                                                <FormLabel htmlFor={name}>{label}</FormLabel>
                                                <Input
                                                    id={name}
                                                    placeholder={placeholder || "Number"}
                                                    type="number"
                                                    {...field}
                                                />
                                            </>
                                        </FormControl>
                                    );
    
                                    

                                default:
                                    return (
                                        <div className="space-y-1">
                                            <FormLabel htmlFor={name}>{label}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id={name}
                                                    placeholder={placeholder || "Input your text"}
                                                    type={type}
                                                    {...field}
                                                />
                                            </FormControl>
                                        </div>
                                    );
                            }
                        })()}
                        <FormMessage className="text-red-500 font-normal" />
                    </FormItem>
                )
            }
            }
        />
    );
}

export default FormInputField;
