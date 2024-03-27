export const pickRandomData = (data, cantidad) => {
  const newData = [];

  while (newData.length < cantidad) {
    const indexRandom = Math.floor(Math.random() * data.length);
    const randomItem = data[indexRandom];

    if (!newData.includes(randomItem)) {
      newData.push(randomItem);
    }
  }

  return newData;
};