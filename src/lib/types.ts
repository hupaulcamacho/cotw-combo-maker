// https://www.riotgames.com/en/news/play-2xko-evo-japan-2024

export interface Combo {
  gameVersion: string;
  characterId: number;
  damage?: number;
  hitCount?: number;
  sequence: Buttons[];
}

export enum Buttons {
  downBack = "1",
  down = "2",
  downForward = "3",
  back = "4",
  neutral = "5",
  forward = "6",
  upBack = "7",
  up = "8",
  upForward = "9",
  light = "L",
  medium = "M",
  heavy = "H",
  special1 = "S1",
  special2 = "S2",
  tag = "T",
  dash = "Dash",
  taunt = "Taunt",
  parry = "Parry",
  simultaneousStart = "simultaneousStart",
  simultaneousEnd = "simultaneousEnd",
  then = "then",
  or = "or",
  and = "and",
}
