Ext.define('TutorialApp.view.driver.forms.DriverTruckAsignForm', {
    extend: 'Ext.form.Panel',
    xtype: 'widget.driverTruckAsignForm',

    controller: 'driver',
    viewModel: {
        type: 'driver'
    },
    iconCls: 'icon-user',
    title: 'Asign Driver to Truck',
    bodyPadding: 5,
    //   renderTo: Ext.getBody(),
//    floating: true,
    //   closable: true,
    fieldDefaults: {
        anchor: '100%',
        labelAlign: 'right'
    },
    items: [{
        xtype : 'combobox',
        fieldLabel: 'Choose Truck:',
        name: 'truck',
        allowBlank: false
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'footer',
        items: ['->', {
            iconCls: 'icon-user-add',
            text: 'Asign',
        //    id : 'create',
            scope: this.controller,
            //       handler: 'onCreate'
        }]
    }]

});
