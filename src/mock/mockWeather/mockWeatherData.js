const icons = ["sunny", "rainy", "cloudy"];
const DAYS_OF_WEEK = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const MS_IN_SEC = 1000;
const MS_IN_MINUTE = 60 * MS_IN_SEC;
const MS_IN_HOUR = 60 * MS_IN_MINUTE;
const MS_IN_DAY = 24 * MS_IN_HOUR;

const { random, round, abs } = Math;
const getRandNum = () => round(abs(random()) * 100);
const getRandIcon = () => icons[round(abs(random()) * 2)];
const getRandTemp = () => round(random() * 30);
const getDayOfWeek = (date) => DAYS_OF_WEEK[new Date(date).getDay()];

const getRandDayStat = (date) => ({
  dayOfWeek: getDayOfWeek(date),
  temperature: `${getRandTemp()} ℃`,
  humidity: `${getRandNum()} %`,
  fallout: `${getRandNum()} мм.`,
  wind: `${getRandNum()} м/c`,
  icon: getRandIcon(),
});

export const getRandStatDays = (num) => {
  const date = Date.now();

  return Array.from({ length: num }, (_, index) =>
    getRandDayStat(date + MS_IN_DAY * index),
  );
};
