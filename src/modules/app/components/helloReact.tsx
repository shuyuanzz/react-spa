import React from "react";
import { inject, observer } from "mobx-react";
@inject('store')
@observer
export default class HelloReact extends React.Component<any,any> {
    render() {
        const {store} = this.props;
        return <div>{store.test}</div>
    }
}
