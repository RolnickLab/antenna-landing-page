export interface Project {
  captures_count: number;
  deployments_count: number;
  id: number;
  location: { latitude: number; longitude: number } | null;
  name: string;
}
