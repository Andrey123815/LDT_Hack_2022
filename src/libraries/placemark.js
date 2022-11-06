export const createPlacemark = (type) => {
  return {
    iconLayout: 'default#image',
    iconImageHref: `/placemarks/${type.toLowerCase()}.svg`,
    iconImageSize: [70, 70],
  };
};
