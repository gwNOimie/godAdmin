import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DronesListComponent } from './pages/drones-list/drones-list.component';
import { EngineListComponent } from './pages/engine-list/engine-list.component';
import { PropellerListComponent } from './pages/propeller-list/propeller-list.component';
import { ShieldListComponent } from './pages/shield-list/shield-list.component';
import { WeaponListComponent } from './pages/weapon-list/weapon-list.component';
import { GearListComponent } from './pages/gear-list/gear-list.component';
import { AttackListComponent } from './pages/attack-list/attack-list.component';
import { FireBonusListComponent } from './pages/fire-bonus-list/fire-bonus-list.component';
import { ElectricityBonusListComponent } from './pages/electricity-bonus-list/electricity-bonus-list.component';
import { ExplosiveBonusListComponent } from './pages/explosive-bonus-list/explosive-bonus-list.component';
import { PlayerListComponent } from './pages/player-list/player-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    DronesListComponent,
    EngineListComponent,
    PropellerListComponent,
    ShieldListComponent,
    WeaponListComponent,
    GearListComponent,
    AttackListComponent,
    FireBonusListComponent,
    ElectricityBonusListComponent,
    ExplosiveBonusListComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
