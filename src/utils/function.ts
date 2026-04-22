export const dateToString = (date: Date): string => {
    return date.toISOString().split('T')[0];
}

export const numberToDate = (number: number): string => {
    const today = new Date();

    if (number === 0) {
        return dateToString(today);
    } else {
        const date = new Date(today.setDate(today.getDate() - number));
        return dateToString(date); 
    }
}