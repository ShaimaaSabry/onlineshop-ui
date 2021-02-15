export class Page<T> {
    pageIndex: number;
    pageSize: number;
    itemsTotalCount: number;
    items: T[];
}