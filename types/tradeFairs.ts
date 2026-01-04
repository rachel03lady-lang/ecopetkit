
export interface TradeFairImage {
  node?: {
    sourceUrl?: string;
    altText?: string;
    title?: string;
    caption?: string;
    description?: string;
  };
}

export interface TradeFair {
  name: string;
  date: string;
  location: string;
  booth: string;
  image?: TradeFairImage | null;
  status: string[] | "upcoming" | "past";
}

export interface TradeFairsPageContent {
  banner: {
    title: string;
    description: string;
  };
  items: TradeFair[];
}

export type TradeFairsPage = {
  en?: TradeFairsPageContent;
  de?: TradeFairsPageContent;
  fr?: TradeFairsPageContent;
  es?: TradeFairsPageContent;
};
