//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work


// Day 1 to Day 30 temperature data
const day1Temp = 32;  const day1Unit = "F";
const day2Temp = 25;  const day2Unit = "C";
const day3Temp = 70;  const day3Unit = "F";
const day4Temp = 18;  const day4Unit = "C";
const day5Temp = 80;  const day5Unit = "F";
const day6Temp = 15;  const day6Unit = "C";
const day7Temp = 72;  const day7Unit = "F";
const day8Temp = 28;  const day8Unit = "C";
const day9Temp = 68;  const day9Unit = "F";
const day10Temp = 20; const day10Unit = "C";
const day11Temp = 75; const day11Unit = "F";
const day12Temp = 23; const day12Unit = "C";
const day13Temp = 82; const day13Unit = "F";
const day14Temp = 30; const day14Unit = "C";
const day15Temp = 65; const day15Unit = "F";
const day16Temp = 22; const day16Unit = "C";
const day17Temp = 77; const day17Unit = "F";
const day18Temp = 26; const day18Unit = "C";
const day19Temp = 78; const day19Unit = "F";
const day20Temp = 24; const day20Unit = "C";
const day21Temp = 73; const day21Unit = "F";
const day22Temp = 21; const day22Unit = "C";
const day23Temp = 79; const day23Unit = "F";
const day24Temp = 27; const day24Unit = "C";
const day25Temp = 71; const day25Unit = "F";
const day26Temp = 19; const day26Unit = "C";
const day27Temp = 74; const day27Unit = "F";
const day28Temp = 17; const day28Unit = "C";
const day29Temp = 76; const day29Unit = "F";
const day30Temp = 29; const day30Unit = "C";


// Convert each day to Celsius.
// Fahrenheit days use (F - 32) * 5 / 9; Celsius days stay as they are.
const day1TempC = (day1Temp - 32) * 5 / 9;
const day2TempC = day2Temp;
const day3TempC = (day3Temp - 32) * 5 / 9;
const day4TempC = day4Temp;
const day5TempC = (day5Temp - 32) * 5 / 9;
const day6TempC = day6Temp;
const day7TempC = (day7Temp - 32) * 5 / 9;
const day8TempC = day8Temp;
const day9TempC = (day9Temp - 32) * 5 / 9;
const day10TempC = day10Temp;
const day11TempC = (day11Temp - 32) * 5 / 9;
const day12TempC = day12Temp;
const day13TempC = (day13Temp - 32) * 5 / 9;
const day14TempC = day14Temp;
const day15TempC = (day15Temp - 32) * 5 / 9;
const day16TempC = day16Temp;
const day17TempC = (day17Temp - 32) * 5 / 9;
const day18TempC = day18Temp;
const day19TempC = (day19Temp - 32) * 5 / 9;
const day20TempC = day20Temp;
const day21TempC = (day21Temp - 32) * 5 / 9;
const day22TempC = day22Temp;
const day23TempC = (day23Temp - 32) * 5 / 9;
const day24TempC = day24Temp;
const day25TempC = (day25Temp - 32) * 5 / 9;
const day26TempC = day26Temp;
const day27TempC = (day27Temp - 32) * 5 / 9;
const day28TempC = day28Temp;
const day29TempC = (day29Temp - 32) * 5 / 9;
const day30TempC = day30Temp;


// Total in Celsius: add up all the converted Celsius values
const tot_temperature_in_celsius =
  day1TempC + day2TempC + day3TempC + day4TempC + day5TempC +
  day6TempC + day7TempC + day8TempC + day9TempC + day10TempC +
  day11TempC + day12TempC + day13TempC + day14TempC + day15TempC +
  day16TempC + day17TempC + day18TempC + day19TempC + day20TempC +
  day21TempC + day22TempC + day23TempC + day24TempC + day25TempC +
  day26TempC + day27TempC + day28TempC + day29TempC + day30TempC;

// Total in Fahrenheit: odd days are already Fahrenheit,
// even days (Celsius) get converted with (C * 9 / 5) + 32
const tot_temperature_in_fahrenheit =
  day1Temp + ((day2Temp * 9 / 5) + 32) +
  day3Temp + ((day4Temp * 9 / 5) + 32) +
  day5Temp + ((day6Temp * 9 / 5) + 32) +
  day7Temp + ((day8Temp * 9 / 5) + 32) +
  day9Temp + ((day10Temp * 9 / 5) + 32) +
  day11Temp + ((day12Temp * 9 / 5) + 32) +
  day13Temp + ((day14Temp * 9 / 5) + 32) +
  day15Temp + ((day16Temp * 9 / 5) + 32) +
  day17Temp + ((day18Temp * 9 / 5) + 32) +
  day19Temp + ((day20Temp * 9 / 5) + 32) +
  day21Temp + ((day22Temp * 9 / 5) + 32) +
  day23Temp + ((day24Temp * 9 / 5) + 32) +
  day25Temp + ((day26Temp * 9 / 5) + 32) +
  day27Temp + ((day28Temp * 9 / 5) + 32) +
  day29Temp + ((day30Temp * 9 / 5) + 32);

console.log(tot_temperature_in_celsius);    // ≈ 672.89
console.log(tot_temperature_in_fahrenheit); // 2171.2


const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

console.log(avg_temperature_in_fahrenheit); // ≈ 72.37
console.log(avg_temperature_in_celsius);    // ≈ 22.43

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};