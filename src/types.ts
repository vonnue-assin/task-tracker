export type Task = {
  title: string;
  days: string;
  priority: "Low" | "Medium" | "High";
  notification: string;
  tags: string;
  assignee: string;
  description: string;
};
