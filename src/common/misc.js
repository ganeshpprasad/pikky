// ARRAY fns
export const removeItemFromArray = (array, item) => {
    let _array = [...array];
    let index = _array.indexOf(item);
    if (index !== -1) {
        _array.splice(index, 1);
    }
    return _array;
};

export const removeIndexFromArray = (array, index) => {
    let _array = [...array];
    if (index !== -1) {
        _array.splice(index, 1);
    }
    return _array;
};
