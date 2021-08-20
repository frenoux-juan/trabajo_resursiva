const chunckArray = function (array, chunkCount) {
  var chunks = [];
  while (array.length) {
    chunks.push(array.splice(0, chunkCount));
  }
  return chunks;
};

export const getHinchaFirstExercise = (dataArr) => {
  const dataFiltered = dataArr.filter((hincha) => {
    return (
      hincha.estadoCivil === "Casado" && hincha.estudios === "Universitario"
    );
  });

  function compareEdad(hincha1, hincha2) {
    if (hincha1.edad < hincha2.edad) {
      return -1;
    }
    if (hincha1.edad > hincha2.edad) {
      return 1;
    }
    return 0;
  }
  const sorted = dataFiltered.sort(compareEdad);
  return sorted.slice(0, 100);
};

export const getRacingAverageAge = (dataArr) => {
  const dataFiltered = dataArr.filter((hincha) => {
    return hincha.equipo === "Racing";
  });

  const RacingChunks = chunckArray(dataFiltered, 200);

  const RacingAgeChunĸ = RacingChunks.map((smallChunk) => {
    const allAges = smallChunk.map((hincha) => Number(hincha.edad));
    const AverageAge =
      allAges.reduce((total, act) => (total += act)) / allAges.length;
    return AverageAge;
  });

  return (
    RacingAgeChunĸ.reduce((total, act) => (total += act)) /
    RacingAgeChunĸ.length
  );
};
