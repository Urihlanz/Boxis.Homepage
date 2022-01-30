const truncate = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    text = text.substring(0, maxLength - 3);

    return `${text}...`;
  } else return text;
};

export default truncate;
