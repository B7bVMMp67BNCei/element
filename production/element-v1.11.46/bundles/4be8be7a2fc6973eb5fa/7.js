(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1480:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(1),s=a.n(n),r=a(0),c=a.n(r),i=a(3),o=a(7),u=a(2),l=a(267),p=a(39),h=a(34),k=a(59),d=function(e){return e.BackingUp="backing_up",e.Done="done",e}(d||{});class b extends c.a.PureComponent{constructor(e){super(e),s()(this,"createBackup",(async()=>{let e;this.setState({error:void 0});const t=o.a.safeGet();try{await Object(l.b)((async()=>{e=await t.prepareKeyBackupVersion(null,{secureSecretStorage:!0}),e=await t.createKeyBackupVersion(e)})),await t.scheduleAllGroupSessionsForBackup(),this.setState({phase:d.Done})}catch(n){var a;i.a.error("Error creating key backup",n),null!==(a=e)&&void 0!==a&&a.version&&t.deleteKeyBackupVersion(e.version),this.setState({error:!0})}})),s()(this,"onCancel",(()=>{this.props.onFinished(!1)})),s()(this,"onDone",(()=>{this.props.onFinished(!0)})),this.state={phase:d.BackingUp,passPhrase:"",passPhraseValid:!1,passPhraseConfirm:"",copied:!1,downloaded:!1}}componentDidMount(){this.createBackup()}renderBusyPhase(){return c.a.createElement("div",null,c.a.createElement(p.a,null))}renderPhaseDone(){return c.a.createElement("div",null,c.a.createElement("p",null,Object(u.b)("settings|key_backup|backup_in_progress")),c.a.createElement(k.a,{primaryButton:Object(u.b)("action|ok"),onPrimaryButtonClick:this.onDone,hasCancel:!1}))}titleForPhase(e){switch(e){case d.BackingUp:return Object(u.b)("settings|key_backup|backup_starting");case d.Done:return Object(u.b)("settings|key_backup|backup_success");default:return Object(u.b)("settings|key_backup|create_title")}}render(){let e;if(this.state.error)e=c.a.createElement("div",null,c.a.createElement("p",null,Object(u.b)("settings|key_backup|cannot_create_backup")),c.a.createElement(k.a,{primaryButton:Object(u.b)("action|retry"),onPrimaryButtonClick:this.createBackup,hasCancel:!0,onCancel:this.onCancel}));else switch(this.state.phase){case d.BackingUp:e=this.renderBusyPhase();break;case d.Done:e=this.renderPhaseDone()}return c.a.createElement(h.a,{className:"mx_CreateKeyBackupDialog",onFinished:this.props.onFinished,title:this.titleForPhase(this.state.phase),hasCancel:[d.Done].includes(this.state.phase)},c.a.createElement("div",null,e))}}}}]);
//# sourceMappingURL=7.js.map