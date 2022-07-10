export interface TreeNodeModel   {
    showForm?: boolean;
    type? : 'folder' | 'file' | 'unset' | null;
    name? : string;
    children? : TreeNodeModel[];
    id? : any;
}
