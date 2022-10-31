import {EntityLengthLimit} from "../configurations/inputValidation.js";

export const numberServiceSymbols = ["(", "-", ")", " "];

export const NumberPhoneFormat = {
  phoneBeginString: "+7 (",
  formatters: [
    {symbol: ' ', formatPositions: [2, 8]},
    {symbol: "(", formatPositions: [3]},
    {symbol: ") ", formatPositions: [7]},
    {symbol: "-", formatPositions: [12, 15]},
  ]
};

/**
 * @function Осуществляет проверку на наличие нужного служебного
 *      символа на нужной позиции (данные хранятся в массиве formatters). В случае
 *      отсуствия - добавляет на нужную позицию с переносом остальных символов.
 */
function format(e) {
  NumberPhoneFormat.formatters.forEach((obj) => {
    obj.formatPositions.forEach((num) => {
      if (
        e.target.value.length === num + 1 &&
        e.target.value[num] !== obj.symbol &&
        !numberServiceSymbols.includes(
          e.target.value[e.target.value.length - 1]
        )
      ) {
        e.target.value =
          e.target.value.slice(0, num) +
          obj.symbol +
          e.target.value.slice(num, num + 1);
      }
    });
  });
}

/**
 * @function Дополняет и форматирует номер телефона. В случае получения невалидных символов
 *      производится удаление их из поля ввода.
 * @param {Event} e - Событие.
 */
export const numberAutocomplete = (e) => {
  e.target.value = e.target.value.slice(0, EntityLengthLimit.phoneNumber);
  format(e);
};
