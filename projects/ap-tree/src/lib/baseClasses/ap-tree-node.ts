export class ApFormatNodeEventArgument {
    dataItem: any;
    level: number;
    element: HTMLElement;
    constructor(dataItem: any, element: HTMLElement, level: number) {
        this.dataItem = dataItem;
        this.element = element;
        this.level = level;
    }
}