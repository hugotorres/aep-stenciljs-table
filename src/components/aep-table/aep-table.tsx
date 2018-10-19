import { Component, Prop } from '@stencil/core';
import 'https://unpkg.com/ag-grid-community@19.0.0/dist/ag-grid-community.min.js';
@Component({
    tag: 'aep-table',
    styleUrl: 'aep-table.css',
    shadow: false
})
export class AepTable {
    content: null;
    @Prop() properties;
    renewTypeClassRules = {
        'current-price': 'x=="current-price"',
        'current-term': 'x=="current-term"',
        'monthly': 'x=="monthly"',
        'no-renew': 'x=="no-renew"',
        'renew': 'x=="renew"',
        'revised': 'x=="revised"'
    };
    checkboxRenderer = function (params) {
        return `<label class="container"><input type='checkbox' ${params.value == 'Y' ? 'checked' : ''} /><span class="checkmark"></span></label>`;
    }
    renewTypeRenderer = function (params) {
        return '<i class="icon-' + params.value + '"></i>';
    }
    gridOptions = {
        rowSelection: 'multiple',
        rowData: this.content,
        enableSorting: true,
        enableFilter: false,
        suppressMenuHide: true,
        enableColResize: false,
        paginationPageSize: 10,
        pagination: true,
        domLayout: 'autoHeight',
        headerHeight: 36,
        groupHeaderHeight: 36,

        defaultColDef: {
            enableColResize: false,
            editable: true,
            autoHeight: true,
            suppressMenu: true,
        },
        //getRowModelClass:function(){return 'rowclass'},
        onGridReady: function () {
            console.log(this.properties);
        },
        columnDefs: [
            {
                headerName: '', children: [
                    { headerName: '', checkboxSelection: true, width: 55, pinned: 'left', cellClass: 'checkbox-cell' },
                    { headerName: 'Term', field: 'term.netTerm', autoHeight: true, width: 100, headerClass: 'header-center' },
                    {
                        headerName: 'Primary Auto Renew type', 
                        field: 'primaryAuto',
                        cellClassRules: this.renewTypeClassRules,
                        cellRenderer: this.renewTypeRenderer,
                        filter: 'agSetColumnFilter',
                        cellEditor: 'agSelectCellEditor',
                        cellEditorParams: {
                            values: ['current-price', 'current-term', 'monthly', 'no-renew', 'renew', 'revised']
                        },
                        width: 180
                    },
                    {
                        headerName: 'Secondary Auto Renew type',
                        field: 'secondaryAuto',
                        cellClassRules: this.renewTypeClassRules,
                        cellRenderer: this.renewTypeRenderer,
                        cellEditor: 'agSelectCellEditor',
                        filter: 'agSetColumnFilter',
                        cellEditorParams: {
                            values: ['current-price', 'current-term', 'monthly', 'no-renew', 'renew', 'revised']
                        }
                    },
                    { headerName: 'Utility', field: 'utility', headerClass: 'header-center' },
                    { headerName: 'previous Price', field: 'previousPrice', width: 120 },
                    { headerName: 'Basic Services Prices', field: 'basicServicePrice', width: 150 },
                    { headerName: 'Basic Services Prices to', field: 'basicServicePriceTo', width: 185 },
                    { headerName: 'Schedule', field: 'schedule', headerClass: 'header-center' },
                    { headerName: 'Price (c/kWh)', field: 'priceKwh.perKWh', width: 120 },
                    { headerName: 'Rate Code', field: 'rateCode', headerClass: 'header-center' },
                    { headerName: 'ETF ($)', field: 'etf', headerClass: 'header-center' },
                    {
                        headerName: 'Cancellation Type', field: 'cancellationType', cellEditor: 'agSelectCellEditor',
                        cellEditorParams: {
                            values: ['no -cancellation-fee', 'cancellation fee']
                        }
                    },
                ]
            },
            {
                headerName: 'Acquisition Margins', headerClass: 'group-header', children: [
                    { headerName: 'Margin ($/MWh)', field: 'acqtMrgnMarginMwh', width: 130, headerClass: 'red' },
                    { headerName: 'COP', field: 'acqtMrgnCop', width: 90, headerClass: 'red header-center'},
                ],
                cellClass: 'aquisition-margins-group'
            },
            {
                headerName: 'Web CH.', headerClass: 'group-header', children: [
                    { headerName: 'AQ', field: 'webChnlAQ', width: 80, headerClass: 'pink header-center', cellRenderer: this.checkboxRenderer },
                    { headerName: 'RL', field: 'webChnlRL', width: 80, headerClass: 'pink header-center', cellRenderer: this.checkboxRenderer },
                ], cellClass: 'web-group'
            },
            {
                headerName: 'IBTM CH.', headerClass: 'group-header', children: [
                    { headerName: 'AQ', field: 'ibtmChnlAQ', width: 80, headerClass: 'light-pink header-center', cellRenderer: this.checkboxRenderer },
                    { headerName: 'RL', field: 'ibtmChnlRT', width: 80, headerClass: 'light-pink header-center', cellRenderer: this.checkboxRenderer },
                    { headerName: 'RT', field: 'ibtmChnlRL', width: 80, headerClass: 'light-pink header-center', cellRenderer: this.checkboxRenderer }
                ], cellClass: 'ibtm-group'
            }
        ]
    };

    componentWillLoad() {
        return fetch('https://api.myjson.com/bins/6mfz4')
            .then(response => response.json())
            .then(data => {
                this.content = data;
            });
    }
    componentDidLoad() {
        //var gridDiv = this.tablediv;
        var gridDiv = document.querySelector('#myGrid');
        new window['agGrid'].Grid(gridDiv, this.gridOptions);
        this.gridOptions['api'].sizeColumnsToFit();
        this.gridOptions['api'].setRowData(this.content);
    }
    render() {
        return <div id="myGrid" class="gag-theme-balham"></div>
    }
}
