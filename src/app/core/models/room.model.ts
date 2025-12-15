export type RoomStatus = 'cleaned' | 'dirty' | 'in-progress' | 'inspect';

export interface Room {
  id: string;
  number: string;
  type: string;
  floor: number;
  status: RoomStatus;
  tags?: string[];
}
