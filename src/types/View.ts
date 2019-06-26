import { Component } from 'react';

export interface ViewProps {
  model: any;
}

export class View<Props extends ViewProps, State = {}> extends Component<
  Props,
  State
> {}
