import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HomePageRoutingModule } from "./home-routing.module";
import { BannerComponent } from "./banner/banner.component";
import { AdvantagesComponent } from "./sections/advantages/advantages.component";
import { InitiativesComponent } from "./sections/initiatives/initiatives.component";
import { ChancesComponent } from "./sections/chances/chances.component";
import { AchievementsComponent } from "./sections/achievements/achievements.component";
import { PartnershipsComponent } from "./sections/partnerships/partnerships.component";
import { ConnectFormComponent } from "./sections/connect-form/connect-form.component";
import { ChanceCardComponent } from "../components/cards/chance-card/chance-card.component";
import { HomePageComponent } from "./home.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    BannerComponent,
    AdvantagesComponent,
    InitiativesComponent,
    ChancesComponent,
    AchievementsComponent,
    PartnershipsComponent,
    ConnectFormComponent,
    ChanceCardComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HomePageModule {}
