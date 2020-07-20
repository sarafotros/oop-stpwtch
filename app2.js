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
        total += parseInt(inputArr[i]);
      }
      if (inputArr[i] !== '.' && parseInt(inputArr[i]) % 2 !== 0) {
        inPitchId.reverse();
      }
    }
    if (burstsCount % 6 === 0) {
      inPitchId.reverse();
    }
  }
  return { batmen, total };
};
let sco = '..1.2.3.1...3.1..4.4.6.6.66.1.....1.....W.....2...11.11..11';
let inString =
  '.......111....3.4..6...1..11....2....3...W...11...1..2...33...44...W..W..1..2..1.22....1..1......1....11...111.....1.111..222.333...W...211..22.11....1...1...1...1...1..1..3...4....2...1....3...1....646421.3.222..111...333...444......1111...22..333.444............1...1...1.....11.22.WWW11.....1....11....1....1.W...W..1666..W';
// console.log(cricketKata(sco));
console.log(cricketKata(inString));

//    p1:26
//     // p2: 24
//     p3:3

//     playerTurn: 1

//    let  inPitchId = [3,2]

//    batmen =
//     total:
