(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1702:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var s=n(1),a=n.n(s),o=n(0),r=n.n(o),i=n(2),c=n(24),l=n(5),u=n(11),m=n(179),g=n(1358),b=n(15),d=n(48),h=n(34),p=n(59);class C extends r.a.Component{constructor(e){super(e),a()(this,"updateCurrentRoom",(async e=>{var t,n,s,a;const o=g.a.get();if(!o)return;let r;try{r=await o.getStats()}catch{return}let i=null;e&&(i=e.name);const c=o.crawlingRooms(),l=c.crawlingRooms.size,u=c.totalRooms.size;this.setState({eventIndexSize:null!==(t=null===(n=r)||void 0===n?void 0:n.size)&&void 0!==t?t:0,eventCount:null!==(s=null===(a=r)||void 0===a?void 0:a.eventCount)&&void 0!==s?s:0,crawlingRoomsCount:l,roomCount:u,currentRoom:i})})),a()(this,"onDisable",(async()=>{const e=(await n.e(40).then(n.bind(null,1684))).default;u.b.createDialog(e,void 0,void 0,!1,!0)})),a()(this,"onCrawlerSleepTimeChange",(e=>{this.setState({crawlerSleepTime:parseInt(e.target.value,10)}),l.b.setValue("crawlerSleepTime",null,b.a.DEVICE,e.target.value)})),this.state={eventIndexSize:0,eventCount:0,crawlingRoomsCount:0,roomCount:0,currentRoom:null,crawlerSleepTime:l.b.getValueAt(b.a.DEVICE,"crawlerSleepTime")}}componentWillUnmount(){const e=g.a.get();null!==e&&e.removeListener("changedCheckpoint",this.updateCurrentRoom)}async componentDidMount(){let e=0,t=0,n=0,s=0,a=null;const o=g.a.get();if(null!==o){o.on("changedCheckpoint",this.updateCurrentRoom);try{const t=await o.getStats();t&&(e=t.size,s=t.eventCount)}catch{}const r=o.crawlingRooms();t=r.crawlingRooms.size,n=r.totalRooms.size;const i=o.currentRoom();i&&(a=i.name)}this.setState({eventIndexSize:e,eventCount:s,crawlingRoomsCount:t,roomCount:n,currentRoom:a})}render(){const e=c.b.get().brand;let t;t=null===this.state.currentRoom?Object(i.b)("settings|security|message_search_indexing_idle"):Object(i.b)("settings|security|message_search_indexing",{currentRoom:this.state.currentRoom});const n=Math.max(0,this.state.roomCount-this.state.crawlingRoomsCount),s=r.a.createElement("div",null,Object(i.b)("settings|security|message_search_intro",{brand:e}),r.a.createElement("div",{className:"mx_SettingsTab_subsectionText"},t,r.a.createElement("br",null),Object(i.b)("settings|security|message_search_space_used")," ",Object(m.a)(this.state.eventIndexSize,0),r.a.createElement("br",null),Object(i.b)("settings|security|message_search_indexed_messages")," ",Object(m.c)(this.state.eventCount),r.a.createElement("br",null),Object(i.b)("settings|security|message_search_indexed_rooms")," ",Object(i.b)("settings|security|message_search_room_progress",{doneRooms:Object(m.c)(n),totalRooms:Object(m.c)(this.state.roomCount)})," ",r.a.createElement("br",null),r.a.createElement(d.a,{label:Object(i.b)("settings|security|message_search_sleep_time"),type:"number",value:this.state.crawlerSleepTime.toString(),onChange:this.onCrawlerSleepTimeChange})));return r.a.createElement(h.a,{className:"mx_ManageEventIndexDialog",onFinished:this.props.onFinished,title:Object(i.b)("settings|security|message_search_section")},s,r.a.createElement(p.a,{primaryButton:Object(i.b)("action|done"),onPrimaryButtonClick:this.props.onFinished,primaryButtonClass:"primary",cancelButton:Object(i.b)("action|disable"),onCancel:this.onDisable,cancelButtonClass:"danger"}))}}}}]);
//# sourceMappingURL=41.js.map