// Board related types
export type BoardData = {
    id: string;
    name: string;
    elements: BoardElement[];
    lastModified: Date;
    created: Date;
    users: BoardUser[];
    createdBy: BoardUser;
  };
  
  export type BoardRole = 'owner' | 'editor' | 'viewer';
  
  export type BoardUser = {
    id: string;
    role: BoardRole;
  };
  
  // BoardElement related types
  export type BoardElement = {
    id: string;
    type: string;
    data: ElementData;
  };
  
  export type ElementData = {
    properties: ElementProperty[];
  };
  
  export type ElementProperty = {
    name: string;
    value: string;
  };
  
  // ElementProperties and its derivatives
  export type ElementProperties = {
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
  };
  
  export type TextElementProperties = ElementProperties & {
    text: string;
    fontSize: number;
  };
  
  export type ImageElementProperties = ElementProperties & {
    src?: string;
  };
  