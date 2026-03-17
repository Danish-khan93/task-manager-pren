export const phoneNumberFormat = (value: string, type: string) => {
  if (type === "phoneNumber") {
    if (value?.length > 3 && value?.length === 9) {
      const start3 = value.slice(0, 3);
      const mid3 = value.slice(3,6 );
      const last3 = value.slice(6);
      const newValue = `(${start3})-${mid3}-${last3}`;
      return newValue;
    }else{
        return value
    }
  }
};
