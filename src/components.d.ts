/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface AepTable {
    'issetPagination': true;
  }
  interface AepTableAttributes extends StencilHTMLAttributes {
    'issetPagination'?: true;
  }

  interface MyComponent {
    'first': string;
    'last': string;
    'middle': string;
  }
  interface MyComponentAttributes extends StencilHTMLAttributes {
    'first'?: string;
    'last'?: string;
    'middle'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AepTable': Components.AepTable;
    'MyComponent': Components.MyComponent;
  }

  interface StencilIntrinsicElements {
    'aep-table': Components.AepTableAttributes;
    'my-component': Components.MyComponentAttributes;
  }


  interface HTMLAepTableElement extends Components.AepTable, HTMLStencilElement {}
  var HTMLAepTableElement: {
    prototype: HTMLAepTableElement;
    new (): HTMLAepTableElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLElementTagNameMap {
    'aep-table': HTMLAepTableElement
    'my-component': HTMLMyComponentElement
  }

  interface ElementTagNameMap {
    'aep-table': HTMLAepTableElement;
    'my-component': HTMLMyComponentElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
