import { Component, ViewEncapsulation } from '@angular/core';
// import * as _ from '../../../manual_module/bootstrap/vendor/datatables/jquery.dataTables.js';
// import * as _ from '../../../manual_module/bootstrap/js/sb-admin-datatables.min.js';
// import * as _ from '../../../manual_module/bootstrap/vendor/bootstrap/js/bootstrap.bundle.min.js';
// import * as _ from '../../../manual_module/bootstrap/vendor/jquery-easing/jquery.easing.min.js';
// import * as _ from '../../../manual_module/bootstrap/js/sb-admin.min.js';

@Component({
	selector : 'chart-page',
    templateUrl : 'app/components/chart/chart.component.html',
    encapsulation : ViewEncapsulation.None
})
export default class ChartComponent {
	
    ngOnInit(){
        $("#dataTable").DataTable();
    }
}
