
Ext.define('TutorialApp.view.abstract.AbstractGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'abstractGird',

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
    }],

    dockedItems: [{
        xtype: 'pagingtoolbar',
        bind: {
            store: '{drivers}'
        },
        dock: 'bottom',
        displayInfo: true
    }],

});
