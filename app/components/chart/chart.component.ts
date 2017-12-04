import { Component } from '@angular/core';
import { ProductService} from './services/product.service';

@Component({
	selector : 'chart-page',
	templateUrl : 'app/components/chart/chart.component.html'
})
export default class ChartComponent {

	product : Product;


}
