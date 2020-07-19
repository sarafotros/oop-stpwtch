const cricketKata = (input) => {
  let batmen = [];

  for (let i = 0; i < 11; i++) {
    batmen.push({ name: `Batman ${i + 1}`, score: 0, status: '-' });
  }
  let burstsCount = 0;
  let total = 0;
  let inPitchId = [0, 1];
  let inputArr = input.split('');

  for (let i = 0; i < inputArr.length; i++) {
    burstsCount += 1;
    batmen[inPitchId[0]].status = 'not out';
    batmen[inPitchId[1]].status = 'not out';
    if (inputArr[i] === 'W') {
      batmen[inPitchId[0]].status = '';
      let max = Math.max(...inPitchId);
      inPitchId[0] = max + 1;
    } else {
      let keeperId = inPitchId[0];
      if (inputArr[i] !== '.') {
        batmen[keeperId].score += parseInt(inputArr[i]);
        total += inputArr[i];
      }
      if (inputArr[i] !== '.' && parseInt(inputArr[i]) % 2 !== 0) {
        inPitchId.reverse();
      }
    }
    if (burstsCount % 6 === 0) {
      inPitchId.reverse();
    }
  }
};

//   let sco = '
//   ..1.2.
//    3.1...
//     3.1..4
//     .4.6.6
//      .66.1..
//        ...1..
//          ...W..
//            ...2..
//              .11.11
//                ..11'

//    p1:26
//     // p2: 24
//     p3:3

//     playerTurn: 1

//    let  inPitchId = [3,2]

//    batmen =
//     total:
