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

export const halfWidthSpace = "\u{2009}";
export const lightUnicode = "\u{1F15B}";
export const mediumUnicode = "\u{1F15C}";
export const heavyUnicode = "\u{1F157}";
export const special1Unicode = "\u{24C8}\u{2780}";
export const special2Unicode = "\u{24C8}\u{2781}";
export const tagUnicode = "\u{1F163}";
export const dashUnicode = "\u{1F153}";
export const parryUnicode = "\u{1F15F}";
export const direction1Unicode = "\u{2460}";
export const direction2Unicode = "\u{2461}";
export const direction3Unicode = "\u{2462}";
export const direction4Unicode = "\u{2463}";
export const direction5Unicode = "\u{2464}";
export const direction6Unicode = "\u{2465}";
export const direction7Unicode = "\u{2466}";
export const direction8Unicode = "\u{2467}";
export const direction9Unicode = "\u{2468}";
export const arrow1Unicode = "\u{2199}\u{FE0F}";
export const arrow2Unicode = "\u{2B07}\u{FE0F}";
export const arrow3Unicode = "\u{2198}\u{FE0F}";
export const arrow4Unicode = "\u{2B05}\u{FE0F}";
export const arrow5Unicode = "\u{25CF}\u{FE0F}";
export const arrow6Unicode = "\u{27A1}\u{FE0F}";
export const arrow7Unicode = "\u{2196}\u{FE0F}";
export const arrow8Unicode = "\u{2B06}\u{FE0F}";
export const arrow9Unicode = "\u{2197}\u{FE0F}";
export const largeYellowCircleUnicode = "\u{1F7E1}";
export const plusUnicode = "\u{FF0B}";
export const thenUnicode = "\u{2000}\u{232A}";
export const orUnicode = halfWidthSpace + "|" + halfWidthSpace;

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

const numberNotationMap: { [key in Buttons]: string } = {
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
  [Buttons.special1]: "S1",
  [Buttons.special2]: "S2",
  [Buttons.tag]: "T",
  [Buttons.dash]: "D",
  [Buttons.parry]: "P",
  [Buttons.then]: " > ",
  [Buttons.or]: "|",
  [Buttons.and]: "+",
  [Buttons.hold]: "[Hold]",
};

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

const letterNotationMap: { [key in Buttons]: string } = {
  [Buttons.downBack]: "db",
  [Buttons.down]: "d",
  [Buttons.downForward]: "df",
  [Buttons.back]: "b",
  [Buttons.neutral]: "n",
  [Buttons.forward]: "f",
  [Buttons.upBack]: "ub",
  [Buttons.up]: "u",
  [Buttons.upForward]: "uf",
  [Buttons.light]: "L",
  [Buttons.medium]: "M",
  [Buttons.heavy]: "H",
  [Buttons.special1]: "S1",
  [Buttons.special2]: "S2",
  [Buttons.tag]: "T",
  [Buttons.dash]: "D",
  [Buttons.parry]: "P",
  [Buttons.then]: " > ",
  [Buttons.or]: "|",
  [Buttons.and]: "+",
  [Buttons.hold]: "[Hold]",
};

const unicodeNotationMap: { [key in Buttons]: string } = {
  [Buttons.downBack]: arrow1Unicode,
  [Buttons.down]: arrow2Unicode,
  [Buttons.downForward]: arrow3Unicode,
  [Buttons.back]: arrow4Unicode,
  [Buttons.neutral]: arrow5Unicode,
  [Buttons.forward]: arrow6Unicode,
  [Buttons.upBack]: arrow7Unicode,
  [Buttons.up]: arrow8Unicode,
  [Buttons.upForward]: arrow9Unicode,
  [Buttons.light]: lightUnicode,
  [Buttons.medium]: mediumUnicode,
  [Buttons.heavy]: heavyUnicode,
  [Buttons.special1]: special1Unicode,
  [Buttons.special2]: special2Unicode,
  [Buttons.tag]: tagUnicode,
  [Buttons.dash]: dashUnicode,
  [Buttons.parry]: parryUnicode,
  [Buttons.then]: thenUnicode,
  [Buttons.or]: orUnicode,
  [Buttons.and]: plusUnicode,
  [Buttons.hold]: "[Hold]",
};

export function numberNotationForButton(button: Buttons): string {
  return numberNotationMap[button];
}

export function letterNotationForButton(button: Buttons): string {
  return letterNotationMap[button];
}

export function unicodeNotationForButton(button: Buttons): string {
  return unicodeNotationMap[button];
}

export function shortCodeForButton(button: Buttons): string {
  return shortCodeMap[button];
}

export function buttonForShortCode(letter: string): Buttons {
  return Object.keys(shortCodeMap).find(
    (key) => shortCodeMap[key as Buttons] === letter,
  ) as Buttons;
}
