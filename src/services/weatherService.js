import http from "./httpService";

import _ from "lodash";

class Weather {
  constructor(location, dayTime) {
    if (_.isString(location) === false || _.isString(dayTime) === false) {
      throw new Error("Invalid parameters");
    }

    this.location = location;
    this.dayTime = dayTime;
    this.times = _.chain([
      [0, 5, "night"],
      [6, 12, "morning"],
      [13, 18, "afternoon"],
      [18, 23, "evening"],
      [0, 23, "day"]
    ])
      .filter(o => o.filter(el => el === this.dayTime).length > 0)
      .flatten()
      .filter(_.isNumber)
      .value();
    if (this.times.length < 1) {
      throw new Error("Please provide correct day time");
    }
  }

  tracker = [];

  async insert() {
    const options = { params: { q: this.location, cnt: 5, units: "metric" } };
    const { data } = await http.get("/forecast", options);
    this.tracker = _.union(this.tracker, [...data.list]);
    return { temp: this.tracker, city: data.city };
  }

  async unixTodayRange() {
    if (this.tracker.length < 1) await this.insert();
    const today = new Date();
    const y = today.getFullYear();
    const m = today.getMonth();
    const d = today.getDate();
    const range = [
      Date.UTC(y, m, d, this.times[0]) / 1000,
      Date.UTC(y, m, d, this.times[1]) / 1000
    ];
    const array = _.chain(this.tracker)
      .filter(element => _.inRange(element.dt, range[0], range[1]))
      .value();
    return array;
  }

  async showMin(key) {
    const array = await this.unixTodayRange();
    if (array.length === 0) return undefined;
    return _.chain(array)
      .minBy(chr => {
        return chr.main[key];
      })
      .find(key)
      .pick(key)
      .toArray()
      .toNumber()
      .value();
  }

  async showMax(key) {
    const array = await this.unixTodayRange();
    if (array.length === 0) return undefined;
    return _.chain(array)
      .maxBy(chr => {
        return chr.main[key];
      })
      .find(key)
      .pick(key)
      .toArray()
      .toNumber()
      .value();
  }

  async showMean(key) {
    const array = await this.unixTodayRange();
    if (array.length === 0) return undefined;
    return _.meanBy(array, o => {
      return o.main[key];
    });
  }

  //[3, 3, 1, 2, 4] => [3]
  //[3,3,1,1,2] => [3,1]
  //[2,1,3,4] => [2,1,3,4]
  async showMode(key) {
    const range = await this.unixTodayRange();
    if (range.length === 0) return undefined;
    const array = _.chain(range)
      .map(el => el.main[key])
      .value();
    return _.chain(array)
      .countBy()
      .invertBy()
      .toPairs()
      .max(_.head)
      .last()
      .map(el => {
        return _.toNumber(el);
      })
      .value();
  }
}

export default Weather;
