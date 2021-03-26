import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersModel } from 'src/app/models/orders.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-processorder',
  templateUrl: './processorder.component.html',
  styleUrls: ['./processorder.component.css']
})
export class ProcessorderComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private orderService: OrderService) { }

  orderid;
  order = new OrdersModel(null, null, null, null, null, null, null, null);
  delmode;
  newstatus;

  submit() {
    this.order.status = this.newstatus;
    this.orderService.processorder(this.order).subscribe(status => {
      if (status.message == "success") {
        this.router.navigate(['/orders']);
      };
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.orderid = params.id;
      this.orderService.getorder(this.orderid).subscribe(order => {
        this.order = order[0];
      });
    });
  }

}
