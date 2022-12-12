export interface Subclass {
  name: string; // TODO: Enum instead of string?
  baseHealth: number;
  baseToughness: number;
  meleeWeapons?: any[]; // TODO: Update type and make required
  rangedWeapons?: any[]; // TODO: Update type and make required
  talents?: any[]; // TODO: Update type and make required
}
