
Ext.define('TutorialApp.view.truck.TruckView', {
    extend: 'Ext.grid.Panel',
    xtype: 'truckList',
    id : 'TruckGridID',
    controller: 'truck',
    viewModel: {
        type: 'truck'
    },
    bind: {
        store: '{trucks}'
    },

    title: 'Trucks',

    plugins: {
        cellediting: true
    },

    columns: [{
        text: 'ID',
        dataIndex: 'id',
        width: 100,
        cell: {
            userCls: 'bold'
        }
    }, {
        text: 'name',
        dataIndex: 'name',
        field: {
            type: 'textfield'
        },
        editable : true,
        width: 230
    },{
        text: 'max_weight',
        dataIndex: 'max_weight',
        width: 150
    }],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype: 'button',
            iconCls: 'x-fa fa-plus',
            text: 'add',
            handler: 'openNewTruckForm'
        },{
            xtype: 'button',
            iconCls: 'x-fa fa-refresh',
            text: 'Refresh',
            handler: 'refreshTrucks'
        }
        ]
    },{
        xtype: 'pagingtoolbar',
        bind: {
            store: '{drivers}'
        },
        dock: 'bottom',
        displayInfo: true
    }],

});
