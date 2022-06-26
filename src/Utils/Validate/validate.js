import moment from "moment";

export const handleValidateString = (string) => {
    return string.trim() !== '';
}

export const handleValidateInterger = (interger) => {
    return parseInt(interger) > 0;
}

export const handleValidateDate = (date) => {
    return moment(date, 'yyyy-MM-DD').isValid();
}