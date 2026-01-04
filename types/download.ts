export interface DownloadItem {
  title: string;
  type: "Catalog" | "Manual" | "Software";
  file: {
    node: {
      sourceUrl: string;
      mediaItemUrl:string;
      title: string;
      fileSize: number;
      mediaDetails?: {
        file: string;
      };
    };
  };
  publishedDate: string;
  iconKey: "Catalog" | "Manual" | "Software";
  ctaLabel: string;
}

export interface DownloadsPageContent {
  heading: string;
  subheading: string;
  downloadBoxItems: DownloadItem[];
}
