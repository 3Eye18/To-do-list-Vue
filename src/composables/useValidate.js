const useValidate = () => {    
    function validate(value, ...rules) {
        console.log(value)
        for (const rule of rules) {
            const errorMessage = rule(value);
            if (errorMessage) {
                return errorMessage;
            }
        }
        return undefined; // No errors found
    }

    function isRequired(value) {
        return value ? undefined : "Please fill this field";
    }

    function notNumber(value) {
        return !(/\d/.test(value)) ? undefined : "Name cannot contain number";
    }

    function maxLength(value, maxSize) {
        console.log(value)
        console.log(maxSize)
        return value.length <= maxSize
            ? undefined
            : `This field can't have more than ${maxSize} characters`;
    }

    return { validate, isRequired, notNumber, maxLength }
}

export default useValidate