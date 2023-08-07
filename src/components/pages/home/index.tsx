import {
  useMemo,
  useState,
  useDeferredValue,
  Suspense,
  useEffect,
} from "react";

import styles from "./multiselect-demo.module.scss";
import { GetOptionsSelect } from "../../../service/apiFake";
import { MultiSelect } from "../../multiSelectDemo";

interface OptionFakeType {
  name: string;
  selected: boolean;
  id: number;
}

export const Home = () => {
  const [toggle, setToggle] = useState(false);
  const [options, setOptions] = useState<OptionFakeType[] | []>([]);
  const [search, setSearch] = useState("");
  const deferredQuery = useDeferredValue(search);

  useEffect(() => {
    const resuest = async () => {
      try {
        const respose = await GetOptionsSelect();
        setOptions(respose.data);
      } catch (error) {
        console.error(error);
      }
    };

    void resuest();
  }, []);

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
    const value = currentTarget.value;

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
    <MultiSelect.Root className={styles.multiselectdemo}>
      <MultiSelect.Label className={styles.label}>
        <h3>Selecione suas frutas favoritas</h3>
      </MultiSelect.Label>
      <div className={styles._header} tabIndex={0}>
        {optionSelected.map((item) => (
          <MultiSelect.Chip key={item.id} className={styles.chip}>
            {item?.name}
          </MultiSelect.Chip>
        ))}

        <MultiSelect.Search
          placeholder="Pesuisar.."
          onClick={() => setToggle(true)}
          onChange={handleSearch}
          value={search}
          className={styles.search}
        />
        <MultiSelect.ChevronIcon
          height="24"
          width="24"
          className={styles[`_chevron${toggle ? "-rotate" : ""}`]}
        />
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
                className={styles.option}
              >
                {op.name}
              </MultiSelect.Option>
            ))}
        </Suspense>
      </MultiSelect.Toggle>
    </MultiSelect.Root>
  );
};
