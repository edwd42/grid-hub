import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  constructor() {}

  bigChart() {
    return [
      {
        name: "Total (MMbtu)",
        data: [
          462135,
          497552,
          410884,
          453643,
          499879,
          504900,
          410576,
          398542,
          392902
        ]
      },
      {
        name: "Oil (MMbtu)",
        data: [132797, 111262, 33847, 36331, 36313, 24634, 17161, 10260, 9076]
      },
      {
        name: "Gas (MMbtu)",
        data: [
          143482,
          195374,
          191496,
          234019,
          281800,
          302158,
          218394,
          242183,
          258061
        ]
      },
      {
        name: "Electric (MMbtu)",
        data: [
          185856,
          190916,
          185541,
          183293,
          181766,
          178101,
          175000,
          146100,
          125765
        ]
      }
    ];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  solar() {
    return [0.26, 0.43, 1.09, 1.44];
  }

  bicycleMiles() {
    return [9.4, 12.4, 12.9, 14.6];
  }

  recycling() {
    return [5187, 4863, 6893, 9310];
  }

  trees() {
    return [652, 579, 538, 808, 648];
  }

  pieChart() {
    return [
      {
        name: "Asia",
        y: 59,
        sliced: true,
        selected: true
      },
      {
        name: "Africa",
        y: 20
      },
      {
        name: "Europe",
        y: 7
      },
      {
        name: "Americas",
        y: 13
      },
      {
        name: "Oceania",
        y: 1
      }
    ];
  }

  provStreetlights() {
    return null;
  }
}
