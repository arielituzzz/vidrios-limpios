export const Validator = (name, tel, email, message) => {
  const forbiddenWords = ["<", ">", "/", "</>", "<script>", "</script>"];

  const inputs = [name, tel, email, message];

  const hasForbiddenWord = inputs.some((str) => {
    return forbiddenWords.some((word) => {
      return str.includes(word);
    });
  });

  if (!name || !tel || !email || !message) return true;

  return hasForbiddenWord;
};
