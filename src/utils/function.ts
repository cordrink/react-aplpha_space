export const dateToString = (date: Date): string => {
    return date.toISOString().split('T')[0];
}

export const numberToDate = (number: number): string => {
    const today = new Date();
    console.log(`Today ${today}`);
    if (number === 0) {
        return dateToString(today);
    } else {
        const date = new Date(today.setDate(today.getDate() - number));
        console.log(`Today getDate ${today.getDate()}, Date ${date}`);
        return dateToString(date); 
    }
}