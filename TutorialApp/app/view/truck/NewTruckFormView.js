Ext.define('TutorialApp.view.truck.NewTruckFormView', {
    extend: 'Ext.form.Panel',
    xtype: 'widget.newTruckForm',

    controller: 'newTruck',
    viewModel: {
        type: 'truck'
    },
    title: 'New Truck',
    defaultType: 'combobox',
    bodyPadding: 5,
    renderTo: Ext.getBody(),
    floating: true,
    closable: true,
    fieldDefaults: {
        anchor: '100%',
        labelAlign: 'right'
    },
    layout: {
        type: 'hbox',
        align: 'top'
    },
    items: [{
        xtype: 'container',
        layout: {
            type: 'vbox',
            align: 'left'
        },
        defaultType: 'combobox',
        items: [{
            fieldLabel: 'Make',
            name: 'make',
            allowBlank: false,
            bind: {
                store: '{carMake}'
            },
            forceSelection: true,
            valueField: 'key',
            displayField : 'name'
        }, {
            fieldLabel: 'Model',
            name: 'model',
            allowBlank: false
        }, {
            fieldLabel: 'Truck Type',
            name: 'truckType',
            allowBlank: false
        }, {
            fieldLabel: 'Body Type',
            name: 'bodyType',
            allowBlank: false
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Year',
            name: 'year',
            allowBlank: false,
            minValue : 2000,
            maxValue : 2020
        }]
    }, {
        xtype: 'splitter',
        width: '1',
        height: '96%',
        margin: '0 10 0 10',
        style: 'border: 2px solid gray;'
    }, {
        xtype: 'container',
        layout: {
            type: 'vbox',
            align: 'top'
        },
        items: [{
            xtype: 'container',
            layout: {
                type: 'hbox'
            },
            items: [{
                xtype: 'radiogroup',
                columns: 2,
                items: [
                    {
                        boxLabel: 'Existed', name: 'rb', inputValue: '1', margin: '2 10 2 10', checked: true,
                        listeners: {
                            change: 'onComboChange'
                        }
                    },
                    {
                        boxLabel: 'New', name: 'rb', margin: '2 10 2 10', inputValue: '2',
                    }
                ]
            }]
        }, {
            xtype: 'combobox',
            fieldLabel: 'Choose Param',
            id: 'newTruckParamComboID',
            bind: {
                store: '{truckParams}'
            },
            value : 1,
            forceSelection: true,
            //queryMode: 'local',
            valueField: 'id',
            displayField : 'paramName',
            name: 'truckParam',
            allowBlank: false
        }, {
            xtype: 'textfield',
            fieldLabel: 'Param name',
            id: 'newTruckParamNameID',
            emptyText: 'in case to save param',
            name: 'paramName',
            hidden: true,
            allowBlank: true
        }, {
            xtype: 'container',
            defaultType: 'numberfield',
            layout: {
                type: 'vbox'
            },
            items: [{
                fieldLabel: 'Max Wight',
                name: 'maxWeight',
                id: 'newTruckParamMaxWeightID',
                disabled : false,
                allowBlank: false,
                bind : {
                    value : '{truckParams.first.maxWeight}'
                }
            },{
                fieldLabel: 'Length',
                name: 'length',
                id: 'newTruckParamLenghtID',
                disabled : false,
                allowBlank: false,
                bind : {
                    value : '{truckParams.first.length}'
                }
            }, {
                fieldLabel: 'Width',
                name: 'width',
                id: 'newTruckParamWidthID',
                disabled : false,
                allowBlank: false,
                bind : {
                    value : '{truckParams.first.width}'
                }
            }, {
                fieldLabel: 'Height',
                name: 'height',
                id: 'newTruckParamHeightID',
                disabled : false,
                allowBlank: false,
                bind : {
                    value : '{truckParams.first.height}'
                }
            }]
        }]
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'footer',
        items: ['->', {
            iconCls: 'icon-user-add',
            text: 'Create',
            //id : 'create',
            scope: this.controller,
            //   handler: 'onCreate'
        },]
    }]

});
