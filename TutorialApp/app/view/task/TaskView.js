
Ext.define('TutorialApp.view.task.TaskView', {
    extend: 'Ext.grid.Panel',
    xtype: 'taskList',
    id : 'TaskGridID',
    controller: 'task',
    viewModel: {
        type: 'task'
    },
    bind: {
        store: '{tasks}'
    },

    title: 'Tasks',

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
        text: 'addressFrom',
        dataIndex: 'addressFrom',
        width: 230
    }, {
        text: 'Email',
        sortable: false,
        dataIndex: 'addressTo',
        field: {
            type: 'textfield'
        },
        editable : true
    }, {
        text: 'weight',
        dataIndex: 'weight',
        width: 150
    }, {
        text: 'fee',
        dataIndex: 'fee',
        width: 150
    }],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
                xtype: 'button',
                iconCls: 'x-fa fa-plus',
                text: 'add',
                handler: 'openNewTaskForm'
            },{
                xtype: 'button',
                iconCls: 'x-fa fa-refresh',
                text: 'Refresh',
                handler: 'refreshTask'
            }
        ]
    },{
        xtype: 'pagingtoolbar',
        bind: {
            store: '{tasks}'
        },
        dock: 'bottom',
        displayInfo: true
    }],

});
