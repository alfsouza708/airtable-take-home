/**
 * Takes an array of items and assigns them to lanes based on start/end dates.
 * @returns an array of arrays containing items.
 */
export function assignLanes(items) {
    const sortedItems = items.sort((a, b) =>
        new Date(a.start) - new Date(b.start)
    );
    
    return sortedItems;
}
