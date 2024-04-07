import type { Subscription } from "@/components/interfaces/subscription";

export interface CardType {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  site: string;
  subscriptions: Subscription[];
}
