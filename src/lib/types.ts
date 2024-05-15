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
  parry = "Parry",
  then = ">",
  or = "|",
  and = "+",
  hold = "Hold",
}

export function svgForButton(button: Buttons): string {
  const svgMap: { [key in Buttons]: string } = {
    [Buttons.downBack]: "1.svg",
    [Buttons.down]: "2.svg",
    [Buttons.downForward]: "3.svg",
    [Buttons.back]: "4.svg",
    [Buttons.neutral]: "5.svg",
    [Buttons.forward]: "6.svg",
    [Buttons.upBack]: "7.svg",
    [Buttons.up]: "8.svg",
    [Buttons.upForward]: "9.svg",
    [Buttons.light]: "L.svg",
    [Buttons.medium]: "M.svg",
    [Buttons.heavy]: "H.svg",
    [Buttons.special1]: "S1.svg",
    [Buttons.special2]: "S2.svg",
    [Buttons.tag]: "tag.svg",
    [Buttons.dash]: "dash.svg",
    [Buttons.parry]: "parry.svg",
    [Buttons.then]: "then.svg",
    [Buttons.or]: "or.svg",
    [Buttons.and]: "plus.svg",
    [Buttons.hold]: "hold.svg",
  };

  return svgMap[button];
}

export function sequenceSvgForButton(button: Buttons): string {
  const svgMap: { [key in Buttons]: string } = {
    [Buttons.downBack]: "1-lg.svg",
    [Buttons.down]: "2-lg.svg",
    [Buttons.downForward]: "3-lg.svg",
    [Buttons.back]: "4-lg.svg",
    [Buttons.neutral]: "5-lg.svg",
    [Buttons.forward]: "6-lg.svg",
    [Buttons.upBack]: "7-lg.svg",
    [Buttons.up]: "8-lg.svg",
    [Buttons.upForward]: "9-lg.svg",
    [Buttons.light]: "L.svg",
    [Buttons.medium]: "M.svg",
    [Buttons.heavy]: "H.svg",
    [Buttons.special1]: "S1.svg",
    [Buttons.special2]: "S2.svg",
    [Buttons.tag]: "tag.svg",
    [Buttons.dash]: "dash.svg",
    [Buttons.parry]: "parry.svg",
    [Buttons.then]: "then-lg.svg",
    [Buttons.or]: "or-lg.svg",
    [Buttons.and]: "plus-lg.svg",
    [Buttons.hold]: "hold.svg",
  };

  return svgMap[button];
}

const shortCodeMap: { [key in Buttons]: string } = {
  [Buttons.downBack]: "1",
  [Buttons.down]: "2",
  [Buttons.downForward]: "3",
  [Buttons.back]: "4",
  [Buttons.neutral]: "5",
  [Buttons.forward]: "6",
  [Buttons.upBack]: "7",
  [Buttons.up]: "8",
  [Buttons.upForward]: "9",
  [Buttons.light]: "L",
  [Buttons.medium]: "M",
  [Buttons.heavy]: "H",
  [Buttons.special1]: "X",
  [Buttons.special2]: "Y",
  [Buttons.tag]: "T",
  [Buttons.dash]: "D",
  [Buttons.parry]: "P",
  [Buttons.then]: ">",
  [Buttons.or]: "|",
  [Buttons.and]: "+",
  [Buttons.hold]: "h",
};

export function shortCodeForButton(button: Buttons): string {
  return shortCodeMap[button];
}

export function buttonForShortCode(letter: string): Buttons {
  return Object.keys(shortCodeMap).find(
    (key) => shortCodeMap[key as Buttons] === letter,
  ) as Buttons;
}
