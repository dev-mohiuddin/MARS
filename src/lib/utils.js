import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn (...inputs) {
    return twMerge(clsx(inputs))
}

export const trunCateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...'
    }
    return text
}
