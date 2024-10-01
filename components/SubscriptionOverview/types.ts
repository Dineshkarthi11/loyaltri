
export interface BillingHistoryItemProps {
  date: string;
  orderId: string;
  isLatest: boolean;
  planDetails?: PlanDetail[];
}

export interface PlanDetail {
  label: string;
  value: string;
}

export interface SubscriptionDetailsProps {
  clientId: string;
  activePlansCount: number;
}

export interface HeaderProps {
  userName: string;
  userEmail: string;
}

export interface SidebarItem {
  icon: string;
  label: string;
}
