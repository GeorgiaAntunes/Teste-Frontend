
export const formatZipCode = (zipCode: string) => {
    const cleanedZipCode = zipCode.replace(/\D+/g, "");
    const maskedZipCode = cleanedZipCode.replace(/^(\d{5})(\d{0,3})$/, "$1-$2");
    return maskedZipCode;
};
