

export function filterDatas(searchText, restaurants) {
    const formattedSearchText = searchText.toLowerCase().replace(/\./g, "");
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().replace(/\./g, "").includes(formattedSearchText)
    );
    return filterData;
  }