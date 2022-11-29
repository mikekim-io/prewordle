const UPDATE_ROW_INDEX = 'UPDATE_ROW_INDEX';

export const updateRowIndex = () => ({
  type: UPDATE_ROW_INDEX,
});

export default function updateRowIndexReucer(rowIndex = 0, action) {
  switch (action.type) {
    case UPDATE_ROW_INDEX:
      return rowIndex + 1;
    default:
      return rowIndex;
  }
}
