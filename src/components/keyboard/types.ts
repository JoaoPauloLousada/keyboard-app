export enum KeyColor {
  WHITE = 'WHITE',
  BLACK = 'BLACK'
}

export enum KeyType {
  A = 'A',
  'A#' = 'A#',
  B = 'B',
  C = 'C',
  'C#' = 'C#',
  D = 'D',
  'D#' = 'D#',
  E = 'E',
  F = 'F',
  'F#' = 'F#',
  G = 'G',
  'G#' = 'G#',
}

export type KeyData = {
  value: string,
  color: KeyColor
  tone: KeyType
}