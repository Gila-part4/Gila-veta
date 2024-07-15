export interface ActivityItem {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ActivityResponse {
  cursorId?: number;
  totalCount: number;
  activities: ActivityItem[];
}

export interface SubImage {
  id: number;
  imageUrl: string;
}

export interface Schedule {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
}

export interface ActivityDetailResponse extends ActivityItem {
  subImageUrls: SubImage[];
  schedules: Schedule[];
}
