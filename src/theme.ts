export type ThemeName = "neon" | "ember";

export const THEME_STORAGE_KEY = "portfolio-theme";

export const THEME_OPTIONS: Array<{ value: ThemeName; label: string }> = [
  { value: "neon", label: "Neon" },
  { value: "ember", label: "Ember" },
];

export const THEME_VISUALS: Record<
  ThemeName,
  {
    iridescenceColor: [number, number, number];
    iridescenceSpeed: number;
    iridescenceAmplitude: number;
  }
> = {
  neon: {
    iridescenceColor: [0.38, 0.86, 1],
    iridescenceSpeed: 0.55,
    iridescenceAmplitude: 0.08,
  },
  ember: {
    iridescenceColor: [1, 0.69, 0.36],
    iridescenceSpeed: 0.48,
    iridescenceAmplitude: 0.06,
  },
};
