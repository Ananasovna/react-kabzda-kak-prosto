import {Select} from "../components/select/Select";
import React, {useMemo, useState} from "react";

export default {
    title: 'select with useMemo'
}

export type CityInfoType = {
    title: string
    value: string
    population: number
}

export const SelectWithUseMemo = () => {

    const [selectValue, setSelectValue] = useState(undefined)
    const [counter, setCounter] = useState(0)

    const data: CityInfoType[] = [
        {title: 'Kaliningrad', value: 'rus', population: 150000},
        {title: 'Tokio', value: 'jap', population: 2500000},
        {title: 'Moscow', value: 'rus', population: 3000000},
    ]

    const [cities, setCities] = useState(data);

    const russianCities = useMemo(() => {
        return cities.filter((city, index) => city.value === 'rus');
    }, [cities])

    const citiesWithI = useMemo(() => {
        return cities.filter((city, index) => city.title.toLocaleLowerCase().includes('i'));
    }, [cities])

    const citiesPopulatedOverMillion = useMemo(() => {
        return cities.filter((city, index) => city.population >= 1000000);
    }, [cities])

    const addCity = () => {
        setCities([...cities, {title: 'Saint-Petersburg', value: 'rus', population: 150000}])
    }

        return (
            <div>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                {counter}
                <button onClick={addCity}>add city</button>
                <MemoizedSelect value={selectValue} onClick={setSelectValue} items={russianCities} />
                <MemoizedSelect value={selectValue} onClick={setSelectValue} items={citiesWithI} />
                <MemoizedSelect value={selectValue} onClick={setSelectValue} items={citiesPopulatedOverMillion} />
            </div>

    )
}

const MemoizedSelect = React.memo(Select)