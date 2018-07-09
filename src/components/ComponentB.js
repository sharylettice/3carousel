import React, { Component } from 'react';
import './ComponentB.css'
class ComponentB extends Component {
    constructor(props){
        super(props){
            this.state={
                data:this.props.data,
                selectedIndex:this.props.selectedIndex+1

            }
        }
    }
    render() {
        const { onNarrow } = this.props
        return (
            <div className="div">
                <div className="header">
                    <h1>ComponentB</h1>
                    <input className="btnExtend" type="button" value="缩小" onClick={onNarrow} />
                </div>
                <div className="content">
                    <p>ComponentB</p>
                    <p>ComponentB</p>
                    <p>ComponentB</p>
                    <p>ComponentB</p>
                    <p>ComponentB</p>
                    <p>ComponentB</p>
                    <p>ComponentB</p>
                    <p>ComponentB</p>
                    <p>ComponentB</p>
                    <p>ComponentB</p>
                </div>
            </div>
        );
    }
    onClickTab(item, index) {
        let { selectedIndex, data } = this.state;
        if (index === 2) {
            if (selectedIndex >= 1 && selectedIndex < data.length) {
                selectedIndex += 1;
            } else {
                selectedIndex = 1
            }
        }
        if (index === 0) {
            if (selectedIndex > 1 && selectedIndex <= data.length) {
                selectedIndex += -1
            } else {
                selectedIndex = data.length;
            }
        }
        this.setStateSync({
            selectedIndex: selectedIndex
        })
    }
}
handleData(){
    if (!this.state.data || !this.state.data.length) return
    let data = this.state.data.map((item) => {
        let nameInfo = this.props.iconList.find(t => {
            return t.type === item.type;
        });
        return {
            ...item,
            iconFont: "icon-" + (nameInfo && nameInfo.icon)
        }
    }) || []
    let newData = [data[data.length - 1], ...data, data[0]]
    const resultList = newData.slice(this.state.selectedIndex - 1, this.state.selectedIndex + 2);
    return resultList
}
// 定时器
startTimer(props){
    let { data, playTime, selectedIndex } = props;
    TImerManage.cancelTimer(this.timer);
    this.timer = TimerManage.requestTimer(() => {
        if (selectedIndex < data.length) {
            selectedIndex++;
        } else {
            selectedIndex = 1
        }
        this.setStateSync({
            selectedIndex: selectedIndex
        })
    }, playTime)

}
export default ComponentB;
