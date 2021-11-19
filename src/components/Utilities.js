export const getColumn = (matrix, col) => {
  return matrix.map((row) => row[col]);
};

export const setColumn = (matrix, column, columnIndex) => {
  for (let row = 0; row < matrix.length; row++) {
    matrix[row][columnIndex] = column[row];
  }
  return matrix;
};

export const getDiagonals = (matrix, location = { row: 0, col: 0 }) => {
  let forward = [];
  let backward = [];
  let n = matrix.length;
  matrix.forEach((row, y) => {
    let x = location.col - (location.row - y);
    if (x >= 0 && x < n) backward.push(row[x]);
    x = location.col + (location.row - y);
    if (x >= 0 && x < n) forward.push(row[x]);
  });

  return { forward, backward };
};

export const setDiagonals = (
  matrix,
  // eslint-disable-next-line
  diagonals = { forward: [], backward: [] },
  // eslint-disable-next-line
  location = { row: 0, col: 0 }
) => {
  // eslint-disable-next-line
  const n = matrix.length;
  // Update matrix with diagonal arrays

  return matrix;
};

export const flipArray = (array, player) => {
  let playerStarted = -1;
  let opponentsStarted = -1;

  for (let index = 0; index < array.length; index++) {
    const value = array[index];

    if (value === 0) {
      playerStarted = -1;
      opponentsStarted = -1;
    } else if (value === player) {
      if (playerStarted >= 0 && opponentsStarted >= 0) {
        for (let k = playerStarted; k <= opponentsStarted; k++) {
          array[k] = player;
        }
      }
      playerStarted = index;
    } else {
      opponentsStarted = index;
    }
  }
  return array;
};
