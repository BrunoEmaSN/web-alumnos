import moment from "moment";

export const useIsValidate = () => {
    const handleValidateString = (string) => {
        return string.trim() !== '';
    }
    
    const handleValidateInterger = (interger) => {
        return parseInt(interger) > 0;
    }
    
    const handleValidateDate = (date) => {
        return moment(date, 'yyyy-MM-DD').isValid() || moment(date, 'HH:mm:ss').isValid();
    }

    return [ handleValidateString, handleValidateInterger, handleValidateDate ];
}