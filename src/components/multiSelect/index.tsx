import { MultiSelectRoot } from "./MultiSelect";
import { Label } from "./Label";
import { Toggle } from "./Toggle";
import { Chip } from "./Chip";
import { Search } from "./Search";

export const MultiSelect = {
  Root: MultiSelectRoot,
  Label,
  Toggle,
  Chip,
  Search,
};



{/* <MultiSelect>
  <MultiSelect.Label>Label</MultiSelect.Label>
  <MultiSelect.Toggle>
    {selectedOptions.map((selected) => (
      <MultiSelect.Chip removable onClick>
        Selected name
      </MultiSelect.Chip>
    ))}
    <MultiSelect.Search placeholder />
  </MultiSelect.Toggle>

  <MultiSelect.List onScrollEnd>
    <MultiSelect.SelectAll>Selecionar todos</MultiSelect.SelectAll>
    {options.map((option) => (
      <MultiSelect.Option
        value
        onClick
        checked={selectedOptions.includes(option)}
      >
        {option.text}
      </MultiSelect.Option>
    ))}
  </MultiSelect.List>
</MultiSelect>; */}
