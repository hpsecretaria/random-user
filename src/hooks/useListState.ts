import { useState } from "react";

export function useListState<T>(initialState: T[] = []) {
    const [items, setItems] = useState<T[]>(initialState);

    function addItem(item: T) {
        setItems((currentItems: T[]) =>[...currentItems,item]);
    }

    function removeItem(item:T) {
        setItems((currentItems: T[]) => [...currentItems].filter(c => c !== item));
    }

    return {items, addItem, removeItem};
}