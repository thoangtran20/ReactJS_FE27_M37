import { Component } from "react";

export default class DemoComp extends Component {
  constructor(props) {
    this.state = {
      state: 'asdagad',
    }
  }
  
  // Kiểm soát việc liệu component có được render lại hay không
  // True => re-render
  // false => khong re-render
  shouldComponentUpdate(nextProps, nextState) {
    if('dieu kien gi do') {
      return false
    }

    return true;
  }

  // Chạy ngay sau lần render thứ 2 trở đi (chạy sau hàm render)
  componentDidUpdate() {

  }

  // Chay trước khi component unmount (biến mất khỏi cây DOM)
  componentWillUnmount() {
    /// Ket thuc chu ky
    /// close setInterval
    /// close setTimeout
  }

  //
  componentDidMount() {

    /// Dat thai loading

    /// Lay data
    /// 1. Tu API
    /// 2. localStorage
    /// 3. doc file
    /// Khoi tao moi thu o day
    /// setInterval
    /// setTimeout
  }

  render() {
    return <div></div>
  }
}