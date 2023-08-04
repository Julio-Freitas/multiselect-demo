import { useMemo, useState, useDeferredValue, Suspense } from "react";
import { MultiSelect } from "../../multiSelect";

type OptionFakeType = {
  name: string;
  selected: boolean;
  id: number;
};
const optionsFake = [
  {
    name: "options1",
    selected: false,
    id: 1,
  },
  {
    name: "op 2",
    selected: false,
    id: 2,
  },
  {
    name: "sempre 2",
    selected: false,
    id: 3,
  },
];

export const Home = () => {
  const [toggle, setToggle] = useState(false);
  const [options, setOptions] = useState<OptionFakeType[] | []>(optionsFake);
  const [search, setSearch] = useState("");
  const deferredQuery = useDeferredValue(search);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = event;
    setSearch(currentTarget.value);
    // const findOPtions = options.filter((op) =>
    //   op.name.includes(currentTarget.value)
    // );
    // setOptions(findOPtions);
  };
  const optionSelected = useMemo(
    () => options.filter((item) => item.selected),
    [options]
  );

  const handleClickOption = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = event;
    const value = currentTarget?.getAttribute("aria-value");

    setOptions((prevOptions) => {
      const updatedOptions = prevOptions.map((option) => {
        if (option.id === Number(value)) {
          return {
            ...option,
            selected: !option.selected,
          };
        }
        return option;
      });
      return updatedOptions;
    });
  };

  return (
    <form>
      <MultiSelect.Root>
        <MultiSelect.Label>
          <p>Nome</p>
        </MultiSelect.Label>
        <div>
          {optionSelected.map((item) => (
            <span>{item?.name}</span>
          ))}

          <MultiSelect.Search
            placeholder="Pesuisar.."
            onClick={() => setToggle(!toggle)}
            onChange={handleSearch}
            value={search}
          />
        </div>

        <MultiSelect.Toggle open={toggle}>
          <Suspense fallback={<h2>Loading...</h2>}>
            {options
              .filter((item) => item.name.includes(deferredQuery))
              .map((op) => (
                <MultiSelect.Chip
                  onClick={handleClickOption}
                  aria-value={op.id}
                >
                  {op.name}
                </MultiSelect.Chip>
              ))}

          </Suspense>
        </MultiSelect.Toggle>
      </MultiSelect.Root>
    </form>
  );
};
