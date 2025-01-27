import { GridCellValue } from '../gridCell';
import { GridRowId, GridRowModel } from '../gridRows';
import type { GridColumns } from '../colDef';

/**
 * Object passed as parameter in the column [[GridColDef]] cell renderer.
 */
export interface GridRowParams {
  /**
   * The grid row id.
   */
  id: GridRowId;
  /**
   * The row model of the row that the current cell belongs to.
   */
  row: GridRowModel;
  /**
   * All grid columns.
   */
  columns: GridColumns;
  /**
   * Get the cell value of a row and field.
   * @param id
   * @param field
   */
  getValue: (id: GridRowId, field: string) => GridCellValue;
}
