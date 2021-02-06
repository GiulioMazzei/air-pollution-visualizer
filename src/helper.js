export const showContent = (content, displayProperty) => {
  content.style.display = `${displayProperty}`;
};

export const showAtmosphereContent = (array, HTMLelement, value) => {
  array.push(value);
  HTMLelement.textContent = value;
};

export const showNoData = (array, HTMLelement) => {
  array.push('no data');
  HTMLelement.textContent = 'no data';
};

// export const showErrorMessage = (JSON, CONTAINER, ERROR_MESSAGE) => {
//   if (JSON === 'Unknown station') {
//     showContent(CONTAINER, 'none');
//     ERROR_MESSAGE = true;
//     return;
//   }
// };
