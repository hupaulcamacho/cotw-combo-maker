// https://www.riotgames.com/en/news/play-2xko-evo-japan-2024

export interface Combo {
  gameVersion: string;
  characterId: number;
  damage?: number;
  hitCount?: number;
  sequence: Glyph[];
}

export enum Glyph {
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

export function svgForButton(glyph: Glyph): string {
  const svgMap: { [key in Glyph]: string } = {
    [Glyph.downBack]: "1.svg",
    [Glyph.down]: "2.svg",
    [Glyph.downForward]: "3.svg",
    [Glyph.back]: "4.svg",
    [Glyph.neutral]: "5.svg",
    [Glyph.forward]: "6.svg",
    [Glyph.upBack]: "7.svg",
    [Glyph.up]: "8.svg",
    [Glyph.upForward]: "9.svg",
    [Glyph.light]: "L.svg",
    [Glyph.medium]: "M.svg",
    [Glyph.heavy]: "H.svg",
    [Glyph.special1]: "S1.svg",
    [Glyph.special2]: "S2.svg",
    [Glyph.tag]: "tag.svg",
    [Glyph.dash]: "dash.svg",
    [Glyph.parry]: "parry.svg",
    [Glyph.then]: "then.svg",
    [Glyph.or]: "or.svg",
    [Glyph.and]: "plus.svg",
    [Glyph.hold]: "hold.svg",
  };

  return svgMap[glyph];
}

export function sequenceSvgForButton(glyph: Glyph): string {
  const svgMap: { [key in Glyph]: string } = {
    [Glyph.downBack]: "1-lg.svg",
    [Glyph.down]: "2-lg.svg",
    [Glyph.downForward]: "3-lg.svg",
    [Glyph.back]: "4-lg.svg",
    [Glyph.neutral]: "5-lg.svg",
    [Glyph.forward]: "6-lg.svg",
    [Glyph.upBack]: "7-lg.svg",
    [Glyph.up]: "8-lg.svg",
    [Glyph.upForward]: "9-lg.svg",
    [Glyph.light]: "L.svg",
    [Glyph.medium]: "M.svg",
    [Glyph.heavy]: "H.svg",
    [Glyph.special1]: "S1.svg",
    [Glyph.special2]: "S2.svg",
    [Glyph.tag]: "tag.svg",
    [Glyph.dash]: "dash.svg",
    [Glyph.parry]: "parry.svg",
    [Glyph.then]: "then-lg.svg",
    [Glyph.or]: "or-lg.svg",
    [Glyph.and]: "plus-lg.svg",
    [Glyph.hold]: "hold.svg",
  };

  return svgMap[glyph];
}

const numberNotationMap: { [key in Glyph]: string } = {
  [Glyph.downBack]: "1",
  [Glyph.down]: "2",
  [Glyph.downForward]: "3",
  [Glyph.back]: "4",
  [Glyph.neutral]: "5",
  [Glyph.forward]: "6",
  [Glyph.upBack]: "7",
  [Glyph.up]: "8",
  [Glyph.upForward]: "9",
  [Glyph.light]: "L",
  [Glyph.medium]: "M",
  [Glyph.heavy]: "H",
  [Glyph.special1]: "S1",
  [Glyph.special2]: "S2",
  [Glyph.tag]: "T",
  [Glyph.dash]: "D",
  [Glyph.parry]: "P",
  [Glyph.then]: " > ",
  [Glyph.or]: "|",
  [Glyph.and]: "+",
  [Glyph.hold]: "[Hold]",
};

const shortCodeMap: { [key in Glyph]: string } = {
  [Glyph.downBack]: "1",
  [Glyph.down]: "2",
  [Glyph.downForward]: "3",
  [Glyph.back]: "4",
  [Glyph.neutral]: "5",
  [Glyph.forward]: "6",
  [Glyph.upBack]: "7",
  [Glyph.up]: "8",
  [Glyph.upForward]: "9",
  [Glyph.light]: "L",
  [Glyph.medium]: "M",
  [Glyph.heavy]: "H",
  [Glyph.special1]: "X",
  [Glyph.special2]: "Y",
  [Glyph.tag]: "T",
  [Glyph.dash]: "D",
  [Glyph.parry]: "P",
  [Glyph.then]: ">",
  [Glyph.or]: "|",
  [Glyph.and]: "+",
  [Glyph.hold]: "h",
};

const letterNotationMap: { [key in Glyph]: string } = {
  [Glyph.downBack]: "db",
  [Glyph.down]: "d",
  [Glyph.downForward]: "df",
  [Glyph.back]: "b",
  [Glyph.neutral]: "n",
  [Glyph.forward]: "f",
  [Glyph.upBack]: "ub",
  [Glyph.up]: "u",
  [Glyph.upForward]: "uf",
  [Glyph.light]: "L",
  [Glyph.medium]: "M",
  [Glyph.heavy]: "H",
  [Glyph.special1]: "S1",
  [Glyph.special2]: "S2",
  [Glyph.tag]: "T",
  [Glyph.dash]: "D",
  [Glyph.parry]: "P",
  [Glyph.then]: " > ",
  [Glyph.or]: "|",
  [Glyph.and]: "+",
  [Glyph.hold]: "[Hold]",
};

const unicodeNotationMap: { [key in Glyph]: string } = {
  [Glyph.downBack]: arrow1Unicode,
  [Glyph.down]: arrow2Unicode,
  [Glyph.downForward]: arrow3Unicode,
  [Glyph.back]: arrow4Unicode,
  [Glyph.neutral]: arrow5Unicode,
  [Glyph.forward]: arrow6Unicode,
  [Glyph.upBack]: arrow7Unicode,
  [Glyph.up]: arrow8Unicode,
  [Glyph.upForward]: arrow9Unicode,
  [Glyph.light]: lightUnicode,
  [Glyph.medium]: mediumUnicode,
  [Glyph.heavy]: heavyUnicode,
  [Glyph.special1]: special1Unicode,
  [Glyph.special2]: special2Unicode,
  [Glyph.tag]: tagUnicode,
  [Glyph.dash]: dashUnicode,
  [Glyph.parry]: parryUnicode,
  [Glyph.then]: thenUnicode,
  [Glyph.or]: orUnicode,
  [Glyph.and]: plusUnicode,
  [Glyph.hold]: "[Hold]",
};

export function numberNotationForButton(button: Glyph): string {
  return numberNotationMap[button];
}

export function letterNotationForButton(button: Glyph): string {
  return letterNotationMap[button];
}

export function unicodeNotationForButton(button: Glyph): string {
  return unicodeNotationMap[button];
}

export function shortCodeForButton(button: Glyph): string {
  return shortCodeMap[button];
}

export function buttonForShortCode(letter: string): Glyph {
  return Object.keys(shortCodeMap).find(
    (key) => shortCodeMap[key as Glyph] === letter,
  ) as Glyph;
}
