Ext.define('TutorialApp.view.driver.DriverView', {
    extend: 'Ext.grid.Panel',
    xtype: 'driverList',
    id : 'DriverGridID',
    controller: 'driver',
    width : 650,
    viewModel: {
        type: 'driver'
    },
    bind: {
        store: '{drivers}'
    },

    title: 'Truck Drivers',

    plugins: {
        cellediting: true
    },

    columns: [{
        text: 'ID',
        dataIndex: 'id',
        width: 50,
        cell: {
            userCls: 'bold'
        }
    },{
        text: 'username',
        dataIndex: 'username',
        width: 150
    },{
        text: 'Truck',
 //       dataIndex: 'team',
        width: 150
    },{
        text: 'confirmed',
        dataIndex: 'confirmed',
        width: 100
    }, {
        text: 'team',
        dataIndex: 'team',
        width: 100,
        field: {
            type: 'boolean'
        },
        editable : true
    }, {
        text: 'available',
        dataIndex: 'available',
        width:100,
        field: {
            type: 'boolean'
        },
        editable : true
    }],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype: 'button',
            iconCls: 'x-fa fa-refresh',
            text: 'Refresh Truck Users',
            handler: 'refreshTruckUsers'
        },{
            xtype: 'button',
            iconCls: 'x-fa fa-reset',
            text: 'Reset Password',
            scope: this.controller,
            handler: 'resetPassword'
        }
        ]
    },
        {
        xtype: 'pagingtoolbar',
        bind: {
            store: '{drivers}'
        },
        dock: 'bottom',
        displayInfo: true
    }],

});
