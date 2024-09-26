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
  lightPunch = "LP",
  mediumPunch = "MP",
  heavyPunch = "HP",
  punch = "P",
  lightKick = "LK",
  mediumKick = "MK",
  heavyKick = "HK",
  kick = "K",
  then = ">",
  or = "|",
  and = "+",
  hold = "Hold",
}

export const halfWidthSpace = "\u{2009}";
export const lightUnicode = "\u{1F15B}";
export const mediumUnicode = "\u{1F15C}";
export const heavyUnicode = "\u{1F157}";
export const punchUnicode = "\u{1F44A}";
export const kickUnicode = "\u{1F45F}";
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
    [Glyph.lightPunch]: "LP.svg",
    [Glyph.mediumPunch]: "MP.svg",
    [Glyph.heavyPunch]: "HP.svg",
    [Glyph.punch]: "P.svg",
    [Glyph.lightKick]: "LK.svg",
    [Glyph.mediumKick]: "MK.svg",
    [Glyph.heavyKick]: "HK.svg",
    [Glyph.kick]: "K.svg",
    [Glyph.then]: "then.svg",
    [Glyph.or]: "or.svg",
    [Glyph.and]: "plus.svg",
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
  [Glyph.lightPunch]: "LP",
  [Glyph.mediumPunch]: "MP",
  [Glyph.heavyPunch]: "HP",
  [Glyph.punch]: "P",
  [Glyph.lightKick]: "LK",
  [Glyph.mediumKick]: "MK",
  [Glyph.heavyKick]: "HK",
  [Glyph.kick]: "K",
  [Glyph.then]: " > ",
  [Glyph.or]: "|",
  [Glyph.and]: ".",
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
  [Glyph.lightPunch]: "q",
  [Glyph.mediumPunch]: "w",
  [Glyph.heavyPunch]: "e",
  [Glyph.punch]: "p",
  [Glyph.lightKick]: "a",
  [Glyph.mediumKick]: "s",
  [Glyph.heavyKick]: "d",
  [Glyph.kick]: "k",
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
  [Glyph.lightPunch]: "LP",
  [Glyph.mediumPunch]: "MP",
  [Glyph.heavyPunch]: "HP",
  [Glyph.punch]: "P",
  [Glyph.lightKick]: "LK",
  [Glyph.mediumKick]: "MK",
  [Glyph.heavyKick]: "HK",
  [Glyph.kick]: "K",
  [Glyph.then]: " > ",
  [Glyph.or]: "|",
  [Glyph.and]: ".",
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
  [Glyph.lightPunch]: lightUnicode + punchUnicode,
  [Glyph.mediumPunch]: mediumUnicode + punchUnicode,
  [Glyph.heavyPunch]: heavyUnicode + punchUnicode,
  [Glyph.punch]: punchUnicode,
  [Glyph.lightKick]: lightUnicode + kickUnicode,
  [Glyph.mediumKick]: mediumUnicode + kickUnicode,
  [Glyph.heavyKick]: heavyUnicode + kickUnicode,
  [Glyph.kick]: kickUnicode,
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
