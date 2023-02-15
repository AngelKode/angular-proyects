export interface PaisData{
  name:         Name;
  cca3:         string;
  altSpellings: string[];
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: NativeName;
}

export interface NativeName {
  isl: Isl;
}

export interface Isl {
  official: string;
  common:   string;
}
