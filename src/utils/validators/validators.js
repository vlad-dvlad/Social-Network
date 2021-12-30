export const required = value => (value ? undefined : "Required")

export const maxLengthCreator = (maxLength) => (value) => {
    return value && value.length > maxLength ? `Max be ${maxLength} characters or less` : undefined;
}
