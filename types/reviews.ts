export interface UserInfo {
  profileImageUrl: string;
  nickname: string;
  id: number;
}

export interface Review {
  id: number;
  user: UserInfo;
  activityId: number;
  rating: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewResponse {
  averageRating: number;
  totalCount: number;
  reviews: Review[];
}
