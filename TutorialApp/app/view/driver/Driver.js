
Ext.define('TutorialApp.view.driver.Driver', {
    extend: 'Ext.panel.Panel',
    xtype: 'driver',
    id : 'DriverViewID',
    controller: 'driver',
    // viewModel: {
    //     type: 'driver'
    // },

    bodyPadding: 20,

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [{
        xtype: 'container',
        margin: '0 0 20 0',
        scrollable: true,
        flex: 1,
        layout: {
            type: 'hbox'
        },
        items: [{
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'right'
            },
            items : [{
                region: 'middle',
                xtype: 'driverList',
            }]
        }, {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'right'
            },
            split: true,
            items: [{
                region: 'west',
                xtype: 'driverAddUpdateForm',
                margin: '0 10 20 0',
                width : 270,
                collapsible: true,
                collapsed: true,
                flex: 1,
            },{
                region: 'west',
                xtype: 'driverTruckAsignForm',
                margin: '0 10 20 0',
                width : 270,
                collapsible: true,
                collapsed: true,
                flex: 1
            }]
        }
        ]
    }]

});
