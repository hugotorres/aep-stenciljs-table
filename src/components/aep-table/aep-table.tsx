import { Component, Prop } from '@stencil/core';
import 'https://unpkg.com/ag-grid-community@19.0.0/dist/ag-grid-community.min.js';

@Component({
    tag: 'aep-table',
    styleUrl: 'aep-table.css',
    shadow: false
})
export class AepTable {
    content: null;
    @Prop() issetPagination: true;
    renewTypeClassRules = {
        'current-price': 'x=="current-price"',
        'current-term': 'x=="current-term"',
        'monthly': 'x=="monthly"',
        'no-renew': 'x=="no-renew"',
        'renew': 'x=="renew"',
        'revised': 'x=="revised"'
    };
    renewTypeRenderer = function (params) {
        // console.log(params.value.toLocaleString());
        return '<i class="icon-' + params.value + '"></i>';
    }
    gridOptions = {
        /*  rowData: [
              {
                  "term": "3",
                  "primary_auto_renew_type": "current-price",
                  "secondary_auto_renew_type": "auto_renew",
                  "utility": "COLUMBIA_OH",
                  "previous_price": "8.00",
                  "basic_services_proces": "8.88",
                  "basic_services_process_to": "8.88",
                  "schedule": "24 Month - G- HC -$120",
                  "price": 7.79,
                  "rate_code": "ACBD12",
                  "etf": "No-ETF",
                  "cancelation-type": "No term fee",
                  "margin": "10.00",
                  "cop": "78.888",
                  "web_aq": true,
                  "web_rl": true,
                  "ibtm_aq": true,
                  "ibtm_rl": true,
                  "ibtm_rt": true,
                  "id": 2894
              }, {
                  "term": "6",
                  "primary_auto_renew_type": "current-term",
                  "secondary_auto_renew_type": "auto_renew",
                  "utility": "WEST_PENN_POWER",
                  "previous_price": "8.00",
                  "basic_services_proces": "8.88",
                  "basic_services_process_to": "8.88",
                  "schedule": "24 Month - G- HC -$120",
                  "price": 7.79,
                  "rate_code": "ACBD12",
                  "etf": "No-ETF",
                  "cancelation-type": "No term fee",
                  "margin": "10.00",
                  "cop": "78.888",
                  "web_aq": true,
                  "web_rl": true,
                  "ibtm_aq": true,
                  "ibtm_rl": true,
                  "ibtm_rt": true,
                  "id": 2895
              }, {
                  "term": "12",
                  "primary_auto_renew_type": "monthly",
                  "secondary_auto_renew_type": "auto_renew",
                  "utility": "POTOMAC_EDISON",
                  "previous_price": "8.00",
                  "basic_services_proces": "8.88",
                  "basic_services_process_to": "8.88",
                  "schedule": "24 Month - G- HC -$120",
                  "price": 7.79,
                  "rate_code": "ACBD12",
                  "etf": "No-ETF",
                  "cancelation-type": "No term fee",
                  "margin": "10.00",
                  "cop": "78.888",
                  "web_aq": true,
                  "web_rl": true,
                  "ibtm_aq": true,
                  "ibtm_rl": true,
                  "ibtm_rt": true,
                  "id": 2896
              }, {
                  "term": "24",
                  "primary_auto_renew_type": "no-renew",
                  "secondary_auto_renew_type": "auto_renew",
                  "utility": "DELMARVA_DE",
                  "previous_price": "8.00",
                  "basic_services_proces": "8.88",
                  "basic_services_process_to": "8.88",
                  "schedule": "24 Month - G- HC -$120",
                  "price": 7.79,
                  "rate_code": "ACBD12",
                  "etf": "No-ETF",
                  "cancelation-type": "No term fee",
                  "margin": "10.00",
                  "cop": "78.888",
                  "web_aq": true,
                  "web_rl": true,
                  "ibtm_aq": true,
                  "ibtm_rl": true,
                  "ibtm_rt": true,
                  "id": 2897
              }, {
                  "term": "12",
                  "primary_auto_renew_type": "renew",
                  "secondary_auto_renew_type": "auto_renew",
                  "utility": "DELMARVA_DE",
                  "previous_price": "8.00",
                  "basic_services_proces": "8.88",
                  "basic_services_process_to": "8.88",
                  "schedule": "24 Month - G- HC -$120",
                  "price": 7.79,
                  "rate_code": "ACBD12",
                  "etf": "No-ETF",
                  "cancelation-type": "No term fee",
                  "margin": "10.00",
                  "cop": "78.888",
                  "web_aq": true,
                  "web_rl": true,
                  "ibtm_aq": true,
                  "ibtm_rl": true,
                  "ibtm_rt": true,
                  "id": 2898
              }, {
                  "term": "12",
                  "primary_auto_renew_type": "revised",
                  "secondary_auto_renew_type": "renew",
                  "utility": "DELMARVA_DE",
                  "previous_price": "6.00",
                  "basic_services_proces": "7.88",
                  "basic_services_process_to": "8.88",
                  "schedule": "24 Month - G- HC -$120",
                  "price": 8.79,
                  "rate_code": "ACBD12",
                  "etf": "No-ETF",
                  "cancelation-type": "No term fee",
                  "margin": "20.00",
                  "cop": "28.888",
                  "web_aq": false,
                  "web_rl": false,
                  "ibtm_aq": false,
                  "ibtm_rl": true,
                  "ibtm_rt": true,
                  "id": 2899
              }, {
                  "term": "6",
                  "primary_auto_renew_type": "revised",
                  "secondary_auto_renew_type": "renew",
                  "utility": "DELMARVA_DE",
                  "previous_price": "7.00",
                  "basic_services_proces": "8.88",
                  "basic_services_process_to": "9.88",
                  "schedule": "24 Month - G- HC -$120",
                  "price": 8.79,
                  "rate_code": "ACBD12",
                  "etf": "No-ETF",
                  "cancelation-type": "No term fee",
                  "margin": "20.00",
                  "cop": "28.888",
                  "web_aq": false,
                  "web_rl": false,
                  "ibtm_aq": false,
                  "ibtm_rl": true,
                  "ibtm_rt": true,
                  "id": 2900
              }, {
                  "term": "12",
                  "primary_auto_renew_type": "renew",
                  "secondary_auto_renew_type": "renew",
                  "utility": "DELMARVA_DE",
                  "previous_price": "6.70",
                  "basic_services_proces": "7.98",
                  "basic_services_process_to": "8.89",
                  "schedule": "24 Month - G- HC -$120",
                  "price": 8.79,
                  "rate_code": "ACBD12",
                  "etf": "No-ETF",
                  "cancelation-type": "No term fee",
                  "margin": "20.00",
                  "cop": "28.848",
                  "web_aq": false,
                  "web_rl": false,
                  "ibtm_aq": false,
                  "ibtm_rl": true,
                  "ibtm_rt": true,
                  "id": 2901
              }],
              */
        rowData: this.content,
        enableSorting: true,
        enableFilter: false,
        suppressMenuHide: true,

        enableColResize: true,
        defaultColDef: {
            enableColResize: true,
            editable: true,
            autoHeight: true,
            suppressMenu: true,
        }, pagination: true,
        paginationPageSize: 10,

        //  domLayout: 'autoHeight',
        //getRowModelClass:function(){return 'rowclass'},
        onGridReady: function () {
            // console.log(this.pagination);
            // params.api.sizeColumnsToFit();
            //  this.gridOptions.api.sizeColumnsToFit();
            // this.gridOptions['api'].setRowData(this.content);
        },
        columnDefs: [
            {
                headerName: '', children: [
                    { headerName: '', checkboxSelection: true, width: 60 },
                    { headerName: 'Term', field: 'term.netTerm', autoHeight: true, width: 100 },
                    {
                        headerName: 'Primary Auto Renew type', field: 'primaryAuto', cellClassRules: this.renewTypeClassRules, cellRenderer: this.renewTypeRenderer, autoHeight: true, filter: 'agSetColumnFilter',
                        cellEditor: 'agSelectCellEditor',
                        cellEditorParams: {
                            values: ['current-price', 'current-term', 'monthly', 'no-renew', 'renew', 'revised']
                        }
                    },
                    {
                        headerName: 'Secondary Auto Renew type', field: 'secondaryAuto', cellClassRules: this.renewTypeClassRules, cellRenderer: this.renewTypeRenderer, cellEditor: 'agSelectCellEditor',
                        cellEditorParams: {
                            values: ['current-price', 'current-term', 'monthly', 'no-renew', 'renew', 'revised']
                        }
                    },
                    { headerName: 'Utility', field: 'utility' },
                    { headerName: 'previous Price', field: 'previousPrice' },
                    { headerName: 'Basic Services Prices', field: 'basicServicePrice' },
                    { headerName: 'Basic Services Prices to', field: 'basicServicePriceTo' },
                    { headerName: 'Schedule', field: 'schedule' },
                    { headerName: 'Price (c/kWh)', field: 'priceKwh.perKWh' },
                    { headerName: 'Rate Code', field: 'rateCode' },
                    { headerName: 'ETF ($)', field: 'etf' },
                    {
                        headerName: 'Cancellation Type', field: 'cancellationType', cellEditor: 'agSelectCellEditor',
                        cellEditorParams: {
                            values: ['no -cancellation-fee', 'cancellation fee']
                        }
                    },

                ]
            },
            {
                headerName: 'Aquisition Margins', children: [
                    { headerName: 'Margin ($/MWh)', field: 'acqtMrgnMarginMwh' },
                    { headerName: 'COP', field: 'acqtMrgnCop' },
                ],
                cellClass: 'aquisition-margins-group'
            },
            {
                headerName: 'Web CH', children: [
                    { headerName: 'AQ', field: 'webChnlAQ', width: 100 },
                    { headerName: 'RL', field: 'webChnlRL', width: 100 },
                ], cellClass: 'web-group'
            },
            {
                headerName: 'IBTM CH', children: [
                    { headerName: 'AQ', field: 'ibtmChnlAQ', width: 100 },
                    { headerName: 'RL', field: 'ibtmChnlRT', width: 100 },
                    { headerName: 'RT', field: 'ibtmChnlRL', width: 100 }
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
        return <div id="myGrid" class="ag-theme-balham"></div>
    }
}
