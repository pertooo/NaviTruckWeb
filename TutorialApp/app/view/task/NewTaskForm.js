Ext.define('TutorialApp.view.task.NewTaskForm', {
    extend: 'Ext.form.Panel',
    xtype: 'widget.newTask',

    controller: 'newTask',
    viewModel: {
        type: 'task'
    },
    iconCls: 'icon-user',
    title: 'New Task    ',
    defaultType: 'textfield',
    bodyPadding: 5,
    renderTo: Ext.getBody(),
    floating: true,
    closable: true,
    fieldDefaults: {
        anchor: '100%',
        labelAlign: 'right'
    },
    items: [{
        fieldLabel: 'addressFrom',
        name: 'addressFrom',
        allowBlank: false
    }, {
        fieldLabel: 'addressTo',
        name: 'addressTo',
        allowBlank: false
    }, {
        xtype: 'datefield',
        fieldLabel: 'pickupTime',
        value: null,
        name: 'pickupTimeStr',
        allowBlank: true
    }, {
        xtype: 'datefield',
        fieldLabel: 'unloadTime',
        value: null,
        name: 'unloadTimeStr',
        allowBlank: true
    }, {
        xtype: 'numberfield',
        fieldLabel: 'weight',
        name: 'weight',
        allowBlank: false
    }, {
        xtype: 'numberfield',
        fieldLabel: 'fee',
        name: 'fee',
        allowBlank: false
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'footer',
        items: ['->', {
            iconCls: 'icon-user-add',
            text: 'Create',
            id : 'create',
            scope: this.controller,
            handler: 'onCreate'
        },{
            iconCls: 'icon-user-add',
            id : 'createSend',
            text: 'Create & Send',
            scope: this.controller,
            handler: 'onCreate'
        }, {
            iconCls: 'icon-reset',
            text: 'Reset',
            handler: 'onReset'
        }]
    }]

});
