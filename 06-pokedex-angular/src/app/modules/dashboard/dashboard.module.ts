import { PokemonCardComponent } from './../../components/pokemon-card/pokemon-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from 'src/app/components/card/card.component';

const components:any = [
  CardComponent,
  PokemonCardComponent
]


@NgModule({
    declarations: [
        DashboardComponent,
        ...components,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ]
})
export class DashboardModule { }
