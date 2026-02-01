import { delay, http, HttpResponse } from "msw";
import { BASE_URL, PATHES } from "../../api";
import { getRandStatDays } from "./mockWeatherData";

const mockGetWeather = http.get(
  `${BASE_URL}${PATHES.WEATHER}`,
  async ({ request: { url } }) => {
    const params = new URLSearchParams(new URL(url).search);
    await delay(2000);
    if (params.get("name") === "ошибка")
      return HttpResponse.json(null, { status: 500 });
    return HttpResponse.json(getRandStatDays(+params.get("days")), {
      status: 200,
    });
  },
);

export const mockWeather = [mockGetWeather];
