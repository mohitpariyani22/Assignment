import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { Router } from "@angular/router";


@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component implements OnInit {
  current: string;
  min: number;
  max: number;

  // SLIDER
  value: number = 50;
  options: Options = {
    floor: 0,
    ceil: 100
  };

  // SLIDE TOGGLE
  color = 'primary';
  checked = false;
  disabled = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onChange = (val) => {
    this.min = parseInt(val.split('-')[0]);
    this.max = parseInt(val.split('-')[1]);
    this.options = {
      floor: this.min,
      ceil: this.max
    }
    this.value = this.min + ((this.max - this.min) / 2); 
    console.log(this.options.floor, this.options.ceil, this.value);
  }

  onChangeSlider = (currentVal) => {
    console.log(currentVal);
  }

  onSubmit = () => {
    if (!this.checked) {
      this.router.navigateByUrl('/screen2');
    }
    else {
      setTimeout(() => {
        this.router.navigateByUrl('/screen2');
      }, this.value*1000)
    }
    console.log('this.checked', this.checked);
  }

  slideToggleChange = (change) => {
    this.checked = !this.checked;
    console.log(this.checked);
  }
}
