const useValidate = () => {    
    function isRequired(value) {
        return value.trim() ? undefined : "Please fill this field";
    }

    function notNumber(value) {
        return !(/\d/.test(value)) ? undefined : "Name cannot contain number";
    }

    function maxLength(value, maxSize) {
        return value.length <= maxSize
            ? undefined
            : `This field can't have more than ${maxSize} characters`;
    }

    return {  isRequired, notNumber, maxLength }
}

export default useValidate