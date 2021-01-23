// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const matrix_res = Array(n)
    .fill()
    .map(() => Array(n).fill());
  let count = 1;
  let shell = 0;
  while (count < Math.pow(n, 2) + 1) {
    let column = shell;
    let row = shell;
    // top row
    while (column < n - shell) {
      matrix_res[row][column] = count;
      column++;
      count++;
    }
    column--;
    row++;
    // right hand side
    while (row < n - shell) {
      matrix_res[row][column] = count;
      row++;
      count++;
    }
    column--;
    row--;
    // bottom row
    while (column >= shell) {
      matrix_res[row][column] = count;
      column--;
      count++;
    }
    column++;
    row--;
    // left column
    while (row > shell) {
      matrix_res[row][column] = count;
      row--;
      count++;
    }
    shell++;
  }
  return matrix_res;
}

function matrix_recursive(n) {
  const count = 1;
  const shell = 0;
  const matrix_res = Array(n)
    .fill()
    .map(() => Array(n).fill());
  const row = 0;
  const column = 0;
  return matrix_recursive_(n, count, shell, row, column, matrix_res);
}

function matrix_recursive_(n, count, shell, row, column, matrix_res) {
  // base case
  if (count === Math.pow(n, 2)) {
    matrix_res[row][column] = count;
    return matrix_res;
  }

  // top row
  if (row === shell && column === n - shell - 1) {
    matrix_res[row][column] = count;
    return matrix_recursive_(n, count + 1, shell, row + 1, column, matrix_res);
  }
  if (row === shell && column < n - shell - 1) {
    matrix_res[row][column] = count;
    return matrix_recursive_(n, count + 1, shell, row, column + 1, matrix_res);
  }
  // right side
  if (row === n - shell - 1 && column === n - shell - 1) {
    matrix_res[row][column] = count;
    return matrix_recursive_(n, count + 1, shell, row, column - 1, matrix_res);
  }
  if (row < n - shell - 1 && column === n - shell - 1) {
    matrix_res[row][column] = count;
    return matrix_recursive_(n, count + 1, shell, row + 1, column, matrix_res);
  }
  // bottom side
  if (row === n - shell - 1 && column === shell) {
    matrix_res[row][column] = count;
    return matrix_recursive_(n, count + 1, shell, row - 1, column, matrix_res);
  }
  if (row === n - shell - 1 && column > shell) {
    matrix_res[row][column] = count;
    return matrix_recursive_(n, count + 1, shell, row, column - 1, matrix_res);
  }
  // left side
  if (row === shell + 1 && column === shell) {
    matrix_res[row][column] = count;
    return matrix_recursive_(
      n,
      count + 1,
      shell + 1,
      shell + 1,
      shell + 1,
      matrix_res,
    );
  }
  if (row > shell + 1 && column === shell) {
    matrix_res[row][column] = count;
    return matrix_recursive_(n, count + 1, shell, row - 1, column, matrix_res);
  }
}
console.log(matrix_recursive(5));
module.exports = matrix;
