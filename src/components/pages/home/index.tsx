import { useMemo, useState, useDeferredValue, Suspense, useEffect } from "react";
import { MultiSelect } from "../../multiSelect";
import styles from './multiselect-demo.module.scss'
import { GetOptionsSelect } from "../../../service/apiFake";

type OptionFakeType = {
  name: string;
  selected: boolean;
  id: number;
};




export const Home = () => {
  const [toggle, setToggle] = useState(false);
  const [options, setOptions] = useState<OptionFakeType[] | []>([]);
  const [search, setSearch] = useState("");
  const deferredQuery = useDeferredValue(search);

  useEffect(() => {
    GetOptionsSelect().then(e => setOptions(e.data))
  }, [])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = event;
    setSearch(currentTarget.value);
  };
  const optionSelected = useMemo(
    () => options.filter((item) => item.selected),
    [options]
  );

  const handleClickOption = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = event;
    const value = currentTarget.value

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

    <MultiSelect.Root className={styles['multiselectdemo']} >
      <MultiSelect.Label>
        <h3>Selecione suas frutas favoritas</h3>
      </MultiSelect.Label>
      <div className={styles['_header']} tabIndex={0}>
        {optionSelected.map((item) => (
          <MultiSelect.Chip key={item.id}>{item?.name}</MultiSelect.Chip>
        ))}

        <MultiSelect.Search
          placeholder="Pesuisar.."
          onClick={() => setToggle(true)}
          onChange={handleSearch}
          value={search}
        />
        <MultiSelect.ChevronIcon height="24" width="24" className={styles[`_chevron${toggle ? '-rotate' : ''}`]} />
      </div>
      <MultiSelect.Toggle open={toggle}>
        <Suspense fallback={<h2>Loading...</h2>}>
          {options
            .filter((item) => item.name.includes(deferredQuery))
            .map((op) => (
              <MultiSelect.Option
                onClick={handleClickOption}
                value={op.id}
                aria-selected={op.selected}
                key={op.id}
              >
                {op.name}
              </MultiSelect.Option>
            ))}
        </Suspense>
      </MultiSelect.Toggle>
    </MultiSelect.Root>
  );
};
