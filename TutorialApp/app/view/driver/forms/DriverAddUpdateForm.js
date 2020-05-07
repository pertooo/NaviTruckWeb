Ext.define('TutorialApp.view.driver.forms.DriverAddUpdateForm', {
    extend: 'Ext.form.Panel',
    xtype: 'widget.driverAddUpdateForm',

    controller: 'driver',
    viewModel: {
        type: 'driver'
    },
    title: 'New Truck User',
    defaultType: 'textfield',
    bodyPadding: 5,
 //   renderTo: Ext.getBody(),
//    floating: true,
 //   closable: true,
    fieldDefaults: {
        anchor: '100%',
        labelAlign: 'right'
    },
    items: [{
        fieldLabel: 'username',
        name: 'username',
        allowBlank: false
    }, {
        xtype: 'container',
        layout: {
            type: 'hbox',
            align: 'right'
        },
        items : [{
            xtype : 'checkbox',
            fieldLabel: 'team',
            name: 'team',
            allowBlank: false
        }, {
            xtype : 'checkbox',
            fieldLabel: 'available',
            name: 'available',
            allowBlank: false,
            checked: true
        }]
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'footer',
        items: ['->', {
            iconCls: 'icon-user-add',
            text: 'Create',
            scope: this.controller,
            handler: 'onCreate'
        }]
    }]

});
