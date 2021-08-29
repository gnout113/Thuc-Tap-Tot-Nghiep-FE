import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
    selector: 'page-home',
    templateUrl: './page-home.component.html',
    styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent implements OnInit {
    public items: MenuItem[] = [];

    constructor() { }

    ngOnInit(): void {
        this.items = [
            {
                label: 'Profile',
                icon: PrimeIcons.USER,
                command: (event: Event) => this.onProfile(event),
            },
            {
                label: "Log Out",
                icon: PrimeIcons.SIGN_OUT,
                command: (event: Event) => this.onLogOut(event),
            }
        ];
    }

    public onProfile(event: any): void {
        console.log("Profile");
    }

    public onLogOut(event: any): void {
        console.log("Log Out");
    }
}
