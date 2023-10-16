export const days = ['SON', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'] as const;

export type TDays = {
  [K in (typeof days)[number]]?: boolean;
};

export type TReminder = {
  name: string;
  description: string;
  time: moment.Moment;
  schedules: TDays;
};