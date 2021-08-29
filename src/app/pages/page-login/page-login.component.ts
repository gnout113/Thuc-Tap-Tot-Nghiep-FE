import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-login',
    templateUrl: './page-login.component.html',
    styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    public onSignIn(event: any): void {
        console.log("Sign In");
    }
}
