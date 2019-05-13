import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  public configuration: any;
  constructor(private configService: ConfigService){}

  public showConfig(): void {
    this.configService.getConfig()
      .subscribe((data) => {
        this.configuration = data;
      });
  }
}
