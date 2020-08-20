import { observable } from "mobx";
import { createContext } from "react";

class MedicalCategories {
  @observable kidey: string;
  @observable liver: string;
  @observable heart: string;
  @observable pancreas: string;
  @observable covid: string;
}

export const MedicalCategoriesContext = createContext(new MedicalCategories());
