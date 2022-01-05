export enum TariffPeriods {
  ThreeMonths = 3,
  SixMonths = 6,
  TwelveMonths = 12,
}

export type TariffPrices = {
  [key in TariffPeriods]: number;
};

export type TariffFeatures = {
  active: string[];
  inactive: string[];
};

export type TariffCard = {
  title: string;
  prices: TariffPrices;
  features: TariffFeatures;
  isRecommended: boolean;
};
