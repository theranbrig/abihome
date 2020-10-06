export const fetchApiData = async () => {
  try {
    const result = await fetch('https://abihome-test.herokuapp.com/test/images');
    const data = await result.json();
    return data;
  } catch (e) {
    return null;
  }
};

export const mockImages = [
  'https://d30y9cdsu7xlg0.cloudfront.net/png/65350-200.png',
  'https://3.bp.blogspot.com/-g4Vbb9tXU4E/TuX2Cbp78QI/AAAAAAAAAgo/JViA4tQc3Oo/s1600/dd.png',
  'https://www.iconhot.com/icon/png/emoji/200/emoji-6.png',
  'https://screentimelabs.com/wp-content/uploads/2015/09/screen-time-parental-control-689-l-280x280-200x200.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-phone.svg/200px-Circle-icons-phone.svg.png',
  'https://d30y9cdsu7xlg0.cloudfront.net/png/177723-200.png',
];
