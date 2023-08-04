type OptionType = {
    name: string;
    selected: boolean;
    id: number;
}

export interface OptionResponseFakeType {
    data: OptionType[]
  }