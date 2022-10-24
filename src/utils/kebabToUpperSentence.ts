export const kebabToUpperSentence = (text: string | undefined) =>
  text
    ? text
        .replace(/-/g, " ")
        .split(" ")
        .map((element) => {
          return element[0].toUpperCase() + element.slice(1) + " ";
        })
    : undefined;
